// src/components/pages/Home.jsx
"use client";

import React, { useEffect } from "react";
import HeroSection from "../home/HeroSection";
import PhilosophySection from "../home/PhilosophySection";
import StatsBand from "../home/StatsBand";
import ServicesSection from "../home/ServicesSection";
import FeaturedProjects from "../home/FeaturedProjects";
import HowWeWorkSection from "../home/HowWeWorkSection";
import CTASection from "../home/CTASection";
import SEO from "@/components/shared/SEO";
import { registerPageMeta } from "@/lib/intelligence";

export default function Home() {
  useEffect(() => {
    registerPageMeta({
      page: "Home",
      route: "/",
      intent: "discovery",
      primaryCta: "Begin Your Project",
    });
  }, []);

  return (
    <>
      <SEO pageKey="home" />

      <main>
        <HeroSection />
        <PhilosophySection />
        <StatsBand />
        <ServicesSection />
        <FeaturedProjects />
        <HowWeWorkSection />
        <CTASection />
      </main>
    </>
  );
}