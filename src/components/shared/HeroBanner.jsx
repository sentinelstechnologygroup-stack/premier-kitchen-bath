// src/components/shared/HeroBanner.jsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DEFAULT_TRANSITION = { duration: 1.2, ease: [0.33, 1, 0.68, 1] };

function normalizeTitleLines(title) {
  if (!title) return [];

  if (Array.isArray(title)) {
    return title
      .map((line) => String(line || "").replace(/\s+/g, " ").trim())
      .filter(Boolean);
  }

  const clean = String(title).replace(/\r/g, "").trim();
  if (!clean) return [];

  if (clean.includes("|")) {
    return clean
      .split("|")
      .map((part) => part.replace(/\s+/g, " ").trim())
      .filter(Boolean);
  }

  if (clean.includes("\n")) {
    return clean
      .split("\n")
      .map((part) => part.replace(/\s+/g, " ").trim())
      .filter(Boolean);
  }

  return [clean];
}

export default function HeroBanner({
  images,
  image,
  imageAlt = "",
  eyebrow,
  title,
  subtitle,
  actions = null,
  extras = null,
  className = "",
  bodyClassName = "",
  titleClassName = "",
  subtitleClassName = "",
  overlayClassName = "",
  dots = false,
  forceTwoRows = false,
  heightClassName = "h-[56vh] min-h-[460px] max-h-[740px]",
}) {
  const heroImages = useMemo(() => {
    if (Array.isArray(images) && images.length) return images;
    if (image) return [image];
    return [];
  }, [images, image]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const isSlider = heroImages.length > 1;

  useEffect(() => {
    if (!isSlider) return undefined;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroImages.length, isSlider]);

  const currentImage = heroImages[currentSlide] || "";

  const titleLines = useMemo(() => {
    const lines = normalizeTitleLines(title);

    if (!forceTwoRows || lines.length <= 2) return lines;

    return [
      lines.slice(0, Math.ceil(lines.length / 2)).join(" "),
      lines.slice(Math.ceil(lines.length / 2)).join(" "),
    ];
  }, [title, forceTwoRows]);

  const isMultiLine = titleLines.length > 1;

  return (
    <section
      className={`relative w-full overflow-hidden ${heightClassName} ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage || "hero-static"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={DEFAULT_TRANSITION}
          className="absolute inset-0"
        >
          {currentImage ? (
            <img
              src={currentImage}
              alt={imageAlt}
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
          ) : (
            <div className="absolute inset-0 bg-[#1F2E23]" />
          )}

          <div className="absolute inset-0 bg-[#102018]/46" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#09110D]/68 via-[#102018]/22 to-[#102018]/64" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1B15]/18 via-transparent to-[#0F1B15]/18" />
          <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-[#102018]/78 to-transparent" />
          {overlayClassName ? (
            <div className={`absolute inset-0 ${overlayClassName}`} />
          ) : null}
        </motion.div>
      </AnimatePresence>

      <div
        className={`absolute inset-0 flex items-center justify-center px-6 md:px-12 lg:px-20 ${bodyClassName}`}
      >
        <div className="mx-auto flex w-full max-w-[1440px] justify-center">
          <div className="flex w-full max-w-[1320px] flex-col items-center justify-center text-center">
            {eyebrow ? (
              <div className="mb-5 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.34em] text-white/82 [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]">
                {eyebrow}
              </div>
            ) : null}

            {titleLines.length ? (
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.95,
                  delay: 0.2,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className={[
                  "mx-auto flex flex-col items-center text-center font-serif-display font-light tracking-[-0.035em] text-[#F5F0EA] [text-shadow:0_2px_16px_rgba(0,0,0,0.34)]",
                  isMultiLine
                    ? "w-full max-w-[16ch] leading-[0.88] text-[2.95rem] sm:text-[3.55rem] md:text-[4.6rem] lg:text-[5.45rem] xl:text-[6.05rem]"
                    : "w-full max-w-[14ch] leading-[0.9] text-[3rem] sm:text-[3.55rem] md:text-[4.45rem] lg:text-[5.35rem] xl:text-[6rem]",
                  titleClassName,
                ].join(" ")}
              >
                {titleLines.map((line, index) => (
                  <span
                    key={`${line}-${index}`}
                    className="block w-full whitespace-nowrap text-center"
                  >
                    {line}
                  </span>
                ))}
              </motion.h1>
            ) : null}

            {subtitle ? (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.35,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className={[
                  "mx-auto mt-6 text-center font-sans-clean text-[15px] leading-[1.72] text-[#F5F0EA]/92 md:text-[17px] [text-shadow:0_1px_12px_rgba(0,0,0,0.26)]",
                  "max-w-[48rem]",
                  subtitleClassName,
                ].join(" ")}
              >
                {subtitle}
              </motion.p>
            ) : null}

            {actions ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.5,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="mt-9 flex justify-center"
              >
                {actions}
              </motion.div>
            ) : null}

            {extras ? (
              <div className="mt-8 flex justify-center">{extras}</div>
            ) : null}
          </div>
        </div>
      </div>

      {dots && isSlider ? (
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-px w-8 rounded-full transition-all ${
                idx === currentSlide ? "bg-[#F5F0EA]" : "bg-[#F5F0EA]/30"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}