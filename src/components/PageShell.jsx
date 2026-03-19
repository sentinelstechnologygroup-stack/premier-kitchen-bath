// src/components/PageShell.jsx
"use client";

import React, { useEffect } from "react";
import HeroBanner from "@/components/shared/HeroBanner";

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
  useEffect(() => {
    if (typeof document === "undefined") return;

    document.body.classList.toggle("premier-has-hero", !!hero);

    return () => {
      document.body.classList.remove("premier-has-hero");
    };
  }, [hero]);

  return (
    <div className="min-h-screen bg-[#F3EEE7] text-[#1F1A17]">
      {hero ? (
        <HeroBanner
          image={heroImage}
          imageAlt={typeof title === "string" ? title : "Premier Kitchen & Bath"}
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          extras={heroExtras}
          forceTwoRows={false}
          heightClassName="h-[56vh] min-h-[520px] max-h-[760px]"
          bodyClassName="pt-24 pb-14 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20"
          titleClassName="max-w-[13ch] leading-[0.9] text-[3rem] sm:text-[3.55rem] md:text-[4.45rem] lg:text-[5.35rem] xl:text-[6rem]"
          subtitleClassName="max-w-[52rem]"
          overlayClassName=""
        />
      ) : null}

      <main className="bg-[#F3EEE7]">{children}</main>

      {showCtaStrip ? null : null}
      {showBottomCta ? null : null}
    </div>
  );
}