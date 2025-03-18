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
pubDate: 2025-03-17T20:04:00.000Z
image:
  url: 'https://shiki.matsu.io/logo.svg'
  alt: Shiki
draft: false
hiddenFromFeed: true
---

This blog assumes that you have a blog set up already. You should also understand Astro [Content Collections](https://docs.astro.build/en/guides/content-collections/) and how to render markdowns in your markup. 

## What is Shiki?

[Shiki](https://shiki.matsu.io) is a syntax highlighter. It renders your markdown code blocks into something a lot more pretty. 

Something like this.

\`\`\` js

console.log("Hello World!")

\`\`\`

It can turn into this!

```javascript
console.log("Hello World!")
```

## What is a Shiki Transformer?

Shiki [transformers](https://shiki.matsu.io/guide/transformers) allow you to manipulate the view of the code block Shiki renders to have nicely formatted highlights, added lines, deleted lines, lines with warnings, etc. 

An example of a code block with a transformer applied looks like this: 

```javascript
console.log("Delete this line!") // [!code --]
console.log("Add this line!") // [!code ++]
```

This block has a delete line and an add line transformer is applied. 

This is done by adding a comment at the end of the line that Shiki can read and apply the HTML. 

// \[!code --] comments add red highlighting and a minus. 
// \[!code ++] comments add green highlighting and a plus.

## How to Add Shiki Transformers to Astro

Astro has built-in support for Shiki, which is super nice. All we have to do is add this to our Astro config. '

In astro.config.js we add the following:

```javascript
export default defineConfig({
  markdown: { // [!code ++]
    syntaxHighlight: "shiki", // [!code ++]
    shikiConfig: { //[!code ++]
      theme: "any-theme-you-want", // [!code ++]
      transformers: [ // [!code ++]
        transformerNotationDiff(), // [!code ++]
        transformerNotationHighlight(), // [!code ++]
        transformerNotationWordHighlight(), // [!code ++]
        transformerNotationFocus(), // [!code ++]
        transformerNotationErrorLevel(), // [!code ++]
        transformerRenderWhitespace(), // [!code ++]
        transformerMetaWordHighlight(), // [!code ++]
      ],  // [!code ++]
    } // [!code ++]
  } // [!code ++]
}) // [!code ++]
```

You can add more or delete any transformer you may want/need, the documentation for these can be found [here](https://shiki.style/packages/transformers). 

You will also need to npm install [@shikijs/transformers](https://www.npmjs.com/package/@shikijs/transformers). 

## How Can We See the Cool Highlights? 

If you're like me, you might add these transformers to your code and wonder why none of the cool effects are appearing. This is because we need to style these HTML elements ourselves.  
