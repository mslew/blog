---
title: >-
  How to Style Code Blocks and Transformers in Astro Markdowns Using Shiki and
  CSS
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

```
// [!code --] [!code --] comments add red highlighting and a minus.
// [!code ++] [!code ++] comments add green highlighting and a plus.
```

More comments can be seen on [Shiki Transformers](https://shiki.style/packages/transformers) that can be applied to our lines of code.  

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
})
```

You can add more or delete any transformer you may want/need, the documentation for these can be found [here](https://shiki.style/packages/transformers).

You will also need to npm install [@shikijs/transformers](https://www.npmjs.com/package/@shikijs/transformers).

## How Can We See the Cool Highlights?

If you're like me, you might add these transformers to your code and wonder why none of the cool effects are appearing. This is because we need to style these HTML elements ourselves.

### Let's Examine a Shiki Code Block from the Markdown to HTML

The following code block:

```javascript
console.log("Hello World!")
console.log("This is so cool!") // [!code ++]
console.log("Is this working?") // [!code --]
console.log("I think it is!") // [!code warning]
console.log("This ia an error") // [!code error]
```

Gets rendered into the following HTML:

```html
<pre class="astro-code vitesse-dark has-diff has-highlighted relative" style="background-color:#121212;color:#dbd7caee; overflow-x: auto;" tabindex="0" data-language="javascript">
  <code>
  <span class="line"><span style="color:#BD976A">console</span><span style="color:#666666">.</span><span style="color:#80A665">log</span><span style="color:#666666">(</span><span style="color:#C98A7D77">"</span><span style="color:#C98A7D">Hello</span><span class="space"> </span><span style="color:#C98A7D">World!</span><span style="color:#C98A7D77">"</span><span style="color:#666666">)</span></span>
  <span class="line diff add"><span style="color:#BD976A">console</span><span style="color:#666666">.</span><span style="color:#80A665">log</span><span style="color:#666666">(</span><span style="color:#C98A7D77">"</span><span style="color:#C98A7D">This</span><span class="space"> </span><span style="color:#C98A7D">is</span><span class="space"> </span><span style="color:#C98A7D">so</span><span class="space"> </span><span style="color:#C98A7D">cool!</span><span style="color:#C98A7D77">"</span><span style="color:#666666">)</span></span>
<span class="line diff remove"><span style="color:#BD976A">console</span><span style="color:#666666">.</span><span style="color:#80A665">log</span><span style="color:#666666">(</span><span style="color:#C98A7D77">"</span><span style="color:#C98A7D">Is</span><span class="space"> </span><span style="color:#C98A7D">this</span><span class="space"> </span><span style="color:#C98A7D">working?</span><span style="color:#C98A7D77">"</span><span style="color:#666666">)</span></span>
<span class="line highlighted warning"><span style="color:#BD976A">console</span><span style="color:#666666">.</span><span style="color:#80A665">log</span><span style="color:#666666">(</span><span style="color:#C98A7D77">"</span><span style="color:#C98A7D">I</span><span class="space"> </span><span style="color:#C98A7D">think</span><span class="space"> </span><span style="color:#C98A7D">it</span><span class="space"> </span><span style="color:#C98A7D">is!</span><span style="color:#C98A7D77">"</span><span style="color:#666666">)</span></span>
<span class="line highlighted error"><span style="color:#BD976A">console</span><span style="color:#666666">.</span><span style="color:#80A665">log</span><span style="color:#666666">(</span><span style="color:#C98A7D77">"</span><span style="color:#C98A7D">This</span><span class="space"> </span><span style="color:#C98A7D">ia</span><span class="space"> </span><span style="color:#C98A7D">an</span><span class="space"> </span><span style="color:#C98A7D">error</span><span style="color:#C98A7D77">"</span><span style="color:#666666">)</span></span>
  </code>
</pre>
```

As you can see, Shiki adds nice class names to our lines of code. This enables us to style each line to our desired look. Furthermore, we can also style the code block itself.

## Styling the Code Block

We can style the code block by adding some rules to our CSS. Remember we need to import the CSS file into our Astro!

```css
@layer components { /* [!code ++] */
  pre { /* [!code ++] */
    @apply relative max-h-[600px] min-w-[56px] overflow-auto rounded-xl border border-slate-400 py-4 text-sm leading-loose; /* [!code ++] */
  } /* [!code ++] */
  code { /* [!code ++] */
      @apply w-full grid; /* [!code ++] */
    } /* [!code ++] */
} /* [!code ++] */
```

Next, we can add styles for the highlights.

```css
> code { /* [!code ++] */
      @apply whitespace-pre-wrap mt-6 mb-6; /* [!code ++] */
      counter-reset: line; /* [!code ++] */

      > ::before { /* [!code ++] */
        counter-increment: line; /* [!code ++] */
        content: counter(line); /* [!code ++] */
        @apply mr-4 inline-block w-4 text-right; /* [!code ++] */
      } /* [!code ++] */

      .add { /* [!code ++] */
        @apply bg-[#16322c]; /* [!code ++] */
      } /* [!code ++] */

      .add::before { /* [!code ++] */
        @apply text-emerald-400; /* [!code ++] */
        content: "+"; /* [!code ++] */
      } /* [!code ++] */

      .remove { /* [!code ++] */
        @apply bg-[#311c22]; /* [!code ++] */
      } /* [!code ++] */

      .remove::before { /* [!code ++] */
        @apply text-rose-400; /* [!code ++] */
        content: "-"; /* [!code ++] */
      } /* [!code ++] */

      .line { /* [!code ++] */
        @apply w-full p-1; /* [!code ++] */
      } /* [!code ++] */

      .highlighted { /* [!code ++] */
        @apply bg-[#24272c]; /* [!code ++] */
      } /* [!code ++] */

      .error { /* [!code ++] */
        @apply bg-[#3c1e26]; /* [!code ++] */
      } /* [!code ++] */

      .warning { /* [!code ++] */
        @apply bg-[#3a3118]; /* [!code ++] */
      } /* [!code ++] */

      .highlighted-word { /* [!code ++] */
        @apply rounded bg-[#24272c] p-[2px]; /* [!code ++] */
      } /* [!code ++] */
    } /* [!code ++] */
```

Now we have green backgrounds on lines for additions, red backgrounds for deletions, warning lines, focused lines, etc. You can add, remove, or change these styles based on what you want your code blocks and transformers to look like. 

Now your styles should look like mine! 
