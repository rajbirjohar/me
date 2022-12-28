/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      // "images.unsplash.com",
      // "media-exp1.licdn.com",
      "i.scdn.co",
      "bgdlyaidwkwtdljwukcw.supabase.co",
    ],
    dangerouslyAllowSVG: true,
  },
};

module.exports = withContentlayer(nextConfig);
