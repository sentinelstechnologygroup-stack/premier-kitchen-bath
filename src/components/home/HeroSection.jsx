// src/components/home/HeroSection.jsx
"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/components/utils/routes";
import { trackCTA } from "@/lib/intelligence";
import { getPageContent } from "@/config/seo";

function buildHeroLines(content) {
  if (Array.isArray(content.heroTitleLines) && content.heroTitleLines.length) {
    return content.heroTitleLines;
  }

  if (content.heroTitle) {
    return [content.heroTitle];
  }

  if (content.pageH1) {
    return [content.pageH1];
  }

  return ["Houston Kitchen & Bathroom Remodeling Experts Since 1979"];
}

export default function HeroSection() {
  const content = getPageContent("home");
  const heroLines = buildHeroLines(content);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.classList.add("premier-has-hero");
    return () => document.body.classList.remove("premier-has-hero");
  }, []);

  return (
    <section className="relative min-h-[720px] overflow-hidden md:min-h-[820px]">
      <img
        src="/images/home/hero-01.jpg"
        alt="Premier Kitchen & Bath Houston kitchen remodeling"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
        decoding="async"
      />

      <div className="absolute inset-0 bg-[#120F0D]/38" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#120F0D]/84 via-[#120F0D]/52 to-[#120F0D]/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#120F0D]/36 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#120F0D]/22 via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-[720px] max-w-[1440px] items-center px-6 pb-16 pt-28 md:min-h-[820px] md:px-12 lg:px-20">
        <div className="max-w-[760px]">
          <div
            className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#D4C1AE]"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.28)" }}
          >
            {content.eyebrow}
          </div>

          <h1
            className="mt-6 font-serif-display font-semibold leading-[0.92] tracking-[-0.04em] text-white"
            style={{
              fontSize: "clamp(3.2rem, 7vw, 5.8rem)",
              maxWidth: "10.5ch",
              textWrap: "balance",
              textShadow: "0 6px 24px rgba(0,0,0,0.34)",
            }}
          >
            {heroLines.map((line, index) => (
              <React.Fragment key={`${line}-${index}`}>
                {line}
                {index < heroLines.length - 1 ? <br /> : null}
              </React.Fragment>
            ))}
          </h1>

          <p
            className="mt-7 max-w-[620px] text-[16px] leading-[1.8] text-white/92 md:text-[18px]"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.22)" }}
          >
            {content.heroBody}
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
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/24 bg-black/18 px-9 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm transition hover:bg-black/28"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}