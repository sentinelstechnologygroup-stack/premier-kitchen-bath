// src/components/gallery/GalleryGrid.jsx
"use client";

import React, { useEffect, useMemo, useState } from "react";

function normalizeItem(item, index) {
  if (typeof item === "string") {
    return {
      id: `gallery-image-${index}`,
      thumbSrc: item,
      fullSrc: item,
      alt: `Project image ${index + 1}`,
      caption: `Project image ${index + 1}`,
    };
  }

  return {
    id: item?.id ?? `gallery-image-${index}`,
    thumbSrc: item?.thumbSrc ?? item?.src ?? item?.image ?? item?.url ?? "",
    fullSrc: item?.fullSrc ?? item?.src ?? item?.image ?? item?.url ?? "",
    alt: item?.alt ?? item?.title ?? `Project image ${index + 1}`,
    caption: item?.caption ?? item?.title ?? "",
  };
}

export default function GalleryGrid({
  items = [],
  columns = 3,
  gap = 6,
  roundedClass = "rounded-[22px]",
  tileAspect = "aspect-[4/3]",
}) {
  const normalizedItems = useMemo(() => {
    return items
      .map((item, index) => normalizeItem(item, index))
      .filter((item) => item.thumbSrc);
  }, [items]);

  const [activeIndex, setActiveIndex] = useState(-1);

  const hasLightbox =
    activeIndex >= 0 && activeIndex < normalizedItems.length;
  const activeItem = hasLightbox ? normalizedItems[activeIndex] : null;

  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(-1);

  const showPrev = (event) => {
    event?.stopPropagation();
    setActiveIndex((prev) =>
      prev <= 0 ? normalizedItems.length - 1 : prev - 1
    );
  };

  const showNext = (event) => {
    event?.stopPropagation();
    setActiveIndex((prev) =>
      prev >= normalizedItems.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (!hasLightbox) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [hasLightbox, normalizedItems.length]);

  const gridClass =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : columns === 4
        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      <div className={`grid ${gridClass}`} style={{ gap: `${gap}px` }}>
        {normalizedItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => openLightbox(index)}
            className={`group relative block w-full overflow-hidden bg-[#E9E1D7] text-left ${roundedClass} focus:outline-none focus:ring-2 focus:ring-[#8A6A4A]/40`}
            aria-label={`Open image ${index + 1} of ${normalizedItems.length}`}
          >
            <div className={`relative w-full overflow-hidden ${tileAspect}`}>
              <img
                src={item.thumbSrc}
                alt={item.alt}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 ease-out group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </button>
        ))}
      </div>

      {hasLightbox && activeItem ? (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(233,225,215,0.62)] backdrop-blur-[18px] p-4 md:p-6"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Project image viewer"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-[10001] inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/45 bg-white/35 text-[28px] leading-none text-[#2A211B] shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-md transition hover:bg-white/55"
            aria-label="Close gallery viewer"
          >
            ×
          </button>

          {normalizedItems.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPrev}
                className="absolute left-3 top-1/2 z-[10001] -translate-y-1/2 rounded-full border border-white/45 bg-white/35 px-4 py-3 text-[26px] leading-none text-[#2A211B] shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-md transition hover:bg-white/55 md:left-5"
                aria-label="Previous image"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={showNext}
                className="absolute right-3 top-1/2 z-[10001] -translate-y-1/2 rounded-full border border-white/45 bg-white/35 px-4 py-3 text-[26px] leading-none text-[#2A211B] shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-md transition hover:bg-white/55 md:right-5"
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}

          <div
            className="relative z-[10000] flex items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activeItem.fullSrc || activeItem.src}
              alt={activeItem.alt}
              className="w-[84vw] max-w-[1300px] h-auto max-h-[82vh] object-contain rounded-[18px]"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="pointer-events-none absolute bottom-4 left-1/2 z-[10001] -translate-x-1/2 rounded-full border border-white/35 bg-white/30 px-4 py-2 text-[12px] font-semibold tracking-[0.14em] text-[#2A211B] shadow-[0_10px_30px_rgba(0,0,0,0.10)] backdrop-blur-md">
            {activeIndex + 1} / {normalizedItems.length}
          </div>
        </div>
      ) : null}
    </>
  );
}