"use client";

import React, { useEffect } from "react";

export default function PageHero({
  eyebrow,
  title,
  image,
  imageAlt,
}) {
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.classList.add("premier-has-hero");
    return () => document.body.classList.remove("premier-has-hero");
  }, []);

  return (
    <section className="relative h-[400px] w-full overflow-hidden md:h-[500px] lg:h-[560px]">
      <img
        src={image}
        alt={imageAlt || title}
        className="absolute inset-0 h-full w-full object-cover saturate-[0.96] brightness-[0.85] contrast-[1.03]"
        loading="eager"
        decoding="async"
      />

      <div className="absolute inset-0 bg-black/18 backdrop-[blur(0.5px)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/48 via-black/24 to-black/08" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(0,0,0,0.08)_100%)]" />

      <div className="relative mx-auto flex h-full max-w-[1440px] items-end px-6 pb-14 md:px-12 md:pb-18 lg:px-20 lg:pb-20">
        <div className="max-w-[640px]">
          <div
            className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#D3BCA5]"
            style={{
              textShadow:
                "0 2px 6px rgba(0,0,0,0.55), 0 1px 2px rgba(0,0,0,0.75)",
            }}
          >
            {eyebrow}
          </div>

          <h1
            className="mt-4 font-serif-display text-[3.1rem] font-semibold leading-[0.94] tracking-[-0.03em] text-white md:text-[4.4rem] lg:text-[5rem]"
            style={{ textShadow: "0 6px 24px rgba(0,0,0,0.42)" }}
          >
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}