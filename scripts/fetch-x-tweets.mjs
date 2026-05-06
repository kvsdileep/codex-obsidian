#!/usr/bin/env node

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { homedir } from 'node:os';

const DEFAULT_ENV_PATH = `${homedir()}/.follow-builders/.env`;
const X_API_BASE = 'https://api.x.com/2';

function parseArgs(argv) {
  const args = {
    out: null,
    env: DEFAULT_ENV_PATH,
    channel: '#daily-ai-update',
    urls: []
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--out') {
      args.out = argv[++i];
    } else if (arg === '--env') {
      args.env = argv[++i];
    } else if (arg === '--channel') {
      args.channel = argv[++i];
    } else if (arg === '--help' || arg === '-h') {
      args.help = true;
    } else {
      args.urls.push(arg);
    }
  }

  return args;
}

function showHelp() {
  console.log(`Usage:
  node scripts/fetch-x-tweets.mjs [tweet-url ...] --out .raw/tweets/YYYY-MM-DD-daily-ai-update.md
  printf '%s\\n' '<tweet-url>' | node scripts/fetch-x-tweets.mjs --out .raw/tweets/YYYY-MM-DD-daily-ai-update.md

Options:
  --out <path>       Write markdown output to a file. If omitted, prints to stdout.
  --env <path>       Env file containing X_BEARER_TOKEN. Default: ~/.follow-builders/.env
  --channel <name>   Source channel name for frontmatter. Default: #daily-ai-update
`);
}

async function readStdinIfAvailable() {
  if (process.stdin.isTTY) return '';

  const chunks = [];
  for await (const chunk of process.stdin) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

async function loadEnv(path) {
  if (!existsSync(path)) return {};

  const content = await readFile(path, 'utf8');
  const env = {};

  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const match = line.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (!match) continue;
    let value = match[2].trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    env[match[1]] = value;
  }

  return env;
}

function extractTweetId(input) {
  const trimmed = input.trim();
  if (!trimmed) return null;

  const statusMatch = trimmed.match(/(?:twitter\.com|x\.com)\/[^/\s]+\/status(?:es)?\/(\d+)/i);
  if (statusMatch) return statusMatch[1];

  const idOnly = trimmed.match(/^\d{10,25}$/);
  if (idOnly) return trimmed;

  return null;
}

function unique(values) {
  return [...new Set(values)];
}

function yamlString(value) {
  return JSON.stringify(String(value ?? ''));
}

function formatMetrics(metrics = {}) {
  const fields = [
    ['likes', metrics.like_count],
    ['retweets', metrics.retweet_count],
    ['replies', metrics.reply_count],
    ['quotes', metrics.quote_count],
    ['bookmarks', metrics.bookmark_count],
    ['impressions', metrics.impression_count]
  ];

  return fields
    .filter(([, value]) => typeof value === 'number')
    .map(([name, value]) => `  - ${name}: ${value}`)
    .join('\n');
}

function makeMarkdown({ tweets, usersById, sourceUrls, channel }) {
  const date = new Date().toISOString().slice(0, 10);
  const fetched = new Date().toISOString();

  const lines = [
    '---',
    'source_type: tweets',
    `source_channel: ${yamlString(channel)}`,
    `collected: ${date}`,
    `fetched: ${yamlString(fetched)}`,
    `count: ${tweets.length}`,
    '---',
    '',
    `# Daily AI Update Tweets - ${date}`,
    '',
    `Source channel: ${channel}`,
    ''
  ];

  tweets.forEach((tweet, index) => {
    const user = usersById.get(tweet.author_id);
    const handle = user?.username ? `@${user.username}` : 'unknown';
    const name = user?.name || handle;
    const url = user?.username
      ? `https://x.com/${user.username}/status/${tweet.id}`
      : sourceUrls.get(tweet.id) || `https://x.com/i/web/status/${tweet.id}`;

    lines.push(`## Tweet ${index + 1}`);
    lines.push('');
    lines.push(`- URL: ${url}`);
    lines.push(`- Author: ${name} (${handle})`);
    lines.push(`- Date: ${tweet.created_at || ''}`);
    lines.push(`- Tweet ID: ${tweet.id}`);
    lines.push('');
    lines.push('### Text');
    lines.push('');
    lines.push(tweet.text || '');
    lines.push('');

    const metrics = formatMetrics(tweet.public_metrics);
    if (metrics) {
      lines.push('### Metrics');
      lines.push('');
      lines.push(metrics);
      lines.push('');
    }
  });

  return `${lines.join('\n').trimEnd()}\n`;
}

async function fetchTweets({ ids, token }) {
  const params = new URLSearchParams({
    ids: ids.join(','),
    'tweet.fields': [
      'author_id',
      'created_at',
      'conversation_id',
      'entities',
      'lang',
      'public_metrics',
      'referenced_tweets'
    ].join(','),
    expansions: 'author_id',
    'user.fields': 'id,name,username,description'
  });

  const response = await fetch(`${X_API_BASE}/tweets?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    const detail = body.detail || body.title || JSON.stringify(body);
    throw new Error(`X API tweet lookup failed: HTTP ${response.status} ${detail}`);
  }

  return body;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    showHelp();
    return;
  }

  const stdin = await readStdinIfAvailable();
  const candidates = [
    ...args.urls,
    ...stdin.split(/\s+/).filter(Boolean)
  ];

  const ids = unique(candidates.map(extractTweetId).filter(Boolean));
  if (ids.length === 0) {
    throw new Error('No tweet URLs or tweet IDs were provided.');
  }

  const env = {
    ...await loadEnv(args.env),
    ...process.env
  };

  if (!env.X_BEARER_TOKEN) {
    throw new Error(`X_BEARER_TOKEN was not found. Expected it in ${args.env} or the current environment.`);
  }

  const sourceUrls = new Map();
  for (const candidate of candidates) {
    const id = extractTweetId(candidate);
    if (id && candidate.startsWith('http')) sourceUrls.set(id, candidate);
  }

  const payload = await fetchTweets({ ids, token: env.X_BEARER_TOKEN });
  const usersById = new Map((payload.includes?.users || []).map((user) => [user.id, user]));
  const tweetsById = new Map((payload.data || []).map((tweet) => [tweet.id, tweet]));
  const tweets = ids.map((id) => tweetsById.get(id)).filter(Boolean);
  const markdown = makeMarkdown({ tweets, usersById, sourceUrls, channel: args.channel });

  if (args.out) {
    const outPath = resolve(args.out);
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, markdown, 'utf8');
    console.error(`Wrote ${tweets.length} tweets to ${outPath}`);
  } else {
    process.stdout.write(markdown);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
