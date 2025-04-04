import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import rehypeKatex from "rehype-katex";
import rehypeExternalLinks from "rehype-external-links";
import remarkEmoji from "remark-emoji";
import remarkMath from "remark-math";
import sectionize from "@hbsnow/rehype-sectionize";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import sitemap from "@astrojs/sitemap";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
  transformerNotationFocus,
  transformerNotationErrorLevel,
  transformerRenderWhitespace,
  transformerMetaWordHighlight,
} from "@shikijs/transformers";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
  output: "server",
  adapter: vercel(),
  experimental: {
    responsiveImages: true,
  },
  redirects: {
    "/": "/posts/1",
  },
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "vitesse-dark",
      transformers: [
        transformerNotationDiff(),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationFocus(),
        transformerNotationErrorLevel(),
        transformerRenderWhitespace(),
        transformerMetaWordHighlight(),
      ],
    },
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["nofollow", "noopener", "noreferrer"],
        },
      ],
      rehypeHeadingIds,
      [
        rehypeKatex,
        {
          strict: "false",
        },
      ],
      sectionize,
    ],
    remarkPlugins: [remarkEmoji, remarkMath],
  },
  site: "https://blog.maxlewis.dev",
  devToolbar: {
    enabled: false,
  },
});