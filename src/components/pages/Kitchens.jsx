// src/components/pages/Kitchens.jsx
"use client";

import React from "react";
import Link from "next/link";
import SelectedKitchenProjectsCarousel from "@/components/portfolio/SelectedKitchenProjectsCarousel";
import SEO from "@/components/shared/SEO";
import { ROUTES } from "@/components/utils/routes";
import PageShell from "@/components/PageShell";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Panel } from "@/components/ui/panel";
import { getPageContent } from "@/config/seo";

function SectionEyebrow({ children }) {
  if (!children) return null;

  return (
    <div className="mb-4 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.25em] text-[#1F2E23]/45">
      {children}
    </div>
  );
}

function CtaButton({ href, children, variant = "primary" }) {
  if (!href || !children) return null;

  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-[11px] font-sans-clean font-semibold uppercase tracking-[0.2em] transition-colors";
  const styles =
    variant === "secondary"
      ? "border border-[#1F2E23]/20 bg-transparent text-[#1F2E23] hover:bg-[#1F2E23]/5"
      : "bg-[#171310] text-white hover:bg-[#2A211B]";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

function ProcessStep({ number, title, body }) {
  return (
    <div>
      <div className="mb-4 font-sans-clean text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C6A173]">
        {number}
      </div>
      <h3 className="mb-4 font-serif-display text-2xl font-light text-[#F5F0EA]">
        {title}
      </h3>
      <p className="font-sans-clean text-sm leading-[1.8] text-[rgba(245,240,234,0.78)]">
        {body}
      </p>
    </div>
  );
}

export default function Kitchens() {
  const content = getPageContent("kitchens");

  return (
    <>
      <SEO pageKey="kitchens" />

      <PageShell
        hero
        heroImage="/images/kitchens/kitchen-hero.jpg"
        eyebrow={content.heroEyebrow}
        title={content.heroTitle}
        subtitle={content.heroSubtitle}
      >
        <section className="mx-auto max-w-[1440px] px-6 py-10 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-20">
            <AnimatedSection>
              <div>
                <SectionEyebrow>{content.introEyebrow}</SectionEyebrow>

                <h2 className="font-serif-display text-4xl font-light leading-[1.06] text-[#1F2E23] md:text-5xl">
                  {content.introTitle}
                </h2>

                <p className="mt-8 max-w-2xl font-sans-clean text-base leading-[1.8] text-[#1F2E23]/70">
                  {content.introBody}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <Panel className="overflow-hidden border border-[#1F2E23]/10 bg-[#F8F4ED]">
                <img
                  src="/images/kitchens/kitchens-feature-band.jpg"
                  alt="Premier Kitchen & Bath custom kitchen interior"
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
            <AnimatedSection>
              <SelectedKitchenProjectsCarousel />
            </AnimatedSection>
          </div>
        </section>

        <section className="border-t border-[#1F2E23]/10 bg-[#FAF7F2]">
          <div className="mx-auto max-w-[980px] px-6 py-14 text-center md:px-10 md:py-18 lg:px-12">
            <AnimatedSection>
              <SectionEyebrow>{content.ctaEyebrow}</SectionEyebrow>

              <h2 className="font-serif-display text-3xl font-light leading-[1.08] text-[#1F2E23] md:text-4xl lg:text-5xl">
                {content.ctaTitle}
              </h2>

              <p className="mx-auto mt-6 max-w-3xl font-sans-clean text-sm leading-[1.95] text-[#5E5A55] md:text-base">
                {content.ctaBody}
              </p>

              <div className="mt-8 flex items-center justify-center">
                <CtaButton href={ROUTES.consultation}>
                  Schedule Consultation
                </CtaButton>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="border-t border-[#1F2E23]/10">
          <div className="bg-[#1F2E23]">
            <div className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 lg:px-20">
              <AnimatedSection>
                <SectionEyebrow>Our Process</SectionEyebrow>
                <h2 className="mb-16 font-serif-display text-4xl font-light text-[#F5F0EA] md:text-5xl">
                  {content.processTitle}
                </h2>
              </AnimatedSection>

              <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
                <AnimatedSection delay={0}>
                  <ProcessStep
                    number="01"
                    title="Vision Session"
                    body="We define the way your kitchen needs to function, how you entertain, and what aesthetic direction fits your home."
                  />
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                  <ProcessStep
                    number="02"
                    title="Curated Design"
                    body="Cabinetry, surfaces, fixtures, and appliances are selected into a cohesive plan that balances beauty and utility."
                  />
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <ProcessStep
                    number="03"
                    title="Flawless Build"
                    body="Our team executes with precision so the finished kitchen feels intentional, seamless, and built to endure."
                  />
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#1F2E23]/10">
          <div className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-20">
              <AnimatedSection>
                <Panel className="overflow-hidden border border-[#1F2E23]/10 bg-[#F8F4ED]">
                  <img
                    src="/images/cta/kitchens.jpg"
                    alt="Premier Kitchen & Bath kitchen showroom inspiration"
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </Panel>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div className="flex h-full flex-col justify-start">
                  <SectionEyebrow>{content.footerEyebrow}</SectionEyebrow>

                  <h2 className="font-serif-display text-3xl font-light text-[#1F2E23] md:text-4xl">
                    {content.footerTitle}
                  </h2>

                  <div className="my-7 h-px w-14 bg-[#1F2E23]/80" />

                  <div className="space-y-5 font-sans-clean text-[15px] leading-[1.75] text-[#1F2E23]/70">
                    <p>{content.footerBody}</p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <CtaButton href={ROUTES.consultation}>
                      Begin Your Project
                    </CtaButton>
                    <CtaButton href={ROUTES.projects} variant="secondary">
                      View Portfolio
                    </CtaButton>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}