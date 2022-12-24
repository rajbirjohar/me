import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Chapter = defineDocumentType(() => ({
  name: "Chapter",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
    category: {
      type: "string",
      description: "The category of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    author: {
      type: "string",
      description: "The author of the post",
      required: true,
    },
    tags: {
      type: "json",
      description: "Related concepts to the post",
      required: true,
    },
    draft: {
      type: "boolean",
      description: "Determines if the post has been published",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (chapter) => `${chapter._raw.flattenedPath}`,
    },
    url: {
      type: "string",
      resolve: (chapter) => `/chapters/${chapter._raw.flattenedPath}`,
    },
    // tagUrl: {
    //   type: "string",
    //   resolve: (chapter) => `/chapters/tags/`
    // }
  },
}));

export default makeSource({
  contentDirPath: "chapters",
  documentTypes: [Chapter],
});
