---
type: topic
title: "Agent Architecture"
created: 2026-05-06
updated: 2026-05-06
status: developing
tags:
  - topic
  - agents
related:
  - "[[wiki/concepts/Layered Agent Architecture|Layered Agent Architecture]]"
sources:
  - "[[wiki/sources/Claude Code 5-Layer Agent Development Kit|Claude Code 5-Layer Agent Development Kit]]"
---

# Agent Architecture

## Overview

Agent architecture is the design of memory, skills, tools, guardrails, delegation, and packaging around an AI model so it can perform work reliably.

## Current Pattern

The five-layer framing from the clipped article is:

- memory layer: persistent project instructions
- knowledge layer: reusable skills and procedures
- guardrail layer: deterministic hooks and controls
- delegation layer: bounded subagents
- distribution layer: plugins and shared configurations

## Sources

- [[wiki/sources/Claude Code 5-Layer Agent Development Kit|Claude Code 5-Layer Agent Development Kit]]
