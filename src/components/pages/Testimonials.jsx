// src/pages/Testimonials.jsx
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Quote, Star } from "lucide-react";
import PageShell from "../PageShell";
import AnimatedSection from "../shared/AnimatedSection";
import { ROUTES } from "@/components/utils/routes";
import BottomCTA from "@/components/shared/BottomCTA";

const MEDIA = {
  hero: "/images/contact/testimonials/testimonials-hero.jpg", // placeholder until final asset exists
};

// ✅ Edit this list anytime — grid updates automatically
const TESTIMONIALS = [
  {
    quote:
      "  ",
    name: " ",
    meta: " ",
  },

function TestimonialCard({ quote, name, meta }) {
  return (
    <div className="border border-[#1F2E23]/10 bg-[#F8F4ED] p-8 md:p-9">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 text-[#545E55]">
          <Star className="w-4 h-4" />
          <Star className="w-4 h-4" />
          <Star className="w-4 h-4" />
          <Star className="w-4 h-4" />
          <Star className="w-4 h-4" />
        </div>
        <div className="text-[10px] tracking-[0.25em] uppercase text-[#1F2E23]/45 font-sans-clean font-semibold">
          Testimonial
        </div>
      </div>

      <div className="mt-6 flex items-start gap-3">
        <Quote className="w-5 h-5 text-[#545E55] flex-shrink-0 mt-1" />
        <p className="text-[#1F2E23]/75 font-sans-clean text-sm md:text-[15px] leading-[1.9]">
          {quote}
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-[#1F2E23]/10">
        <div className="text-[#1F2E23] font-sans-clean text-sm font-semibold">
          {String(name).toUpperCase()}
        </div>
        <div className="mt-2 text-[#1F2E23]/55 font-sans-clean text-[11px] tracking-[0.14em] uppercase">
          {meta}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const items = useMemo(() => TESTIMONIALS.filter(Boolean), []);
  const [visibleCount, setVisibleCount] = useState(9);

  const visible = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  return (
    <PageShell
      hero
      heroImage={MEDIA.hero}
      eyebrow="Testimonials"
      title="Trusted outcomes. Disciplined execution."
      subtitle="Selected client feedback reflecting how we plan, communicate, and build landscape environments with clarity and precision."
    >
      {/* Intro (Renderings pattern) */}
      <section className="px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto pt-14 md:pt-16 pb-10">
        <AnimatedSection>
          <p className="text-[#1F2E23]/60 font-sans-clean text-base leading-[1.9] max-w-3xl">
            These testimonials represent a snapshot of client experience across residential and
            commercial projects. For project examples, explore our galleries.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={ROUTES.projects}
              className="inline-flex items-center gap-4 bg-[#1F2E23] text-[#F5F0EA] px-10 py-4 text-[11px] tracking-[0.28em] uppercase font-sans-clean font-semibold hover:opacity-95 transition rounded-2xl"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>

            <Link href={ROUTES.gallery ?? "/gallery"}
              className="inline-flex items-center gap-4 border border-[#1F2E23]/20 bg-[#F8F4ED] text-[#1F2E23] px-10 py-4 text-[11px] tracking-[0.28em] uppercase font-sans-clean font-semibold hover:bg-[#F5F0EA] transition rounded-2xl"
            >
              View Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* Grid */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {visible.map((t, idx) => (
            <AnimatedSection key={`${t.name}-${idx}`}>
              <TestimonialCard {...t} />
            </AnimatedSection>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((n) => Math.min(n + 9, items.length))}
              className="bg-[#1F2E23] text-[#F5F0EA] px-10 py-4 text-[11px] tracking-[0.25em] uppercase font-sans-clean font-semibold hover:bg-[#2A3F2F] transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </section>

      {/* SHARED BOTTOM CTA */}
  
    </PageShell>
  );
}