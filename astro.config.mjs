import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://rajbir.io",
  integrations: [sitemap(), mdx()],
  output: "hybrid",
  adapter: vercel(),
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "nord",
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: false
    }
  }
});