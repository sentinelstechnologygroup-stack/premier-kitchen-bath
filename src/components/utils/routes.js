// src/components/utils/routes.js
export const ROUTES = {
  home: "/",
  about: "/about",

  kitchens: "/kitchens",
  bathrooms: "/bathrooms",

  projects: "/projects",
  showroom: "/showroom",
  contact: "/contact",
  consultation: "/contact#contact-form",

  reviews: "/reviews",
  privacy: "/privacy-policy",
  blog: "/blog",

};

export const NAV = [
  { label: "Home", href: ROUTES.home },
  { label: "Kitchens", href: ROUTES.kitchens },
  { label: "Bathrooms", href: ROUTES.bathrooms },
  { label: "Portfolio", href: ROUTES.projects },
  { label: "Showroom", href: ROUTES.showroom },
  { label: "Contact", href: ROUTES.contact },
];

export function createProjectUrl(slug) {
  return `/projects/${slug}`;
}
