// src/PageShell.jsx
"use client";

import React from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function PageShell({
  children,
  hero = false,
  heroImage,
  eyebrow,
  title,
  subtitle,
  heroExtras = null,
  showCtaStrip = true,
  showBottomCta = true,
}) {
  return (
    <div className="min-h-screen bg-[#F6F1EA] text-[#1F1A17]">
      <SiteHeader />

      {hero ? (
        <section className="relative overflow-hidden">
          <div className="relative min-h-[520px] md:min-h-[620px]">
            {heroImage ? (
              <img
                src={heroImage}
                alt={typeof title === "string" ? title : "Premier Kitchen & Bath"}
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="eager"
                decoding="async"
              />
            ) : null}

            <div className="absolute inset-0 bg-[#120F0D]/34" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#120F0D]/82 via-[#120F0D]/48 to-[#120F0D]/18" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#120F0D]/30 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120F0D]/20 via-transparent to-transparent" />

            <div className="relative mx-auto flex min-h-[520px] max-w-[1440px] items-end px-6 pb-14 pt-28 md:min-h-[620px] md:px-12 md:pb-18 lg:px-20 lg:pb-20">
              <div className="max-w-[860px]">
                {eyebrow ? (
                  <div
                    className="mb-5 text-[10px] font-sans-clean font-semibold uppercase tracking-[0.34em] text-[#D4C1AE]"
                    style={{ textShadow: "0 2px 8px rgba(0,0,0,0.28)" }}
                  >
                    {eyebrow}
                  </div>
                ) : null}

                {title ? (
                  <h1
                    className="font-serif-display font-light leading-[0.94] tracking-[-0.035em] text-white"
                    style={{
                      fontSize: "clamp(2.7rem, 5.2vw, 4.9rem)",
                      maxWidth: "13ch",
                      textWrap: "balance",
                      textShadow: "0 6px 24px rgba(0,0,0,0.34)",
                    }}
                  >
                    {title}
                  </h1>
                ) : null}

                {subtitle ? (
                  <p
                    className="mt-6 max-w-[700px] font-sans-clean text-[15px] leading-[1.85] text-white/90 md:text-[17px]"
                    style={{ textShadow: "0 2px 10px rgba(0,0,0,0.22)" }}
                  >
                    {subtitle}
                  </p>
                ) : null}

                {heroExtras ? <div className="mt-8">{heroExtras}</div> : null}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <main>{children}</main>

      {showBottomCta ? null : null}
      <SiteFooter />
    </div>
  );
}