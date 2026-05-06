# Start Here

This vault has three ingestion lanes:

1. Web clips from the Obsidian Web Clipper
2. Tweets collected from Slack channel `#daily-ai-update`
3. Exported chats from Claude, ChatGPT, Codex, or other assistants

## 1. Web Clipper

Install the Obsidian Web Clipper browser extension.

Set the clip save location to:

```text
.raw/articles/{{title}}.md
```

Recommended clip template:

```markdown
---
source_type: article
title: "{{title}}"
url: "{{url}}"
author: "{{author}}"
published: "{{published}}"
clipped: "{{date}}"
---

# {{title}}

Source: {{url}}

{{content}}
```

Then clip normally. When ready, ask Codex:

```text
ingest new web clips
```

Codex will process `.raw/articles/`, create source notes in `wiki/sources/`, extract concepts and entities, and update the index, log, hot cache, and manifest.

## 2. Tweets From Slack

Target channel:

```text
#daily-ai-update
```

Best workflow:

1. Make sure the Slack connector is enabled in Codex.
2. Keep tweet URLs in `#daily-ai-update`.
3. Add an X API bearer token in your local shell, not in Slack:

```bash
export X_BEARER_TOKEN="your_x_api_bearer_token"
```

Then ask Codex:

```text
From Slack #daily-ai-update, get the last 10 tweet URLs, fetch their tweet text through the X API, save them into .raw/tweets/YYYY-MM-DD-daily-ai-update.md, then ingest them.
```

Codex should save a raw markdown file like this:

```markdown
---
source_type: tweets
source_channel: "#daily-ai-update"
collected: YYYY-MM-DD
count: 10
---

# Daily AI Update Tweets - YYYY-MM-DD

## Tweet 1

- URL:
- Author:
- Date:
- Text:
- Metrics:

## Tweet 2

...
```

If X API access is unavailable, Codex can still ingest the Slack message text and tweet URLs, but the source note should mark the tweet content as incomplete.

## 3. Exported Chats

Drop exports into:

```text
.raw/chats/
```

Good filenames:

```text
2026-05-06-chatgpt-growth-strategy.md
2026-05-06-claude-obsidian-setup.html
2026-05-06-codex-vault-ingestion.txt
```

Then ask Codex:

```text
ingest the latest chat export
```

For chats, Codex should extract:

- decisions
- useful explanations
- action items
- reusable prompts
- unresolved questions
- durable concepts
- relevant entities

The full transcript stays in `.raw/chats/`; only the useful synthesis goes into `wiki/`.

## Useful First Commands

```text
ingest new web clips
```

```text
From Slack #daily-ai-update, get the last 10 tweet URLs, fetch their content through X API, save to .raw/tweets, and ingest.
```

```text
ingest the latest exported chat from .raw/chats
```

```text
what do we know about today's AI updates?
```

```text
run a vault health check
```
