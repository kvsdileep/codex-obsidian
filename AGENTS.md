# Codex Obsidian Agent Instructions

This folder is an Obsidian vault designed for Codex-assisted ingestion, synthesis, and retrieval. Keep it simple: preserve raw sources, create useful wiki notes, and maintain a small set of indexes so the vault compounds over time.

## Vault Map

- `.raw/` is the immutable source layer. Do not edit raw source files after they land here.
- `.raw/articles/` is for Obsidian Web Clipper markdown.
- `.raw/tweets/` is for tweet exports, tweet markdown, copied threads, or JSON exports.
- `.raw/chats/` is for exported ChatGPT, Claude, Codex, or other assistant conversations.
- `.raw/files/` is for PDFs, docs, CSVs, and miscellaneous imports.
- `wiki/` is the synthesized knowledge layer that Codex maintains.
- `wiki/sources/` has one summary note per ingested source.
- `wiki/concepts/` has durable ideas and frameworks.
- `wiki/entities/` has people, companies, products, tools, communities, and repos.
- `wiki/questions/` stores answered questions worth keeping.
- `wiki/topics/` groups larger areas of interest.
- `wiki/meta/` stores dashboards, conventions, and maintenance notes.
- `_templates/` stores Obsidian note templates.
- `_attachments/` stores images and files referenced by notes.

## Core Rules

1. Raw files are evidence. Do not rewrite, move, or delete user-provided files under `.raw/` unless the user explicitly asks.
2. Use Obsidian wikilinks for internal links: `[[Concept Name]]`.
3. Prefer updating existing notes over creating duplicates.
4. Keep notes atomic. If a note wants to be about two durable ideas, split it.
5. Every generated wiki note gets YAML frontmatter.
6. Every ingest updates `wiki/index.md`, `wiki/hot.md`, and `wiki/log.md`.
7. Use concise writing. Notes should be useful to future retrieval, not performative.

## Ingestion Workflow

When the user asks to ingest, process, save, absorb, or file something:

1. Read `wiki/hot.md` and `wiki/index.md` first.
2. List candidate files under `.raw/`.
3. Check `.raw/.manifest.json` to skip unchanged files unless the user says force ingest.
4. Compute a hash with `shasum -a 256 "<file>"`.
5. Read each new source fully enough to understand it.
6. Create or update:
   - a source note in `wiki/sources/`
   - relevant concept notes in `wiki/concepts/`
   - relevant entity notes in `wiki/entities/`
   - relevant topic notes in `wiki/topics/` when useful
7. Add backlinks between source, concepts, entities, and topics.
8. Update `.raw/.manifest.json` with hash, ingest date, and changed pages.
9. Update `wiki/index.md`, `wiki/hot.md`, and prepend an entry to `wiki/log.md`.

## Source Type Guidance

### Web Clipper Articles

Treat clipped pages as source notes first. Extract:

- article thesis
- key claims
- useful examples
- named people, companies, tools, and links
- concepts worth turning into durable notes
- possible follow-up questions

Recommended raw location: `.raw/articles/`.

### Tweets And Threads

Tweets are usually idea sparks, not final truth. Preserve author, URL, date, and tweet IDs when present. Extract:

- the core claim or observation
- context needed to understand it later
- why it matters
- whether it should become a concept note, entity note, or only a source note

Recommended raw location: `.raw/tweets/`.

For tweets collected from Slack, reuse the X API bearer token already configured by the `follow-builders` skill:

- token file: `~/.follow-builders/.env`
- variable: `X_BEARER_TOKEN`
- helper: `node scripts/fetch-x-tweets.mjs`

Do not print, copy, commit, or write the token into this vault. To fetch tweet text, collect tweet URLs from Slack, then pipe them into:

```bash
node scripts/fetch-x-tweets.mjs --out .raw/tweets/YYYY-MM-DD-daily-ai-update.md
```

The helper reads URLs from stdin or arguments, loads `~/.follow-builders/.env`, calls the X API, and writes raw markdown for ingestion.

### Exported Chats

Chats are high-signal but noisy. Preserve the transcript as raw evidence and synthesize only what is durable:

- decisions made
- useful explanations
- reusable prompts or workflows
- action items
- unresolved questions
- concepts or entities worth filing

Recommended raw location: `.raw/chats/`.

If a chat contains sensitive material, keep the source note factual and avoid copying private details into broad concept pages unless needed.

## Frontmatter Schema

Use flat YAML. Obsidian Properties works best with simple fields.

```yaml
---
type: source
title: "Readable Title"
created: 2026-05-06
updated: 2026-05-06
status: seed
tags:
  - source
related: []
sources: []
---
```

Allowed `type` values: `source`, `concept`, `entity`, `topic`, `question`, `meta`, `overview`.

Allowed `status` values: `seed`, `developing`, `mature`, `evergreen`, `archived`.

## Naming

- Source notes: `wiki/sources/<clear-source-title>.md`
- Concepts: `wiki/concepts/<Concept Name>.md`
- Entities: `wiki/entities/<Entity Name>.md`
- Topics: `wiki/topics/<Topic Name>.md`
- Questions: `wiki/questions/<Question as Title>.md`

Use human-readable filenames. Avoid opaque IDs unless the raw export already uses them.

## Slack Usage

The user plans to control this from Slack. When a Slack request is brief, infer the likely command:

- "ingest new clips" means process new files in `.raw/articles/`.
- "ingest tweets" means process new files in `.raw/tweets/`.
- "get the last 10 tweets from #daily-ai-update" means search Slack for the latest 10 tweet URLs in that channel, fetch their content with `scripts/fetch-x-tweets.mjs`, save the raw markdown under `.raw/tweets/`, then ingest it.
- "save this chat" means create a raw chat source if the transcript is provided, then synthesize it.
- "what do we know about X?" means answer from `wiki/hot.md`, `wiki/index.md`, and relevant notes, then optionally file the answer in `wiki/questions/`.

Ask at most one clarifying question if the requested source or folder is ambiguous.

## Query Workflow

When answering questions from the vault:

1. Read `wiki/hot.md`.
2. Search `wiki/index.md` and relevant folders.
3. Read only the notes needed to answer.
4. Cite wiki pages with wikilinks in the answer.
5. If the answer should be kept, create or update a note in `wiki/questions/`.

## Maintenance

When asked for a health check:

- find orphan notes
- find missing frontmatter
- find dead wikilinks
- identify duplicate concepts
- suggest 3-5 useful merges or splits

Keep maintenance suggestions practical and small.
