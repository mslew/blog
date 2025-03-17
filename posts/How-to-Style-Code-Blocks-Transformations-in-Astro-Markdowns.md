---
title: How to Style Code Blocks and Transformers in Astro Markdowns Using Shiki
slug: style-code-blocks
description: 'Tutorial on how to give yourself cool styles on Shiki codeblocks. '
tags:
  - tag: astro
  - tag: shiki
  - tag: tailwind
  - tag: css
author: Max Lewis
pubDate: 2025-03-17T05:00:00.000Z
image:
  url: 'https://shiki.matsu.io/logo.svg'
  alt: Shiki
draft: true
hiddenFromFeed: false
---

This blog assumes that you have a blog set up already. You should also understand Astro [Content Collections](https://docs.astro.build/en/guides/content-collections/) and how to render markdowns in your markup. 

## What is Shiki?

[Shiki](https://shiki.matsu.io) is a syntax highlighter. It renders your markdown code blocks into something a lot more pretty. 

Something like this.

````markdown
```js
console.log("Hello World!")
```
````

Can turn into this!

```javascript
console.log("Hello World!")
```
