import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import GithubSlugger from "github-slugger";

const getSlug = (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, "");

const journalComputedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc),
  },
  image: {
    type: "string",
    resolve: (doc) => `/journals/${getSlug(doc)}/index.jpg`,
  },
  og: {
    type: "string",
    resolve: (doc) => `/journals/${getSlug(doc)}/og.jpg`,
  },
  headings: {
    type: "json",
    resolve: async (doc) => {
      const slugger = new GithubSlugger();
      const headingsRegex = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
      const headings = Array.from(doc.body.raw.matchAll(headingsRegex)).map(
        ({ groups }: any) => {
          const flag = groups?.flag;
          const content = groups?.content;
          return {
            level:
              flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
            text: content,
            slug: content ? slugger.slug(content) : undefined,
          };
        }
      );
      return headings;
    },
  },
};

export const Journal = defineDocumentType(() => ({
  name: "Journal",
  filePathPattern: `journals/**/*.mdx`,
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
    toc: {
      type: "boolean",
      required: false,
      default: false,
    },
    image: { type: "string", required: false },
    banner: { type: "boolean", required: true, default: true },
  },
  computedFields: journalComputedFields,
}));

const snippetComputedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc),
  },
};

export const Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: `snippets/**/*.mdx`,
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
    language: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    draft: {
      type: "boolean",
      description: "Determines if the post has been published",
      required: true,
    },
  },
  computedFields: snippetComputedFields,
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Journal, Snippet],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      rehypeAccessibleEmojis,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
