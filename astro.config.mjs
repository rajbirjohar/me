import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://rajbir.io',
  integrations: [sitemap()],
  output: "hybrid",
  adapter: vercel(),
  experimental: {
		viewTransitions: true
	}
});