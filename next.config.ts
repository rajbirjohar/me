const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	images: {
		remotePatterns: [new URL("https://covers.openlibrary.org/b/id/**")],
	},
};

module.exports = withMDX(nextConfig);
