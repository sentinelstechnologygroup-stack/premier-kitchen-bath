// src/components/home/CTASection.jsx
import React from "react";
import Link from "next/link";
import { ROUTES } from "@/components/utils/routes";
import { getPageContent } from "@/config/seo";

export default function CTASection() {
  const content = getPageContent("home");

  return (
    <section id="showroom" className="relative overflow-hidden bg-[#171412]">
      <img
        src="/images/home/cta.jpg"
        alt="Premier Kitchen & Bath Houston showroom"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />

      <div className="absolute inset-0 bg-[#171412]/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#171412]/82 via-[#171412]/54 to-[#171412]/18" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#171412]/18 via-transparent to-[#171412]/24" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">
        <div className="max-w-[560px]">
          <div className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#D1B9A3]">
            {content.showroomCta?.eyebrow}
          </div>

          <h2
            className="mt-4 font-serif-display text-[2.1rem] font-semibold leading-[0.98] tracking-[-0.03em] text-white md:text-[3rem] lg:text-[3.5rem]"
            style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
          >
            {content.showroomCta?.title}
          </h2>

          <div className="mt-5 h-px w-16 bg-white/28" />

          <p
            className="mt-5 max-w-[520px] text-[14px] leading-[1.9] text-white/86 md:text-[15px]"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.22)" }}
          >
            {content.showroomCta?.body}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={ROUTES.consultation}
              className="inline-flex items-center justify-center rounded-full bg-[#151312] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F6F1EA] transition hover:bg-[#2A2421]"
            >
              Schedule Appointment
            </Link>

            <a
              href="tel:17135206570"
              className="inline-flex items-center justify-center rounded-full border border-white/24 bg-black/14 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm transition hover:bg-black/24"
            >
              Call (713) 520-6570
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}