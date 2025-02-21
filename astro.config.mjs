import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwind from "@astrojs/tailwind";
import sectionize from "@hbsnow/rehype-sectionize";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: vercel(),
  experimental: {
    responsiveImages: true,
  },
  redirects: {
    "/": "/1",
  },
  markdown: {
    rehypePlugins: [sectionize, rehypeHeadingIds]
  },
});
