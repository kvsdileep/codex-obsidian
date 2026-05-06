# codex-obsidian

A simple Codex + Obsidian second brain vault.

This repository is a fork-inspired adaptation of `AgriciDaniel/claude-obsidian`, simplified for a fresh personal vault and for Codex workflows from the terminal or Slack.

## What This Vault Does

- Stores raw inputs from the Obsidian Web Clipper, tweet exports, and exported AI chats.
- Uses Codex to turn those raw inputs into source summaries, concept notes, entity notes, and topic maps.
- Maintains a small `wiki/` with an index, log, and hot cache so future sessions can quickly recover context.

## Open In Obsidian

Open this folder as a vault:

```bash
/Users/growthschool/Downloads/second_brain_v2
```

In Obsidian, use **Open folder as vault** and select this directory.

## Recommended Obsidian Setup

Keep the plugin setup light:

- Obsidian Web Clipper browser extension
- Templates core plugin
- Properties core plugin
- Graph View core plugin
- Optional: Obsidian Git for automatic backups

For Web Clipper, set the save location to:

```text
.raw/articles/{{title}}.md
```

For tweets and chats, drop exports into:

```text
.raw/tweets/
.raw/chats/
```

## Daily Usage

Start with [START_HERE.md](START_HERE.md) for the first Web Clipper, Slack tweet, and exported-chat workflows.

From Codex or Slack, use plain language:

- `ingest new web clips`
- `ingest tweets`
- `ingest everything new in .raw`
- `save this chat into the vault`
- `what do we know about <topic>?`
- `run a vault health check`

Codex will follow `AGENTS.md`.

## Structure

```text
.raw/          raw evidence, never edited after import
wiki/          synthesized notes maintained by Codex
_templates/    Obsidian templates
_attachments/  images and files referenced by notes
Inbox/         quick manual notes before filing
```

## Philosophy

The raw layer preserves what you captured. The wiki layer captures what you learned. Keep the system boring enough that you actually use it.
