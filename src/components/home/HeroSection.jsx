// src/components/home/HeroSection.jsx
"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/components/utils/routes";
import { trackCTA } from "@/lib/intelligence";
import { getPageContent } from "@/config/seo";

function getHeroLines(content) {
  if (Array.isArray(content.heroTitleLines) && content.heroTitleLines.length) {
    return content.heroTitleLines.filter(Boolean);
  }

  if (content.pageH1) {
    return [content.pageH1];
  }

  return [];
}

function renderHeroLines(lines = []) {
  if (!Array.isArray(lines) || lines.length === 0) return null;

  return lines.map((line, idx) => (
    <span
      key={`${line}-${idx}`}
      className="block whitespace-normal md:whitespace-nowrap"
    >
      {line}
    </span>
  ));
}

export default function HeroSection() {
  const content = getPageContent("home");
  const heroLines = getHeroLines(content);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.classList.add("premier-has-hero", "premier-home-hero");
    return () => {
      document.body.classList.remove("premier-has-hero", "premier-home-hero");
    };
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

      <div className="absolute inset-0 bg-[#120F0D]/52" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#120F0D]/88 via-[#120F0D]/62 to-[#120F0D]/28" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#120F0D]/42 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#120F0D]/30 via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-[720px] max-w-[1440px] items-center px-6 pb-16 pt-28 md:min-h-[820px] md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-[1280px] text-center">
          <div className="relative inline-block">
            <span className="absolute inset-0 -z-10 rounded-sm bg-black/20 backdrop-blur-sm" />

            <div
              className="px-2 py-[2px] text-[10px] font-semibold uppercase tracking-[0.34em] text-[#E8D8C7]"
              style={{
                textShadow:
                  "0 2px 6px rgba(0,0,0,0.6), 0 1px 2px rgba(0,0,0,0.8)",
              }}
            >
              {content.eyebrow}
            </div>
          </div>

          <h1
            className="mt-6 font-serif-display font-semibold leading-[0.9] tracking-[-0.045em] text-white"
            style={{
              fontSize: "clamp(3.1rem, 6vw, 5.6rem)",
              textShadow:
                "0 10px 36px rgba(0,0,0,0.62), 0 3px 12px rgba(0,0,0,0.42)",
            }}
          >
            {renderHeroLines(heroLines)}
          </h1>

          <p
            className="mx-auto mt-7 max-w-[700px] text-[16px] leading-[1.8] text-white/95 md:text-[18px]"
            style={{
              textShadow:
                "0 4px 16px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.32)",
            }}
          >
            {content.heroBody}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={ROUTES.consultation}
              onClick={() => trackCTA("begin-your-project", "home-hero")}
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#151312] px-9 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F6F1EA] shadow-[0_10px_30px_rgba(0,0,0,0.28)] transition hover:bg-[#2A2421]"
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.45)" }}
            >
              <span className="relative top-[0.5px]">Begin Your Project</span>
              <ArrowRight
                className="h-4 w-4"
                style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.35))" }}
              />
            </Link>

            <Link
              href={ROUTES.projects}
              onClick={() => trackCTA("explore-portfolio", "home-hero")}
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/32 bg-black/34 px-9 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.24)] backdrop-blur-md transition hover:bg-black/42"
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.55)" }}
            >
              <span className="relative top-[0.5px]">View Portfolio</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}