// src/config/schema.js

import { SITE } from "./site";

function toAbsoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalizedPath}`;
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    logo: `${SITE.url}${SITE.images.logo}`,
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
  };
}

export function buildLocalBusinessSchema(pageSeo) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: SITE.name,
    url: toAbsoluteUrl(pageSeo?.path || "/"),
    image: `${SITE.url}${pageSeo?.image || SITE.images.og}`,
    telephone: SITE.phone,
    email: SITE.email,
    description: pageSeo?.description || SITE.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    areaServed: SITE.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Tuesday",
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Thursday",
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "15:00",
      },
    ],
  };
}

export function buildWebPageSchema(pageSeo) {
  return {
    "@context": "https://schema.org",
    "@type": pageSeo?.schemaType || "WebPage",
    name: pageSeo?.title || SITE.name,
    description: pageSeo?.description || SITE.description,
    url: toAbsoluteUrl(pageSeo?.path || "/"),
  };
}

export function buildSeoSchema(pageSeo) {
  return [
    buildOrganizationSchema(),
    buildWebSiteSchema(),
    buildLocalBusinessSchema(pageSeo),
    buildWebPageSchema(pageSeo),
  ];
}