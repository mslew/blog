import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "*.md", base: "posts" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    pubDate: z.date(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = { posts };
