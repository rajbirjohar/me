// contentlayer.config.ts
import {
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
var getSlug = (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "");
var postComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc)
  },
  image: {
    type: "string",
    resolve: (doc) => `/journals/${getSlug(doc)}/image.png`
  },
  og: {
    type: "string",
    resolve: (doc) => `/journals/${getSlug(doc)}/og.jpg`
  }
};
var Journal = defineDocumentType(() => ({
  name: "Journal",
  filePathPattern: `journals/**/*.mdx`,
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
  computedFields: postComputedFields
}));
var snippetComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc)
  }
};
var Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: `snippets/**/*.mdx`,
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
  computedFields: snippetComputedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "data",
  documentTypes: [Journal, Snippet],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      rehypeAutolinkHeadings,
      rehypeAccessibleEmojis
    ]
  }
});
export {
  Journal,
  Snippet,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-RHGS3NQF.mjs.map
