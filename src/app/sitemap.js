// src/app/sitemap.js
const baseUrl = "https://premierkitchens.us";

export default function sitemap() {
  const routes = [
    "",
    "/about",
    "/contact",
    "/projects",
    "/reviews",

  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}