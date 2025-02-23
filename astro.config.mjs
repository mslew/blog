import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwind from "@astrojs/tailwind";
import sectionize from "@hbsnow/rehype-sectionize";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  output: "server",
  adapter: vercel(),
  experimental: {
    responsiveImages: true,
  },
  redirects: {
    "/": "/posts/1",
  },
  markdown: {
    rehypePlugins: [sectionize, rehypeHeadingIds],
  },
  site: "https://blog.maxlewis.dev",
});
