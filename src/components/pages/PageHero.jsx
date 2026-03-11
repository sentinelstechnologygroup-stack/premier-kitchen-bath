// src/components/pages/PageHero.jsx
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
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        decoding="async"
      />

      <div className="absolute inset-0 bg-black/22" />

      {/* 3-line readability improvement */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/42 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/16 via-transparent to-transparent" />

      <div className="relative mx-auto flex h-full max-w-[1440px] items-end px-6 pb-14 md:px-12 md:pb-18 lg:px-20 lg:pb-20">
        <div className="max-w-[640px]">
          <div className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#D3BCA5]">
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
