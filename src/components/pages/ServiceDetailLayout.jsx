// src/components/pages/ServiceDetailLayout.jsx
import React from "react";
import Link from "next/link";
import PageHero from "./PageHero";
import FooterImageCTA from "./FooterImageCTA";

function SectionIntro({ eyebrow, title, body }) {
  return (
    <section className="bg-[#F6F1EA] py-12 md:py-14">
      <div className="mx-auto max-w-[900px] px-6 text-center md:px-12">
        <div className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#B2967D]">
          {eyebrow}
        </div>

        <h2 className="mx-auto mt-4 max-w-[620px] font-serif-display text-[2rem] font-semibold leading-[1.16] tracking-[-0.03em] text-[#241D19] md:text-[3rem]">
          {title}
        </h2>

        <div className="mx-auto mt-5 h-px w-14 bg-[#D4C6B8]" />

        <p className="mx-auto mt-5 max-w-[700px] text-[14px] leading-[1.9] text-[#5C4D42]/78 md:text-[15px]">
          {body}
        </p>
      </div>
    </section>
  );
}

function FeatureBand({ image, alt }) {
  return (
    <section className="bg-[#F6F1EA]">
      <div className="mx-auto max-w-[1600px]">
        <img
          src={image}
          alt={alt}
          className="h-[220px] w-full object-cover md:h-[320px] lg:h-[380px]"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}

function NarrowCTA({ eyebrow, title, body, ctaLabel, ctaHref }) {
  return (
    <section className="bg-[#F6F1EA] py-8 md:py-10">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="rounded-[24px] border border-[#E2D7CB] bg-[#F3EEE7] px-8 py-8 md:px-10 md:py-9 lg:px-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-[760px]">
              <div className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#B2967D]">
                {eyebrow}
              </div>

              <h3 className="mt-4 font-serif-display text-[1.8rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[#241D19] md:text-[2.3rem]">
                {title}
              </h3>

              <p className="mt-4 max-w-[680px] text-[14px] leading-[1.85] text-[#5C4D42]/78 md:text-[15px]">
                {body}
              </p>
            </div>

            <div>
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-[#151312] px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F6F1EA] transition hover:bg-[#2A2421]"
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ eyebrow, title, steps }) {
  return (
    <section className="bg-[#F3EEE7] py-12 md:py-14">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="max-w-[760px]">
          <div className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#B2967D]">
            {eyebrow}
          </div>

          <h3 className="mt-4 font-serif-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.03em] text-[#241D19] md:text-[2.5rem]">
            {title}
          </h3>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="border-l border-[#E0D4C8] pl-5 md:pl-6">
              <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#B2967D]">
                {step.number}
              </div>

              <h4 className="mt-4 font-serif-display text-[1.35rem] font-semibold leading-[1.1] tracking-[-0.02em] text-[#241D19]">
                {step.title}
              </h4>

              <div className="mt-4 h-px w-10 bg-[#D0C1B2]" />

              <p className="mt-4 max-w-[290px] text-[13px] leading-[1.85] text-[#5C4D42]/78">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServiceDetailLayout({
  hero,
  intro,
  featureBand,
  narrowCta,
  process,
  footerImageCta,
  children,
}) {
  return (
    <main className="bg-[#F6F1EA]">
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        image={hero.image}
        imageAlt={hero.alt}
      />

      <SectionIntro
        eyebrow={intro.eyebrow}
        title={intro.title}
        body={intro.body}
      />

      <FeatureBand image={featureBand.image} alt={featureBand.alt} />

      <NarrowCTA
        eyebrow={narrowCta.eyebrow}
        title={narrowCta.title}
        body={narrowCta.body}
        ctaLabel={narrowCta.ctaLabel}
        ctaHref={narrowCta.ctaHref}
      />

      <ProcessSection
        eyebrow={process.eyebrow}
        title={process.title}
        steps={process.steps}
      />

      {children}

      <FooterImageCTA
        eyebrow={footerImageCta.eyebrow}
        title={footerImageCta.title}
        body={footerImageCta.body}
        image={footerImageCta.image}
        alt={footerImageCta.alt}
        primaryCtaLabel={footerImageCta.primaryCtaLabel}
        primaryCtaHref={footerImageCta.primaryCtaHref}
        secondaryCtaLabel={footerImageCta.secondaryCtaLabel}
        secondaryCtaHref={footerImageCta.secondaryCtaHref}
      />
    </main>
  );
}