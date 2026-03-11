// src/components/home/HeroSection.jsx
"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/components/utils/routes";
import { trackCTA } from "@/lib/intelligence";

export default function HeroSection() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.classList.add("premier-has-hero");
    return () => document.body.classList.remove("premier-has-hero");
  }, []);

  return (
    <section className="relative min-h-[680px] overflow-hidden md:min-h-[760px]">
      <img
        src="/images/home/hero-01.jpg"
        alt="Premier Kitchens Houston kitchen remodeling"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
        decoding="async"
      />

      {/* Global contrast control */}
      <div className="absolute inset-0 bg-[#120F0D]/34" />

      {/* Strong directional darkening behind copy */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#120F0D]/78 via-[#120F0D]/46 to-[#120F0D]/12" />

      {/* Top header protection */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#120F0D]/34 via-transparent to-transparent" />

      {/* Bottom grounding */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#120F0D]/22 via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-[680px] max-w-[1440px] items-center px-6 pt-28 pb-16 md:min-h-[760px] md:px-12 lg:px-20">
        <div className="max-w-[660px]">
          <div className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#D4C1AE]">
            Houston Kitchen &amp; Bath Remodeling
          </div>

          <h1
            className="mt-6 font-serif-display text-[3rem] font-semibold leading-[0.95] tracking-[-0.03em] text-white sm:text-[3.6rem] md:text-[4.4rem] lg:text-[5rem]"
            style={{ textShadow: "0 4px 20px rgba(0,0,0,0.32)" }}
          >
            Houston
            <br />
            Kitchen &amp; Bath
            <br />
            Remodeling
            <br />
            Since 1979
          </h1>

          <p
            className="mt-6 max-w-[560px] text-[15px] leading-[1.85] text-white/86 md:text-[17px]"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.22)" }}
          >
            Thousands of successful renovations. Premium craftsmanship.
            Beautifully refined spaces designed around the way you live.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={ROUTES.consultation}
              onClick={() => trackCTA("begin-your-project", "home-hero")}
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#151312] px-9 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F6F1EA] transition hover:bg-[#2A2421]"
            >
              Begin Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href={ROUTES.projects}
              onClick={() => trackCTA("explore-portfolio", "home-hero")}
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/22 bg-black/16 px-9 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm transition hover:bg-black/28"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
