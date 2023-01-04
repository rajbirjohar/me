// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Chapter = defineDocumentType(() => ({
  name: "Chapter",
  filePathPattern: `chapters/*.mdx`,
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
    slug: {
      type: "string",
      resolve: (chapter) => `${chapter._raw.flattenedPath}`
    },
    url: {
      type: "string",
      resolve: (chapter) => `/chapters/${chapter._raw.flattenedPath}`
    }
  }
}));
var Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: `snippets/*.mdx`,
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
    language: {
      type: "string",
      description: "The title of the post",
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
    draft: {
      type: "boolean",
      description: "Determines if the post has been published",
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (snippet) => `${snippet._raw.flattenedPath}`
    },
    url: {
      type: "string",
      resolve: (snippet) => `/${snippet._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "data",
  documentTypes: [Chapter, Snippet]
});
export {
  Chapter,
  Snippet,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-OSUHWHJH.mjs.map
