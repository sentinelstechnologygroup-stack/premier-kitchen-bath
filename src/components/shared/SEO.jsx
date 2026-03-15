// src/components/shared/SEO.jsx
"use client";

import { useEffect } from "react";
import { SITE } from "@/config/site";
import { getPageSeo } from "@/config/seo";
import { buildSeoSchema } from "@/config/schema";

function ensureMeta(selector, attributeName, attributeValue) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }

  return element;
}

function setMetaByName(name, content) {
  const meta = ensureMeta(`meta[name="${name}"]`, "name", name);
  meta.setAttribute("content", content || "");
}

function setMetaByProperty(property, content) {
  const meta = ensureMeta(`meta[property="${property}"]`, "property", property);
  meta.setAttribute("content", content || "");
}

function setCanonical(url) {
  let link = document.head.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
}

function setJsonLd(id, data) {
  let script = document.head.querySelector(`#${id}`);

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

export default function SEO({ pageKey, overrides = {} }) {
  useEffect(() => {
    const seo = getPageSeo(pageKey, overrides);
    const canonicalUrl = `${SITE.url}${seo.path || "/"}`;
    const imageUrl = `${SITE.url}${seo.image || SITE.images.og}`;
    const schema = buildSeoSchema(seo);

    document.title = seo.title || SITE.name;

    setMetaByName("description", seo.description || SITE.description);
    setMetaByName("keywords", (seo.keywords || SITE.keywords || []).join(", "));
    setMetaByName("robots", seo.robots || "index,follow");

    setMetaByProperty("og:type", seo.type || "website");
    setMetaByProperty("og:site_name", SITE.name);
    setMetaByProperty("og:title", seo.title || SITE.name);
    setMetaByProperty("og:description", seo.description || SITE.description);
    setMetaByProperty("og:url", canonicalUrl);
    setMetaByProperty("og:image", imageUrl);

    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", seo.title || SITE.name);
    setMetaByName("twitter:description", seo.description || SITE.description);
    setMetaByName("twitter:image", imageUrl);

    setCanonical(canonicalUrl);
    setJsonLd("pkb-seo-schema", schema);
  }, [pageKey, overrides]);

  return null;
}