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

  return lines.map((line, idx) => {
    const isBrand = idx === 0;

    return (
      <span
        key={`${line}-${idx}`}
        className="block whitespace-normal"
        style={{
          color: isBrand ? "#E8D8C7" : "#FFFFFF",

          // 🔥 improved hierarchy
          fontSize: isBrand
            ? "1.02em"
            : idx === 1
            ? "0.66em"
            : "0.62em",

          letterSpacing: isBrand ? "-0.03em" : "-0.02em",
          lineHeight: isBrand ? 0.95 : 1.02,
          opacity: isBrand ? 1 : 0.96,

          // 🔥 stronger brand pop (subtle outline effect)
          textShadow: isBrand
            ? `
              0 10px 34px rgba(0,0,0,0.75),
              0 4px 14px rgba(0,0,0,0.55),
              0 0 2px rgba(0,0,0,0.65)
            `
            : `
              0 6px 22px rgba(0,0,0,0.6),
              0 2px 8px rgba(0,0,0,0.35)
            `,
        }}
      >
        {line}
      </span>
    );
  });
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
        className="absolute inset-0 h-full w-full object-cover object-center saturate-[0.95] brightness-[0.86] contrast-[1.03]"
        loading="eager"
        decoding="async"
      />

      {/* overlays */}
      <div className="absolute inset-0 bg-[#120F0D]/40 backdrop-[blur(0.5px)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#120F0D]/62 via-[#120F0D]/34 to-[#120F0D]/12" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#120F0D]/24 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#120F0D]/18 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_26%,rgba(0,0,0,0.08)_100%)]" />

      <div className="relative mx-auto flex min-h-[720px] max-w-[1440px] items-center px-6 pb-16 pt-28 md:min-h-[820px] md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-[1120px] text-center">
          
          {/* H1 */}
          <h1
            className="mx-auto font-serif-display font-semibold tracking-[-0.04em] max-w-[1080px]"
            style={{
              fontSize: "clamp(3rem, 5.5vw, 5.4rem)",
              lineHeight: 0.94,
            }}
          >
            {renderHeroLines(heroLines)}
          </h1>

          {/* body */}
          <p
            className="mx-auto mt-8 max-w-[720px] text-[16px] leading-[1.8] text-white/95 md:text-[18px]"
            style={{
              textShadow:
                "0 4px 16px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.32)",
            }}
          >
            {content.heroBody}
          </p>

          {/* CTA */}
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