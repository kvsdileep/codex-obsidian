# Useful Prompts

## Web Clips

```text
Ingest new web clips from .raw/articles. Create source notes, update concepts/entities/topics, then update the index, hot cache, log, and manifest.
```

## Tweets

```text
Ingest new tweet exports from .raw/tweets. Treat tweets as idea sparks: preserve author and URL when available, extract the core claim, and only create durable concept notes when the idea is reusable.
```

## Chats

```text
Ingest the latest exported chat from .raw/chats. Preserve the transcript as raw evidence, then extract decisions, useful explanations, action items, reusable prompts, unresolved questions, and durable concepts.
```

## Ask The Vault

```text
Answer this from the vault: <question>. Read wiki/hot.md first, then wiki/index.md, then only the relevant notes. Cite notes with wikilinks.
```

## Health Check

```text
Run a vault health check. Look for missing frontmatter, dead wikilinks, duplicate concepts, orphan notes, and index entries that need updating. Suggest a small cleanup plan.
```
