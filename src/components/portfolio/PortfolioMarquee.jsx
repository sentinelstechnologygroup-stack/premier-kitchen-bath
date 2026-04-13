// src/components/portfolio/PortfolioMarquee.jsx
"use client";

// @ts-nocheck
import React, { useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PortfolioMarquee({
  items = [],
  title = "Design Portfolio",
  ctaLabel = "View Full Portfolio",
  ctaHref = "/gallery",
  bgColor = "#E8E0D4",
  eyebrow = "Portfolio",
  speedSeconds = 34,
  gapPx = 16,
  size = "small",
}) {
  const doubled = useMemo(() => [...items, ...items], [items]);

  const preset =
    size === "large"
      ? {
          cardClass: "group shrink-0 w-[240px] sm:w-[260px] md:w-[300px] lg:w-[320px]",
          imgWrapClass: "h-[190px] sm:h-[210px] md:h-[230px] overflow-hidden",
          bodyClass: "p-6",
          titleClass: "text-xl",
          subClass: "text-sm leading-[1.75]",
          labelClass: "text-[10px] tracking-[0.25em]",
          viewClass: "text-[11px] tracking-[0.22em]",
        }
      : {
          cardClass: "group shrink-0 w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px]",
          imgWrapClass: "aspect-[4/3] overflow-hidden",
          bodyClass: "p-4",
          titleClass: "text-[16px] leading-[1.15]",
          subClass: "text-[12px] leading-[1.6]",
          labelClass: "text-[9px] tracking-[0.24em]",
          viewClass: "text-[10px] tracking-[0.22em]",
        };

  if (!items.length) return null;

  return (
    <div className="relative">
      <style jsx>{`
        @keyframes premierMarqueeScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .premier-marquee-outer {
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .premier-marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0);
          animation-name: premierMarqueeScroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .premier-marquee-track {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="mb-3 text-[10px] font-sans-clean font-semibold uppercase tracking-[0.28em] text-[#1F2E23]/55">
            {eyebrow}
          </p>
          <h2 className="font-serif-display text-2xl font-light tracking-tight text-[#1F2E23] md:text-3xl">
            {title}
          </h2>
        </div>
      </div>

      <div className="mt-8">
        <div className="premier-marquee-outer">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12"
            style={{ background: `linear-gradient(to right, ${bgColor}, transparent)` }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12"
            style={{ background: `linear-gradient(to left, ${bgColor}, transparent)` }}
          />

          <div
            className="premier-marquee-track"
            style={{
              gap: `${gapPx}px`,
              paddingBottom: "10px",
              animationDuration: `${speedSeconds}s`,
            }}
          >
            {doubled.map((it, idx) => (
              <Link key={`${it.title}-${idx}`} href={it.href} className={preset.cardClass}>
                <div className="overflow-hidden rounded-2xl border border-[#1F2E23]/10 bg-[#F8F4ED]">
                  <div className={preset.imgWrapClass}>
                    <img
                      src={it.image}
                      alt={it.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className={preset.bodyClass}>
                    <div
                      className={`${preset.labelClass} font-sans-clean font-semibold uppercase text-[#1F2E23]/45`}
                    >
                      Project Gallery
                    </div>

                    <div className={`mt-2 font-serif-display font-light text-[#1F2E23] ${preset.titleClass}`}>
                      {it.title}
                    </div>

                    {it.subtitle ? (
                      <p className={`mt-2 font-sans-clean text-[#1F2E23]/65 ${preset.subClass}`}>
                        {it.subtitle}
                      </p>
                    ) : null}

                    <div
                      className={`mt-3 inline-flex items-center gap-2 font-sans-clean font-semibold uppercase text-[#1F2E23]/80 ${preset.viewClass}`}
                    >
                      View Gallery
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-3 text-[11px] font-sans-clean font-semibold uppercase tracking-[0.25em] text-[#1F2E23]/70 transition-colors hover:text-[#1F2E23]"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}