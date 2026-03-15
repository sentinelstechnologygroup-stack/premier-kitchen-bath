// src/pages/About.jsx
"use client";

import React from "react";
import { Award, Users, MapPin } from "lucide-react";
import PageShell from "../PageShell";
import AnimatedSection from "../shared/AnimatedSection";
import SEO from "@/components/shared/SEO";
import { Panel } from "@/components/ui/panel";
import BottomCTA from "@/components/shared/BottomCTA";

const MEDIA = {
  hero: "/images/about/hero.jpg",
  authority: "/images/about/authority.jpg",
  showroom: "/images/about/showroom.jpg",
};

const METRICS = [
  {
    icon: Award,
    value: "Since 1979",
    description:
      "Serving Houston-area homeowners with premium kitchen and bathroom remodeling for more than four decades.",
  },
  {
    icon: Users,
    value: "5,000+ Projects",
    description:
      "A long history of completed kitchen, bath, and interior renovation projects across Houston and surrounding communities.",
  },
  {
    icon: MapPin,
    value: "Houston Focus",
    description:
      "Serving River Oaks, Memorial, Tanglewood, West University, Energy Corridor, Bellaire, The Heights, and nearby neighborhoods.",
  },
];

const APPROACH = [
  {
    title: "Consult",
    description:
      "Every project begins with a conversation around how you live, how the space needs to function, and what level of finish and craftsmanship your home deserves.",
  },
  {
    title: "Design",
    description:
      "We guide selections across cabinetry, countertops, tile, fixtures, finishes, and layout so the final space feels unified rather than pieced together.",
  },
  {
    title: "Deliver",
    description:
      "Execution matters as much as concept. Our process is built around disciplined coordination, quality materials, and finished work that feels refined in every detail.",
  },
];

export default function About() {
  return (
    <>
      <SEO pageKey="about" />

      <PageShell
        hero
        heroImage={MEDIA.hero}
        eyebrow="About Premier Kitchen & Bath"
        title="Houston Remodeling Expertise Since 1979"
        subtitle="Premier Kitchen & Bath has helped Houston homeowners reimagine kitchens, bathrooms, and interior spaces with thoughtful design guidance, premium materials, and long-standing craftsmanship."
      >
        <section className="mx-auto max-w-[1440px] px-6 py-10 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 items-start gap-20 md:grid-cols-2">
            <div className="space-y-10">
              <AnimatedSection>
                <h2 className="font-serif-display text-4xl font-light leading-[1.05] text-[#1F2E23] md:text-5xl">
                  Design guidance.
                  <br />
                  Lasting craftsmanship.
                </h2>
                <div className="mt-6 h-px w-16 bg-[#1F2E23]" />
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <Panel className="border border-[#1F2E23]/10 shadow-sm">
                  <img
                    src={MEDIA.authority}
                    alt="Premier Kitchen & Bath interior remodeling craftsmanship"
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </Panel>
              </AnimatedSection>
            </div>

            <div className="space-y-6">
              <AnimatedSection delay={0.2}>
                <p className="font-sans-clean text-base leading-[1.75] text-[#1F2E23]/70">
                  Premier Kitchen & Bath has been a trusted name in Houston
                  remodeling since 1979. Our work is centered on the spaces that
                  shape daily life most—kitchens, bathrooms, and the surrounding
                  interiors that connect them. We believe these rooms should do
                  more than look beautiful; they should feel intuitive,
                  durable, and deeply considered.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <p className="font-sans-clean text-base leading-[1.75] text-[#1F2E23]/70">
                  Our approach is intentionally hands-on. We help clients think
                  through layout, cabinetry, countertops, tile, fixtures,
                  storage, finish combinations, and the practical realities of
                  construction long before final decisions are locked in. That
                  process leads to cleaner execution and more cohesive finished
                  spaces.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <p className="font-sans-clean text-base leading-[1.75] text-[#1F2E23]/70">
                  From classic renovations to more modern, luxury-forward
                  interiors, our goal remains the same: to deliver Houston
                  kitchen and bathroom remodeling work that feels elevated,
                  functional, and built to last.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] border-t border-[#1F2E23]/10 px-6 py-10 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
            {METRICS.map((metric, idx) => {
              const Icon = metric.icon;

              return (
                <AnimatedSection key={metric.value} delay={idx * 0.1}>
                  <div className="flex items-start gap-4">
                    <Icon className="mt-1 h-6 w-6 flex-shrink-0 text-[#6B7F5E]" />
                    <div>
                      <div className="mb-2 font-serif-display text-3xl font-light text-[#1F2E23]">
                        {metric.value}
                      </div>
                      <p className="font-sans-clean text-sm leading-[1.7] text-[#1F2E23]/60">
                        {metric.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </section>

        <section className="border-t border-[#1F2E23]/10">
          <div className="bg-[#1F2E23]">
            <div className="mx-auto max-w-[1440px] px-6 py-10 md:px-12 lg:px-20">
              <AnimatedSection>
                <h2 className="mb-20 font-serif-display text-4xl font-light text-[#F5F0EA] md:text-5xl">
                  Our Process
                </h2>
              </AnimatedSection>

              <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
                {APPROACH.map((item, idx) => (
                  <AnimatedSection key={item.title} delay={idx * 0.1}>
                    <div>
                      <h3 className="mb-4 font-serif-display text-2xl font-light text-[#F5F0EA]">
                        {item.title}
                      </h3>
                      <p className="font-sans-clean text-sm leading-[1.7] text-[rgba(245,240,234,0.78)]">
                        {item.description}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] border-t border-[#1F2E23]/10 px-6 py-10 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-20">
            <AnimatedSection>
              <Panel className="border border-[#1F2E23]/10 bg-[#F8F4ED]">
                <img
                  src={MEDIA.showroom}
                  alt="Premier Kitchen & Bath Houston showroom"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </Panel>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="flex h-full flex-col justify-start">
                <div className="mb-4 font-sans-clean text-[9px] font-semibold uppercase tracking-[0.3em] text-[#1F2E23]/40">
                  Houston Showroom
                </div>

                <h2 className="font-serif-display text-3xl font-light text-[#1F2E23] md:text-4xl">
                  A place to compare materials with confidence.
                </h2>

                <div className="my-7 h-px w-14 bg-[#1F2E23]/80" />

                <div className="space-y-5 font-sans-clean text-[15px] leading-[1.75] text-[#1F2E23]/70">
                  <p>
                    Remodeling decisions are easier when materials can be seen
                    together. Our showroom gives clients the opportunity to
                    compare cabinetry, countertops, tile, fixtures, and finish
                    combinations in person before moving deeper into the build.
                  </p>
                  <p>
                    That hands-on process helps create better alignment between
                    design direction, budget, and final execution—especially for
                    kitchen remodeling and bathroom remodeling projects where
                    every surface matters.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <BottomCTA variant="about" />
      </PageShell>
    </>
  );
}