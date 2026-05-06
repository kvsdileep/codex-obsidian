# Codex Obsidian Wiki

This vault is a persistent second brain for clipped articles, tweets, exported chats, and useful research trails. Codex is responsible for turning raw material into a small, linked wiki.

## Layers

### 1. Raw Evidence

Raw files live in `.raw/`.

- `.raw/articles/` for Obsidian Web Clipper markdown
- `.raw/tweets/` for tweet and thread exports
- `.raw/chats/` for ChatGPT, Claude, Codex, or other assistant exports
- `.raw/files/` for documents, PDFs, CSVs, and miscellaneous imports
- `.raw/assets/` for raw images or files that came with exports

Raw files should stay unchanged.

### 2. Synthesized Wiki

Generated notes live in `wiki/`.

- `wiki/sources/` summarizes individual raw sources.
- `wiki/concepts/` stores reusable ideas.
- `wiki/entities/` stores people, organizations, products, tools, and repos.
- `wiki/topics/` stores broader areas of interest.
- `wiki/questions/` stores durable answers.
- `wiki/meta/` stores maintenance notes and conventions.

### 3. Memory Files

- `wiki/index.md` is the map.
- `wiki/hot.md` is the recent context cache.
- `wiki/log.md` records what changed.
- `.raw/.manifest.json` tracks what has already been ingested.

## Ingestion Contract

When Codex ingests a source, it should:

1. preserve the raw file
2. create or update one source note
3. extract durable concepts and entities
4. link related notes
5. update the index, hot cache, log, and manifest

## Source Standards

Every source note should answer:

- What is this source?
- Why did it matter enough to save?
- What are the main claims or ideas?
- Which notes should it connect to?
- What should be revisited later?

## Note Standards

Good wiki notes are short, linked, and reusable. They should help a future Codex session answer questions without rereading every raw file.
