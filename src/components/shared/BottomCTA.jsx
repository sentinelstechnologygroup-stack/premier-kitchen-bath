// src/components/shared/BottomCTA.jsx
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { ROUTES } from "@/components/utils/routes";
import { trackCTA } from "@/lib/intelligence";
import { Button } from "@/components/ui/button";
import { getCTAVariant } from "@/content/ctaVariants";

export default function BottomCTA({
  variant = null,
  eyebrow = "Ready to start?",
  title = "Schedule a Design Consultation",
  body = "Premier Kitchens & Bath is a Houston kitchen and bath remodeling company specializing in custom renovations and premium craftsmanship. Schedule a consultation to discuss your vision, explore design possibilities, and plan your project timeline. Our team typically responds within one business day.",
  primaryLabel = "Consultation",
  primaryHref = ROUTES.consultation ?? "/contact",
  secondaryLabel = "View Projects",
  secondaryHref = ROUTES.projects ?? "/projects",
  tone = "forest", // "forest" | "sage"
}) {
  const variantConfig = getCTAVariant(variant);

  const resolvedEyebrow = variantConfig?.eyebrow ?? eyebrow;
  const resolvedTitle = variantConfig?.title ?? title;
  const resolvedBody = variantConfig?.body ?? body;
  const resolvedPrimaryLabel = variantConfig?.primaryLabel ?? primaryLabel;
  const resolvedPrimaryHref = variantConfig?.primaryHref ?? primaryHref;
  const resolvedSecondaryLabel = variantConfig?.secondaryLabel ?? secondaryLabel;
  const resolvedSecondaryHref = variantConfig?.secondaryHref ?? secondaryHref;
  const resolvedTone = variantConfig?.tone ?? tone;
  const backgroundImage = variantConfig?.backgroundImage ?? null;

  const toneClass =
    resolvedTone === "sage" ? "bg-[#6B7F5E]" : "bg-[#545E55]";

  const primaryTrackingLabel = resolvedPrimaryLabel
    .toLowerCase()
    .replace(/\s+/g, "-");

  const secondaryTrackingLabel = resolvedSecondaryLabel
    .toLowerCase()
    .replace(/\s+/g, "-");

  return (
    <section
      className={`relative overflow-hidden border-t border-[#1F2E23]/10 ${toneClass}`}
    >
      {backgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${backgroundImage}")` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[#1F2E23]/60"
            aria-hidden="true"
          />
        </>
      ) : null}

      <div className="relative mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-16 lg:px-20">
        <AnimatedSection>
          <div className="text-center">
            {resolvedEyebrow ? (
              <div className="mb-6 text-[10px] font-sans-clean font-semibold uppercase tracking-[0.35em] text-[#F5F0EA]/70">
                {resolvedEyebrow}
              </div>
            ) : null}

            <h2 className="font-serif-display text-3xl font-light leading-[1.05] text-[#F5F0EA] md:text-4xl lg:text-5xl">
              {resolvedTitle}
            </h2>

            {resolvedBody ? (
              <p className="mx-auto mt-6 max-w-3xl font-sans-clean text-sm leading-[1.9] text-[#F5F0EA]/75 md:text-base">
                {resolvedBody}
              </p>
            ) : null}

            <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">
              <Button asChild variant="cta" size="ctaLg">
                <Link
                  href={resolvedPrimaryHref}
                  onClick={() => trackCTA(primaryTrackingLabel, "bottom-cta")}
                >
                  {resolvedPrimaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="ctaSecondary" size="ctaLg">
                <Link
                  href={resolvedSecondaryHref}
                  onClick={() =>
                    trackCTA(secondaryTrackingLabel, "bottom-cta")
                  }
                >
                  {resolvedSecondaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
