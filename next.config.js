/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Static export for generic hosting like InMotion
  output: "export",

  // Required when not using Vercel's image optimization pipeline
  images: {
    unoptimized: true,
  },

  // Better fit for Apache/shared hosting route folders
  trailingSlash: true,
};

module.exports = nextConfig;