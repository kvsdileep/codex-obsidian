---
title: "How to Build Your Own LLM Knowledge Base"
source: "https://substack.com/home/post/p-194608740"
author:
  - "[[Opinion AI]]"
published:
created: 2026-05-06
description: "How to stop starting from zero every time you open AI"
tags:
  - "clippings"
---
![](https://substackcdn.com/image/fetch/$s_!mTET!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4511b090-8e84-4c2e-9f77-bf2104b04ed0_1536x1024.png)

You use AI like a search engine with memory loss.

You ask a question, get an answer, close the tab. Tomorrow you ask something related and start from zero again. Nothing builds up. Nothing connects. You’re basically paying for the same context to be rebuilt over and over.

Andrej Karpathy posted something recently that flipped this for me. He talked about using LLMs not as answer machines, but more like librarians. You feed them raw stuff (articles, PDFs, notes, anything), and they quietly build a personal wiki in the background. The wiki grows. Ideas start linking to each other. And when you ask questions later, the AI researches against its own compiled knowledge instead of guessing from scratch.

People call this an LLM knowledge base. Basically your own external brain.

And honestly, once you try it for a week, you can’t really go back to the normal way of using AI.

![](https://substackcdn.com/image/fetch/$s_!RDq2!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbdcd0e20-4aa8-4deb-a606-b89f630d8c44_1024x691.png)

Let me walk you through building one. No code. No scary terminals. Just a note-taking app, an AI chat, and about twenty minutes.

## What you’re actually building here

Two folders. That’s the whole thing.

One folder holds raw stuff. Articles you clipped, notes you wrote, pdfs, anything you want to remember later. This folder stays untouched. The AI reads from it but never messes with it.

The other folder is the wiki. This is where the AI writes. Summaries of each source, articles about the key concepts, and an index that ties everything together. You basically don’t touch this folder either. It’s the AI’s job now.

That’s it. You feed the first folder. The AI builds the second folder. You ask questions against the second folder.

## The setup takes two minutes, promise

Go download Obsidian. It’s free. Works on Mac, Windows, Linux, phone, whatever you use.

Open it and create a new vault. A vault is just a folder on your computer where Obsidian keeps your notes. Name it something useful. Could be ai-research or crypto-brain or startup-ideas, whatever topic you’re building this around.

Inside the vault, create two folders. Call them `raw` and `wiki`.

Setup done.