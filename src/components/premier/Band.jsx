// src/components/premier/band.jsx
import React from "react";
import Link from "next/link";

/**
 * IMPORTANT:
 * This component should be a 1:1 extraction of the existing Band component
 * from Home.jsx (same markup + same classNames) to guarantee zero visual change.
 */

export default function Band({
  title,
  subtitle,
  cta,
  href,
  image,
  tone = "light",
}) {
  return (
    <Link href={href}
      className={`premierBand premierBand--${tone}`}
      aria-label={title}
    >
      <div className="premierBand__inner">
        <div className="premierBand__copy">
          <div className="premierBand__label">Design</div>
          <h3 className="premierBand__title">{title}</h3>
          <p className="premierBand__sub">{subtitle}</p>
          <div className="premierBand__cta">
            <span className="premierBand__ctaText">{cta}</span>
            <span className="premierBand__arrow" aria-hidden="true">
              →
            </span>
          </div>
        </div>

        <div className="premierBand__media" aria-hidden="true">
          <img className="premierBand__img" src={image} alt="" loading="lazy" />
        </div>
      </div>
    </Link>
  );
}
