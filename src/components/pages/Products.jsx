// src/components/pages/Products.jsx
"use client";

import React, { useEffect } from "react";
import BottomCTA from "@/components/shared/BottomCTA";
import SEO from "@/components/shared/SEO";
import { PRODUCT_CATEGORIES } from "@/content/productsData";
import { getPageContent } from "@/config/seo";

function ProductCategorySection({ title, brands }) {
  return (
    <section className="border-t border-[#1F2E23]/10 py-10 md:py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12">
        <div>
          <h2 className="text-[10px] font-sans-clean font-semibold uppercase tracking-[0.35em] text-[#D9C2A0]">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-10 md:grid-cols-3">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex min-h-[34px] items-center border-b border-[#1F2E23]/10 pb-3"
            >
              <span className="mr-3 inline-block h-px w-4 bg-[#C6A173]" />
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

export default function ProductsPage() {
  const content = getPageContent("products");

  useEffect(() => {
    document.body.classList.add("premier-has-hero");

    return () => {
      document.body.classList.remove("premier-has-hero");
    };
  }, []);

  return (
    <>
      <SEO pageKey="products" />

      <section className="relative isolate overflow-hidden border-b border-[#1F2E23]/10">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/images/products/hero.jpg')",
            backgroundPosition: "center 35%",
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-[#1A1613]/55" aria-hidden="true" />

        <div className="relative mx-auto max-w-[980px] px-6 py-24 text-center md:px-10 md:py-32 lg:px-12">
          <div className="mb-6 text-[10px] font-sans-clean font-semibold uppercase tracking-[0.35em] text-[#F5EBDD]/80">
            {content.eyebrow}
          </div>

          <h1 className="font-serif-display text-4xl font-light leading-[1.02] text-[#F5F0EA] md:text-5xl lg:text-6xl">
            {content.heroTitle}
          </h1>

          <p className="mx-auto mt-8 max-w-3xl font-sans-clean text-sm leading-[1.95] text-[#F5F0EA]/85 md:text-base">
            {content.heroBody}
          </p>

          <p className="mx-auto mt-5 max-w-2xl font-sans-clean text-xs leading-[1.9] text-[#F5F0EA]/65 md:text-sm">
            {content.heroNote}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-10 md:py-18 lg:px-12">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
            <p className="font-sans-clean text-sm leading-[1.95] text-[#5E5A55] md:text-base">
              {content.sectionBody}
            </p>
          </div>

          <div className="border-b border-[#1F2E23]/10">
            {PRODUCT_CATEGORIES.map((category) => (
              <ProductCategorySection
                key={category.title}
                title={category.title}
                brands={category.brands}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#1F2E23]/10 bg-[#FAF7F2]">
        <div className="mx-auto max-w-[980px] px-6 py-16 text-center md:px-10 md:py-20 lg:px-12">
          <div className="mb-6 text-[10px] font-sans-clean font-semibold uppercase tracking-[0.35em] text-[#9C7B4F]">
            {content.ctaEyebrow}
          </div>

          <h2 className="font-serif-display text-3xl font-light leading-[1.08] text-[#1F1A17] md:text-4xl lg:text-5xl">
            {content.ctaTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl font-sans-clean text-sm leading-[1.95] text-[#5E5A55] md:text-base">
            {content.ctaBody}
          </p>
        </div>
      </section>

      <BottomCTA variant="products-showroom" />
    </>
  );
}