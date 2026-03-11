// src/seo/robots.js

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://premierkitchens.us/sitemap.xml",
    host: "https://premierkitchens.us",
  };
}