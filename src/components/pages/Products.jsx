// src/components/pages/Products.jsx
"use client";

import React from "react";
import PageShell from "@/components/PageShell";
import AnimatedSection from "@/components/shared/AnimatedSection";
import BottomCTA from "@/components/shared/BottomCTA";
import SEO from "@/components/shared/SEO";
import { Panel } from "@/components/ui/panel";
import { PRODUCT_CATEGORIES } from "@/content/productsData";
import { getPageContent } from "@/config/seo";

function SectionEyebrow({ children, tone = "default" }) {
  if (!children) return null;

  const tones = {
    default: "text-[#1F2E23]/45",
    gold: "text-[#A3915F]",
  };

  return (
    <div
      className={`mb-4 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.25em] ${tones[tone]}`}
    >
      {children}
    </div>
  );
}

function ProductCategorySection({ title, brands }) {
  return (
    <section className="border-t border-[#1F2E23]/10 py-10 md:py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[240px_minmax(0,1fr)] md:gap-14">
        <div>
          <h2 className="text-[10px] font-sans-clean font-semibold uppercase tracking-[0.35em] text-[#A3915F]">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-3">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex min-h-[38px] items-center border-b border-[#1F2E23]/10 pb-3"
            >
              <span className="mr-3 inline-block h-px w-4 bg-[#A3915F]" />
              <span className="font-sans-clean text-[15px] leading-7 text-[#1F1A17]">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({ eyebrow, title, body }) {
  return (
    <Panel className="h-full border border-[#1F2E23]/10 bg-[#F8F4ED] p-8 md:p-9">
      <SectionEyebrow tone="gold">{eyebrow}</SectionEyebrow>
      <h3 className="font-serif-display text-[2rem] font-light leading-[1.06] text-[#1F2E23]">
        {title}
      </h3>
      <p className="mt-5 font-sans-clean text-[15px] leading-[1.85] text-[#1F2E23]/70">
        {body}
      </p>
    </Panel>
  );
}

export default function ProductsPage() {
  const content = getPageContent("products");

  return (
    <>
      <SEO pageKey="products" />

      <PageShell
        hero
        heroImage="/images/products/hero.jpg"
        eyebrow={content.eyebrow}
        title={
          Array.isArray(content.heroTitleLines) && content.heroTitleLines.length
            ? content.heroTitleLines
            : content.heroTitle
        }
        subtitle={content.heroBody}
      >
        <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-14 lg:px-20">
          <div className="mx-auto max-w-[1080px] text-center">
            <AnimatedSection>
              <SectionEyebrow>{content.heroNote ? "Product Guidance" : null}</SectionEyebrow>
              <p className="mx-auto max-w-4xl font-sans-clean text-sm leading-[1.95] text-[#5E5A55] md:text-base">
                {content.heroNote}
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="border-t border-[#1F2E23]/10">
          <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-12 md:py-16 lg:px-20">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
              <AnimatedSection>
                <div className="max-w-[700px]">
                  <SectionEyebrow>Curated Product Lines</SectionEyebrow>

                  <h2 className="font-serif-display text-4xl font-light leading-[1.04] text-[#1F2E23] md:text-5xl lg:text-[3.75rem]">
                    Materials and finishes selected to work together.
                  </h2>

                  <p className="mt-8 max-w-2xl font-sans-clean text-base leading-[1.85] text-[#1F2E23]/70">
                    {content.sectionBody}
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <Panel className="overflow-hidden border border-[#1F2E23]/10 bg-[#F8F4ED]">
                  <img
                    src="/images/showroom/materials.jpg"
                    alt="Premier Kitchens & Bath material and finish selections"
                    className="aspect-[16/11] w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </Panel>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="border-t border-[#1F2E23]/10">
          <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-12 md:py-16 lg:px-20">
            <AnimatedSection>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <ValueCard
                  eyebrow="Cabinetry"
                  title="Built around layout and function."
                  body="Door styles, finish direction, storage features, and hardware selections are chosen as one coordinated system rather than disconnected decisions."
                />
                <ValueCard
                  eyebrow="Surfaces"
                  title="Countertops and tile that carry the room."
                  body="Stone, backsplash, flooring, and trim details are evaluated together so the final composition feels balanced in tone, scale, and texture."
                />
                <ValueCard
                  eyebrow="Finishing Details"
                  title="Fixtures that complete the design."
                  body="Faucets, sinks, lighting, and hardware are selected to reinforce the visual language of the overall space instead of competing with it."
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="border-t border-[#1F2E23]/10">
          <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-12 md:py-16 lg:px-20">
            <AnimatedSection>
              <div className="border-b border-[#1F2E23]/10">
                {PRODUCT_CATEGORIES.map((category) => (
                  <ProductCategorySection
                    key={category.title}
                    title={category.title}
                    brands={category.brands}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="border-t border-[#1F2E23]/10">
          <div className="mx-auto max-w-[1100px] px-6 py-16 text-center md:px-10 md:py-20 lg:px-12">
            <AnimatedSection>
              <SectionEyebrow>{content.ctaEyebrow}</SectionEyebrow>

              <h2 className="font-serif-display text-3xl font-light leading-[1.08] text-[#1F1A17] md:text-4xl lg:text-5xl">
                {content.ctaTitle}
              </h2>

              <p className="mx-auto mt-6 max-w-3xl font-sans-clean text-sm leading-[1.95] text-[#5E5A55] md:text-base">
                {content.ctaBody}
              </p>
            </AnimatedSection>
          </div>
        </section>

        <BottomCTA variant="products-showroom" />
      </PageShell>
    </>
  );
}