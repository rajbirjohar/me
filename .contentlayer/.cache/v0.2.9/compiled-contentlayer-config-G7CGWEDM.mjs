// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Chapter = defineDocumentType(() => ({
  name: "Chapter",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true
    },
    category: {
      type: "string",
      description: "The category of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    },
    author: {
      type: "string",
      description: "The author of the post",
      required: true
    },
    tags: {
      type: "json",
      description: "Related concepts to the post",
      required: true
    },
    draft: {
      type: "boolean",
      description: "Determines if the post has been published",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (chapter) => `/chapters/${chapter._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "chapters",
  documentTypes: [Chapter]
});
export {
  Chapter,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-G7CGWEDM.mjs.map
