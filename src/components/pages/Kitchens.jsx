// src/components/pages/Kitchens.jsx
"use client";

import React from "react";
import ServiceDetailLayout from "./ServiceDetailLayout";
import SelectedKitchenProjectsCarousel from "@/components/portfolio/SelectedKitchenProjectsCarousel";
import { ROUTES } from "@/components/utils/routes";

export default function Kitchens() {
  return (
    <ServiceDetailLayout
      hero={{
        image: "/images/kitchens/kitchen-hero.jpg",
        eyebrow: "Our Work",
        title: "Kitchen Renovations",
        alt: "Premier Kitchens kitchen renovations",
      }}
      intro={{
        eyebrow: "Crafted in Houston",
        title:
          "Beautiful kitchens designed for gathering, cooking, and daily life.",
        body:
          "A kitchen should feel as functional as it is refined. We design around how your household lives—bringing together cabinetry, surfaces, appliances, storage, and lighting into one cohesive environment built for daily use and lasting beauty.",
      }}
      featureBand={{
        image: "/images/kitchens/kitchens-feature-band.jpg",
        alt: "Premier Kitchens custom kitchen interior",
      }}
      narrowCta={{
        eyebrow: "Plan Your Kitchen Project",
        title:
          "Ready to define layout, cabinetry, materials, and scope with our team?",
        body:
          "Start with a consultation to review how your kitchen needs to function and the finish combinations that will bring it together.",
        ctaLabel: "Schedule Consultation",
        ctaHref: ROUTES.consultation,
      }}
      process={{
        eyebrow: "Our Process",
        title: "Designed Around the Way You Live",
        steps: [
          {
            number: "01",
            title: "Vision Session",
            body:
              "We define the way your kitchen needs to function, how you entertain, and what aesthetic direction fits your home.",
          },
          {
            number: "02",
            title: "Curated Design",
            body:
              "Cabinetry, surfaces, fixtures, and appliances are selected into a cohesive plan that balances beauty and utility.",
          },
          {
            number: "03",
            title: "Flawless Build",
            body:
              "Our team executes with precision so the finished kitchen feels intentional, seamless, and built to endure.",
          },
        ],
      }}
      footerImageCta={{
        eyebrow: "Premier Kitchens Showroom",
        title: "Ready to Reimagine Your Kitchen?",
        body:
          "Visit our Houston showroom, compare cabinetry and surface combinations in person, and begin shaping a kitchen renovation tailored to your home and daily life.",
        image: "/images/cta/kitchens.jpg",
        alt: "Premier Kitchens kitchen showroom inspiration",
        primaryCtaLabel: "Begin Your Project",
        primaryCtaHref: ROUTES.consultation,
        secondaryCtaLabel: "View Portfolio",
        secondaryCtaHref: ROUTES.projects,
      }}
    >
      <SelectedKitchenProjectsCarousel />
    </ServiceDetailLayout>
  );
}
