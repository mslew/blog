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
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            required: true,
            list: true,
            options: [
              { value: "movie", label: "Movie" },
              { value: "music", label: "Music" },
              { value: "technical", label: "Technical" },
              { value: "personal", label: "Personal" },
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
          },
          { type: "datetime", 
            name: "updatedDate", 
            label: "Updated Date", 
            required: false, 
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
              component: "group"
            }
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            required: false,
          },
          {
            type: "boolean",
            name: "hidden",
            label: "Hidden from RSS",
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
      stopwordLanguages: ['eng'],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});
