// src/components/pages/Bathrooms.jsx
"use client";

import React from "react";
import ServiceDetailLayout from "./ServiceDetailLayout";
import SelectedBathroomProjectsCarousel from "@/components/portfolio/SelectedBathroomProjectsCarousel";
import { ROUTES } from "@/components/utils/routes";

export default function Bathrooms() {
  return (
    <ServiceDetailLayout
      hero={{
        image: "/images/bathrooms/bathroom-hero.jpg",
        eyebrow: "Our Work",
        title: "Bathroom Renovations",
        alt: "Premier Kitchens bathroom renovations",
      }}
      intro={{
        eyebrow: "Crafted in Houston",
        title: "Quiet luxury for the spaces you begin and end each day.",
        body:
          "A bathroom renovation is one of the most personal projects a home can undergo. We approach each one with care—balancing spa-like serenity with practical function. From walk-in showers and soaking tubs to custom vanities and radiant floors, every detail is considered.",
      }}
      featureBand={{
        image: "/images/bathrooms/bathrooms-feature-band.jpg",
        alt: "Premier Kitchens luxury bathroom interior",
      }}
      narrowCta={{
        eyebrow: "Plan Your Bathroom Project",
        title: "Ready to define layout, finishes, and budget with our team?",
        body:
          "Start with a consultation to review your goals, preferred style, and the materials that will shape the finished space.",
        ctaLabel: "Schedule Consultation",
        ctaHref: ROUTES.consultation,
      }}
      process={{
        eyebrow: "Our Process",
        title: "Thoughtful From the First Conversation",
        steps: [
          {
            number: "01",
            title: "Vision Session",
            body:
              "We explore your sense of style, how you use the space, and what would make it feel distinctly yours.",
          },
          {
            number: "02",
            title: "Curated Design",
            body:
              "Tile, stone, fixtures, and lighting are selected with purpose and presented in a cohesive design plan.",
          },
          {
            number: "03",
            title: "Flawless Build",
            body:
              "Our craftsmen bring the design to life with the skill and attention it deserves.",
          },
        ],
      }}
      footerImageCta={{
        eyebrow: "Premier Kitchens Showroom",
        title: "Ready to Reimagine Your Bathroom?",
        body:
          "Visit our Houston showroom, compare bath finishes in person, and begin shaping a bathroom renovation that feels refined, functional, and unmistakably yours.",
        image: "/images/bathrooms/bathrooms-footer-cta.jpg",
        alt: "Premier Kitchens bathroom showroom inspiration",
        primaryCtaLabel: "Begin Your Project",
        primaryCtaHref: ROUTES.consultation,
        secondaryCtaLabel: "View Portfolio",
        secondaryCtaHref: ROUTES.projects,
      }}
    >
      <SelectedBathroomProjectsCarousel />
    </ServiceDetailLayout>
  );
}