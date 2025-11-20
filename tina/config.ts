import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "posts",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
            ui: {
              parse: (value) =>
                typeof value === "string"
                  ? value.trim().toLowerCase().replace(/\s+/g, "-")
                  : value,
            },
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "object",
            name: "tags",
            label: "Tags",
            required: true,
            list: true,
            ui: {
              itemProps: (item) => {
                return {
                  label: item?.tag,
                };
              },
            },
            fields: [
              {
                type: "string",
                name: "tag",
                label: "Tag",
                required: true,
              },
            ],
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Publish Date",
            required: true,
            ui: {
              dateFormat: "MM/DD/YYYY",
              timeFormat: "HH:mm A",
            },
          },
          {
            type: "datetime",
            name: "updatedDate",
            label: "Updated Date",
            required: false,
            ui: {
              dateFormat: "MM/DD/YYYY",
              timeFormat: "HH:mm A",
            },
          },
          {
            type: "object",
            name: "image",
            label: "Hero Image",
            required: true,
            fields: [
              {
                type: "string",
                name: "url",
                label: "URL",
                required: true,
              },
              {
                type: "string",
                name: "alt",
                label: "Alt Text",
                required: true,
              },
            ],
            ui: {
              component: "group",
            },
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            required: false,
          },
          {
            type: "boolean",
            name: "hiddenFromFeed",
            label: "Hidden from Feed",
            required: false,
          },
          {
            type: "boolean",
            name: "hiddenFromRSS",
            label: "Hidden from RSS Feed",
            required: false,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            required: true,
          },
        ],
      },
    ],
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH,
      stopwordLanguages: ["eng"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});
