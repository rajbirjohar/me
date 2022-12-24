// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Chapter = defineDocumentType(() => ({
  name: "Chapter",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/chapters/${post._raw.flattenedPath}`
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
//# sourceMappingURL=compiled-contentlayer-config-L4NN7SED.mjs.map
