// src/content/reviews.js
// Single source of truth for Reviews page content.
// Add new reviews here and they automatically render on /reviews.

function normalizeKey(str = "") {
  return String(str)
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[^\w\s]/g, "")
    .trim();
}

export const REVIEW_SOURCES = [
  {
    name: "Facebook",
    href: "https://https://www.facebook.com/PremierKitchenAndBath/",
    detail: "Updates, photos, and client feedback",
  },
];

// Raw reviews list (edit/add here)
export const REVIEWS_RAW = [
  {
    quote:
      " ",
    name: " ",
    meta: " ",
  },
];

// Derived + deduped list used by UI
export function getReviews() {
  const seen = new Set();
  const deduped = [];

  for (const r of REVIEWS_RAW) {
    const key = [
      normalizeKey(r.name),
      normalizeKey(r.meta),
      normalizeKey(String(r.quote).slice(0, 140)),
    ].join("|");

    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(r);
  }

  return deduped;
}