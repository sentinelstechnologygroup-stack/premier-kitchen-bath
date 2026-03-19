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
    backgroundImage: "/images/cta/products.jpg",
    tone: "forest",
  },

  kitchens: {
    eyebrow: "Premier Kitchens Showroom",
    title: "Ready to Reimagine Your Kitchen?",
    body:
      "Visit our Houston showroom, compare cabinetry and surface combinations in person, and begin shaping a kitchen renovation tailored to your home and daily life.",
    primaryLabel: "Begin Your Project",
    primaryHref: ROUTES.consultation,
    secondaryLabel: "View Portfolio",
    secondaryHref: ROUTES.projects,
    backgroundImage: "/images/cta/kitchens.jpg",
    tone: "forest",
  },

  bathrooms: {
    eyebrow: "Premier Kitchens Showroom",
    title: "Ready to Reimagine Your Bathroom?",
    body:
      "Visit our Houston showroom, compare bath finishes in person, and begin shaping a bathroom renovation that feels refined, functional, and unmistakably yours.",
    primaryLabel: "Begin Your Project",
    primaryHref: ROUTES.consultation,
    secondaryLabel: "View Portfolio",
    secondaryHref: ROUTES.projects,
    backgroundImage: "/images/cta/bathrooms.jpg",
    tone: "sage",
  },

  projects: {
    eyebrow: "Explore More",
    title: "Ready to Start Your Renovation?",
    body:
      "Browse more of our work, visit the showroom, and take the next step toward a kitchen or bathroom renovation tailored to your home.",
    primaryLabel: "Request Free Estimate",
    primaryHref: ROUTES.contact,
    secondaryLabel: "Visit the Showroom",
    secondaryHref: ROUTES.showroom,
    backgroundImage: "/images/cta/projects.jpg",
    tone: "forest",
  },

  showroom: {
    eyebrow: "Let’s Talk",
    title: "Request Your Free Estimate",
    body:
      "Tell us about your kitchen, bathroom, or renovation goals and we’ll help you take the next step with clarity.",
    primaryLabel: "Request Free Estimate",
    primaryHref: ROUTES.contact,
    secondaryLabel: "View Portfolio",
    secondaryHref: ROUTES.projects,
    backgroundImage: "/images/cta/bathrooms.jpg",
    tone: "forest",
  },
  
  contact: {
    eyebrow: "Let’s Talk",
    title: "Request Your Free Estimate",
    body:
      "Tell us about your kitchen, bathroom, or renovation goals and we’ll help you take the next step with clarity.",
    primaryLabel: "Request Free Estimate",
    primaryHref: ROUTES.contact,
    secondaryLabel: "View Portfolio",
    secondaryHref: ROUTES.projects,
    backgroundImage: "/images/cta/bathrooms.jpg",
    tone: "forest",
  },
};

export function getCTAVariant(variantKey) {
  if (!variantKey) return null;
  return CTA_VARIANTS[variantKey] ?? null;
}
