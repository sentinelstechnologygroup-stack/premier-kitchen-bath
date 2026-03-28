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
      className={`mb-4 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.28em] ${tones[tone]}`}
    >
      {children}
    </div>
  );
}

/* ========================================
   PREMIUM LOGO CARD (SHOWROOM STYLE)
======================================== */
function ProductLogoCard({ brand }) {
  const Wrapper = brand.url ? "a" : "div";

  return (
    <Wrapper
      href={brand.url || undefined}
      target={brand.url ? "_blank" : undefined}
      rel={brand.url ? "noopener noreferrer" : undefined}
      className="group block"
    >
      <div className="flex h-[130px] items-center justify-center rounded-[26px] border border-[#E8DED2] bg-[#FAF7F2] px-8 transition duration-300 ease-out hover:-translate-y-[3px] hover:border-[#A3915F]/40 hover:shadow-[0_20px_50px_rgba(31,26,23,0.10)]">

        {/* Logo */}
        {brand.logo ? (
          <img
            src={brand.logo}
            alt={`${brand.name} logo`}
            className="max-h-[56px] w-auto max-w-full object-contain opacity-90 transition duration-300 group-hover:opacity-100 group-hover:scale-[1.04]"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="text-sm text-[#1F1A17]">{brand.name}</span>
        )}
      </div>
    </Wrapper>
  );
}

/* ========================================
   CATEGORY SECTION (REFINED)
======================================== */
function ProductCategorySection({ title, brands }) {
  return (
    <section className="border-t border-[#1F2E23]/10 py-14 md:py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[260px_minmax(0,1fr)] md:gap-16">

        {/* Category Title */}
        <div>
          <h2 className="text-[11px] font-sans-clean font-semibold uppercase tracking-[0.35em] text-[#A3915F]">
            {title}
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

          {brands.map((brand) => (
            <ProductLogoCard key={brand.name} brand={brand} />
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

        {/* INTRO */}
        <section className="mx-auto max-w-[1440px] px-6 py-14 md:px-12 md:py-16 lg:px-20">
          <div className="mx-auto max-w-[1080px] text-center">
            <AnimatedSection>
              <SectionEyebrow>
                {content.heroNote ? "Product Guidance" : null}
              </SectionEyebrow>

              <p className="mx-auto max-w-4xl font-sans-clean text-[15px] leading-[1.9] text-[#5E5A55] md:text-base">
                {content.heroNote}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* FEATURE SECTION */}
        <section className="border-t border-[#1F2E23]/10">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-18 lg:px-20">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">

              <AnimatedSection>
                <div className="max-w-[700px]">
                  <SectionEyebrow>Curated Product Lines</SectionEyebrow>

                  <h2 className="font-serif-display text-4xl font-light leading-[1.04] text-[#1F2E23] md:text-5xl lg:text-[3.6rem]">
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
                    alt="Premier Kitchens & Bath materials"
                    className="aspect-[16/11] w-full object-cover"
                  />
                </Panel>
              </AnimatedSection>

            </div>
          </div>
        </section>

        {/* VALUE CARDS */}
        <section className="border-t border-[#1F2E23]/10">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-18 lg:px-20">
            <AnimatedSection>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

                <ValueCard
                  eyebrow="Cabinetry"
                  title="Built around layout and function."
                  body="Door styles, finishes, storage features, and hardware are selected as a unified system."
                />

                <ValueCard
                  eyebrow="Surfaces"
                  title="Countertops and tile that carry the room."
                  body="Stone, backsplash, and flooring are coordinated to create visual balance and durability."
                />

                <ValueCard
                  eyebrow="Finishing Details"
                  title="Fixtures that complete the design."
                  body="Lighting, faucets, and hardware reinforce the overall design language."
                />

              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* LOGO WALL */}
        <section className="border-t border-[#1F2E23]/10">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-18 lg:px-20">

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

        {/* CTA */}
        <section className="border-t border-[#1F2E23]/10">
          <div className="mx-auto max-w-[1100px] px-6 py-18 text-center md:px-10 md:py-22 lg:px-12">
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