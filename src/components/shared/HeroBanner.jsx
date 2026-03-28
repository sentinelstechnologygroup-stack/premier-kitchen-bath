"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DEFAULT_TRANSITION = { duration: 1.2, ease: [0.33, 1, 0.68, 1] };

function renderTitle(title) {
  if (Array.isArray(title)) {
    return title.map((line, idx) => (
      <span key={`${line}-${idx}`} className="block">
        {line}
      </span>
    ));
  }

  return title;
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
  heightClassName = "h-[56vh] min-h-[460px] max-h-[740px]",
}) {
  const heroImages = useMemo(() => {
    if (Array.isArray(images) && images.length) return images;
    if (image) return [image];
    return [];
  }, [images, image]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return undefined;

    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(id);
  }, [heroImages.length]);

  const activeImage = heroImages[activeIndex] || "";

  return (
    <section
      className={`relative isolate overflow-hidden ${heightClassName} ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeImage}
          className="absolute inset-0"
          initial={{ scale: 1.04, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={DEFAULT_TRANSITION}
        >
          <img
            src={activeImage}
            alt={imageAlt}
            className="h-full w-full object-cover object-center saturate-[0.96] brightness-[0.84] contrast-[1.03]"
          />
        </motion.div>
      </AnimatePresence>

      <div
        className={`absolute inset-0 bg-[#0F0D0C]/42 backdrop-[blur(0.5px)] ${overlayClassName}`}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/34 via-black/10 to-black/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/24 via-transparent to-black/12"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(0,0,0,0.10)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex h-full max-w-[1280px] items-center px-6 md:px-10 lg:px-14">
        <div className={`w-full text-white ${bodyClassName}`}>
          {eyebrow ? (
            <div
              className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#D4C1AE]"
              style={{
                textShadow:
                  "0 3px 12px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.75)",
              }}
            >
              {eyebrow}
            </div>
          ) : null}

          {title ? (
            <h1
              className={`mt-6 font-serif-display text-[clamp(2.6rem,6vw,5.7rem)] font-semibold leading-[0.9] tracking-[-0.045em] text-white ${titleClassName}`}
              style={{
                textShadow:
                  "0 10px 36px rgba(0,0,0,0.62), 0 3px 12px rgba(0,0,0,0.42)",
              }}
            >
              {renderTitle(title)}
            </h1>
          ) : null}

          {subtitle ? (
            <p
              className={`mx-auto mt-7 max-w-[900px] text-[16px] leading-[1.8] text-white/95 md:text-[18px] ${subtitleClassName}`}
              style={{
                textShadow:
                  "0 4px 16px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.32)",
              }}
            >
              {subtitle}
            </p>
          ) : null}

          {actions ? (
            <div
              className="mt-8 [text-shadow:0_1px_2px_rgba(0,0,0,0.45)]"
              style={{ filter: "drop-shadow(0 6px 18px rgba(0,0,0,0.18))" }}
            >
              {actions}
            </div>
          ) : null}

          {extras ? <div className="mt-8">{extras}</div> : null}
        </div>
      </div>

      {dots && heroImages.length > 1 ? (
        <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === activeIndex ? "bg-white" : "bg-white/45"
              }`}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}