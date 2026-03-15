// src/pages/Design.jsx
"use client";

import React from "react";
import PageShell from "../PageShell";
import AnimatedSection from "../shared/AnimatedSection";
import SEO from "@/components/shared/SEO";
import { Panel } from "@/components/ui/panel";
import BottomCTA from "@/components/shared/BottomCTA";

const MEDIA = {
  hero: "/images/design/hero.jpg",
  feature: "/images/design/feature.jpg",
};

const DESIGN_POINTS = [
  {
    title: "Space Planning",
    body:
      "We begin with how the room needs to function—traffic flow, storage, appliance placement, lighting, and the practical use of every surface.",
  },
  {
    title: "Material Coordination",
    body:
      "Cabinetry, countertops, tile, fixtures, hardware, and finishes are selected as a complete system so the final space feels intentional and refined.",
  },
  {
    title: "Decision Clarity",
    body:
      "Our design process helps homeowners make confident decisions before construction begins, reducing confusion, delays, and costly late-stage changes.",
  },
];

export default function Design() {
  return (
    <>
      <SEO pageKey="about" overrides={{
        path: "/design",
        title:
          "Kitchen & Bath Design Process Houston TX | Premier Kitchen & Bath",
        description:
          "Explore the Premier Kitchen & Bath design process for Houston kitchen and bathroom remodeling projects, from layout planning to finish coordination.",
        h1: "Kitchen & Bath Design Process in Houston, TX",
        schemaType: "Service",
      }} />

      <PageShell
        hero
        heroImage={MEDIA.hero}
        eyebrow="Design Process"
        title="Thoughtful Design Before Construction Begins"
        subtitle="Our design process helps Houston homeowners align layout, materials, finish selections, and project direction before the build moves forward."
      >
        <section className="mx-auto max-w-[1440px] px-6 py-10 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-20">
            <AnimatedSection>
              <div>
                <div className="mb-4 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.25em] text-[#1F2E23]/45">
                  Why Design Matters
                </div>
                <h2 className="font-serif-display text-4xl font-light leading-[1.06] text-[#1F2E23] md:text-5xl">
                  Better decisions
                  <br />
                  create better remodels.
                </h2>
                <p className="mt-8 max-w-2xl font-sans-clean text-base leading-[1.8] text-[#1F2E23]/70">
                  Kitchen remodeling and bathroom remodeling projects succeed
                  when design decisions are made with clarity. We help clients
                  think through layout, storage, surfaces, fixture selections,
                  and finish coordination early so the final result feels
                  cohesive rather than assembled piece by piece.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <Panel className="border border-[#1F2E23]/10 bg-[#F8F4ED]">
                <img
                  src={MEDIA.feature}
                  alt="Premier Kitchen & Bath design planning and material coordination"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </Panel>
            </AnimatedSection>
          </div>
        </section>

        <section className="border-t border-[#1F2E23]/10">
          <div className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 gap-14 md:grid-cols-3">
              {DESIGN_POINTS.map((item, idx) => (
                <AnimatedSection key={item.title} delay={idx * 0.1}>
                  <div>
                    <h3 className="mb-4 font-serif-display text-2xl font-light text-[#1F2E23]">
                      {item.title}
                    </h3>
                    <p className="font-sans-clean text-sm leading-[1.8] text-[#1F2E23]/65">
                      {item.body}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <BottomCTA variant="about" />
      </PageShell>
    </>
  );
}