/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        light: {
          css: {
            "--tw-prose-body": theme("colors.slate[300]"),
            "--tw-prose-headings": theme("colors.slate[400]"),
            "--tw-prose-lead": theme("colors.slate[400]"),
            "--tw-prose-links": theme("colors.slate[400]"),
            "--tw-prose-bold": theme("colors.slate[400]"),
            "--tw-prose-counters": theme("colors.slate[400]"),
            "--tw-prose-bullets": theme("colors.slate[400]"),
            "--tw-prose-hr": theme("colors.slate[300]"),
            "--tw-prose-quotes": theme("colors.slate[400]"),
            "--tw-prose-quote-borders": theme("colors.slate[300]"),
            "--tw-prose-captions": theme("colors.slate[400]"),
            "--tw-prose-code": theme("colors.slate[400]"),
            "--tw-prose-pre-code": theme("colors.slate[300]"),
            "--tw-prose-pre-bg": theme("colors.slate[400]"),
            "--tw-prose-th-borders": theme("colors.slate[300]"),
            "--tw-prose-td-borders": theme("colors.slate[300]"),
          },
        },
      }),
      screens: {
        "max-2xl": { max: "1536px" },
        "max-xl": { max: "1280px" },
        "max-lg": { max: "1024px" },
        "max-md": { max: "768px" },
        "max-sm": { max: "640px" },
        xs: { min: "400px" },
        "max-xs": { max: "400px" },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
