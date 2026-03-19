// src/components/pages/Showroom.jsx
"use client";

import React from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import PageShell from "@/components/PageShell";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SEO from "@/components/shared/SEO";
import { Panel } from "@/components/ui/panel";
import { Button } from "@/components/ui/button";
import BottomCTA from "@/components/shared/BottomCTA";
import { getPageContent } from "@/config/seo";

const MEDIA = {
  hero: "/images/showroom/hero.jpg",
  showroom: "/images/showroom/interior.jpg",
  materials: "/images/showroom/materials.jpg",
};

const HIGHLIGHTS = [
  "Cabinetry styles and finish selections",
  "Granite and quartz countertop comparisons",
  "Tile, backsplash, and shower surface options",
  "Fixture, hardware, and finish coordination",
];

const HOURS = [
  { day: "Monday", hours: "9:00 AM – 5:00 PM" },
  { day: "Tuesday", hours: "9:00 AM – 5:00 PM" },
  { day: "Wednesday", hours: "9:00 AM – 5:00 PM" },
  { day: "Thursday", hours: "9:00 AM – 5:00 PM" },
  { day: "Friday", hours: "9:00 AM – 5:00 PM" },
  { day: "Saturday", hours: "10:00 AM – 3:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

function SectionEyebrow({ children, tone = "default" }) {
  if (!children) return null;

  const tones = {
    default: "text-[#1F2E23]/45",
    gold: "text-[#A3915F]",
  };

  return (
    <div
      className={`mb-4 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.25em] ${tones[tone]}`}
    >
      {children}
    </div>
  );
}

function HighlightList() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4">
      {HIGHLIGHTS.map((item) => (
        <div
          key={item}
          className="flex items-center border-b border-[#1F2E23]/10 pb-4"
        >
          <span className="mr-3 inline-block h-px w-4 bg-[#A3915F]" />
          <span className="font-sans-clean text-[15px] leading-7 text-[#1F1A17]">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

function VisitInfoCard() {
  return (
    <Panel className="h-full border border-[#1F2E23]/10 bg-white p-8 md:p-10 shadow-[0_18px_48px_rgba(20,24,22,0.05)]">
      <div className="mb-6 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.25em] text-[#1F2E23]/45">
        Visit Information
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#6E5F3A]" />
          <div>
            <div className="mb-1 font-sans-clean text-[11px] uppercase tracking-[0.18em] text-[#1F2E23]/45">
              Address
            </div>
            <div className="font-sans-clean text-[15px] leading-[1.7] text-[#1F2E23]">
              1918 Baker Rd
              <br />
              Houston, TX 77094
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-[#6E5F3A]" />
          <div>
            <div className="mb-1 font-sans-clean text-[11px] uppercase tracking-[0.18em] text-[#1F2E23]/45">
              Phone
            </div>
            <a
              href="tel:2813518700"
              className="font-sans-clean text-[15px] text-[#1F2E23] transition-colors hover:text-[#6E5F3A]"
            >
              281.351.8700
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-[#6E5F3A]" />
          <div className="w-full">
            <div className="mb-3 font-sans-clean text-[11px] uppercase tracking-[0.18em] text-[#1F2E23]/45">
              Hours
            </div>

            <div className="space-y-2">
              {HOURS.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between border-b border-[#1F2E23]/8 pb-2 font-sans-clean text-[14px] text-[#1F2E23]/72"
                >
                  <span>{item.day}</span>
                  <span>{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Button asChild variant="premier">
          <a href="/contact">Schedule a Consultation</a>
        </Button>
      </div>
    </Panel>
  );
}

export default function Showroom() {
  const content = getPageContent("showroom");

  return (
    <>
      <SEO pageKey="showroom" />

      <PageShell
        hero
        heroImage={MEDIA.hero}
        eyebrow={content.heroEyebrow}
        title={
          Array.isArray(content.heroTitleLines) && content.heroTitleLines.length
            ? content.heroTitleLines
            : content.heroTitle
        }
        subtitle={content.heroSubtitle}
      >
        <section className="mx-auto max-w-[1680px] px-6 py-24 md:px-12 md:py-28 lg:px-24">
          <div className="grid grid-cols-1 items-center gap-18 xl:grid-cols-[1.08fr_0.92fr] xl:gap-24">
            <AnimatedSection>
              <div className="max-w-[860px]">
                <SectionEyebrow>{content.introEyebrow}</SectionEyebrow>

                <h2 className="font-serif-display text-4xl font-light leading-[1.04] text-[#1F2E23] md:text-5xl lg:text-[4.25rem]">
                  {content.introTitle}
                </h2>

                <p className="mt-8 max-w-3xl font-sans-clean text-base leading-[1.95] text-[#1F2E23]/70 md:text-[17px]">
                  {content.introBody}
                </p>

                <HighlightList />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <Panel className="overflow-hidden border border-[#1F2E23]/10 bg-[#F8F4ED] shadow-[0_18px_48px_rgba(20,24,22,0.06)]">
                <img
                  src={MEDIA.showroom}
                  alt="Premier Kitchen & Bath showroom interior"
                  className="aspect-[15/9] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </Panel>
            </AnimatedSection>
          </div>
        </section>

        <section className="border-t border-[#1F2E23]/10 bg-[#F8F4ED]/45">
          <div className="mx-auto max-w-[1680px] px-6 py-24 md:px-12 md:py-28 lg:px-24">
            <div className="grid grid-cols-1 gap-14 xl:grid-cols-[minmax(0,1.18fr)_420px] xl:gap-16">
              <AnimatedSection>
                <div className="grid grid-cols-1 gap-10">
                  <Panel className="overflow-hidden border border-[#1F2E23]/10 bg-[#F8F4ED] shadow-[0_18px_48px_rgba(20,24,22,0.05)]">
                    <img
                      src={MEDIA.materials}
                      alt="Cabinet, countertop, and tile material selections"
                      className="aspect-[16/9] w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="p-8 md:p-10 lg:p-12">
                      <SectionEyebrow>{content.guidanceEyebrow}</SectionEyebrow>

                      <h2 className="font-serif-display text-3xl font-light leading-[1.08] text-[#1F2E23] md:text-4xl lg:text-[3.1rem]">
                        {content.guidanceTitle}
                      </h2>

                      <p className="mt-5 max-w-3xl font-sans-clean text-base leading-[1.9] text-[#1F2E23]/68 md:text-[17px]">
                        {content.guidanceBody}
                      </p>
                    </div>
                  </Panel>

                  <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <Panel className="overflow-hidden border border-[#1F2E23]/10 bg-[#F8F4ED] shadow-[0_18px_48px_rgba(20,24,22,0.05)]">
                      <img
                        src={MEDIA.showroom}
                        alt="Premier Kitchens consultation and showroom planning"
                        className="aspect-[16/10] w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </Panel>

                    <div className="max-w-[760px]">
                      <SectionEyebrow tone="gold">
                        Personalized Guidance
                      </SectionEyebrow>

                      <h2 className="font-serif-display text-3xl font-light leading-[1.08] text-[#1F2E23] md:text-4xl lg:text-[3.15rem]">
                        Compare complete combinations before final selections are made.
                      </h2>

                      <p className="mt-6 font-sans-clean text-base leading-[1.9] text-[#1F2E23]/70 md:text-[17px]">
                        The showroom is where finishes begin to make sense together.
                        Cabinetry, counters, tile, lighting, and hardware can be reviewed
                        side by side so the final direction feels cohesive, elevated, and
                        aligned with the rest of the home.
                      </p>

                      <p className="mt-5 font-sans-clean text-base leading-[1.9] text-[#1F2E23]/70 md:text-[17px]">
                        This final planning step gives clients a clearer sense of scale,
                        finish balance, and overall direction before the project moves
                        into execution.
                      </p>

                      <div className="mt-8 flex flex-wrap gap-3">
                        <Button asChild variant="premier">
                          <a href="/contact">Book a Showroom Visit</a>
                        </Button>
                        <Button asChild variant="outline">
                          <a href="/products">Explore Products</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <VisitInfoCard />
              </AnimatedSection>
            </div>
          </div>
        </section>

        <BottomCTA variant="showroom" />
      </PageShell>
    </>
  );
}