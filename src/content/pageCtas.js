// src/content/ctaVariants.js
import { ROUTES } from "@/components/utils/routes";

export const CTA_VARIANTS = {
  "products-showroom": {
    eyebrow: "Ready to begin?",
    title: "Visit Our Showroom to See It All In Person",
    body:
      "Explore cabinetry, surfaces, tile, fixtures, hardware, and finish combinations in person with guidance from the Premier Kitchens team.",
    primaryLabel: "Visit the Showroom",
    primaryHref: ROUTES.showroom,
    secondaryLabel: "Request Free Estimate",
    secondaryHref: ROUTES.contact,
    backgroundImage: "/images/cta/kitchens.jpg",
    tone: "forest",
  },

  kitchens: {
    eyebrow: "Designed Around Your Home",
    title: "Start Planning Your Kitchen Renovation",
    body:
      "From cabinetry and countertops to layout refinement and finish selections, we help bring the entire kitchen together.",
    primaryLabel: "Explore Kitchens",
    primaryHref: ROUTES.kitchens,
    secondaryLabel: "Request Free Estimate",
    secondaryHref: ROUTES.contact,
    backgroundImage: "/images/cta/kitchens.jpg",
    tone: "forest",
  },

  bathrooms: {
    eyebrow: "Refined Functional Design",
    title: "Create a Bathroom That Feels Finished",
    body:
      "We help homeowners select the right materials, fixtures, and design details for bathrooms that feel elevated and built to last.",
    primaryLabel: "Explore Bathrooms",
    primaryHref: ROUTES.bathrooms,
    secondaryLabel: "Request Free Estimate",
    secondaryHref: ROUTES.contact,
    backgroundImage: "/images/cta/bathrooms.jpg",
    tone: "sage",
  },

  contact: {
    eyebrow: "Let’s Talk",
    title: "Request Your Free Estimate",
    body:
      "Tell us about your kitchen, bathroom, or renovation goals and we’ll help you take the next step with clarity.",
    primaryLabel: "Request Free Estimate",
    primaryHref: ROUTES.contact,
    secondaryLabel: "View Projects",
    secondaryHref: ROUTES.projects,
    backgroundImage: "/images/cta/bathrooms.jpg",
    tone: "forest",
  },
};

export function getCTAVariant(variantKey) {
  if (!variantKey) return null;
  return CTA_VARIANTS[variantKey] ?? null;
}
