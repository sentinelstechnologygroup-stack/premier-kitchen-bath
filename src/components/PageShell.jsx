// src/components/PageShell.jsx
"use client";

import React, { useEffect } from "react";
import HeroBanner from "@/components/shared/HeroBanner";

export default function PageShell({
  hero = false,
  heroImage,
  eyebrow,
  title,
  subtitle,
  children,
}) {
  useEffect(() => {
    if (typeof document === "undefined") return;

    if (hero) {
      document.body.classList.add("premier-has-hero");
    } else {
      document.body.classList.remove("premier-has-hero");
    }

    return () => {
      document.body.classList.remove("premier-has-hero");
    };
  }, [hero]);

  return (
    <div className="min-h-screen bg-[#F6F1EA] text-[#1E1A17]">
      {hero ? (
        <HeroBanner
          image={heroImage}
          imageAlt={Array.isArray(title) ? title.join(" ") : title || ""}
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          className="min-h-[620px] md:min-h-[700px]"
          heightClassName="h-[64vh] min-h-[620px] max-h-[860px]"
          overlayClassName="bg-[#0F0D0C]/68"
          bodyClassName="mx-auto max-w-[980px] text-center"
        />
      ) : null}

      <main>{children}</main>
    </div>
  );
}