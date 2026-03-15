// src/components/pages/Showroom.jsx
"use client";

import React from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import PageShell from "../PageShell";
import AnimatedSection from "../shared/AnimatedSection";
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

export default function Showroom() {
  const content = getPageContent("showroom");

  return (
    <>
      <SEO pageKey="showroom" />

      <PageShell
        hero
        heroImage={MEDIA.hero}
        eyebrow={content.heroEyebrow}
        title={content.heroTitle}
        subtitle={content.heroSubtitle}
      >
        <section className="mx-auto max-w-[1440px] px-6 py-10 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-2 md:gap-20">
            <AnimatedSection>
              <div>
                <div className="mb-4 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.25em] text-[#1F2E23]/45">
                  {content.introEyebrow}
                </div>

                <h2 className="font-serif-display text-4xl font-light leading-[1.06] text-[#1F2E23] md:text-5xl">
                  {content.introTitle}
                </h2>

                <p className="mt-8 max-w-2xl font-sans-clean text-base leading-[1.8] text-[#1F2E23]/70">
                  {content.introBody}
                </p>

                <div className="mt-10 grid grid-cols-1 gap-4">
                  {HIGHLIGHTS.map((item) => (
                    <div
                      key={item}
                      className="flex items-center border-b border-[#1F2E23]/10 pb-4"
                    >
                      <span className="mr-3 inline-block h-px w-4 bg-[#C6A173]" />
                      <span className="font-sans-clean text-[15px] leading-7 text-[#1F1A17]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <Panel className="border border-[#1F2E23]/10 bg-[#F8F4ED]">
                <img
                  src={MEDIA.showroom}
                  alt="Premier Kitchen & Bath showroom interior"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </Panel>
            </AnimatedSection>
          </div>
        </section>

        <section className="border-t border-[#1F2E23]/10 bg-[#FAF7F2]">
          <div className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-[minmax(0,1.1fr)_420px] md:gap-20">
              <AnimatedSection>
                <Panel className="border border-[#1F2E23]/10 bg-white">
                  <img
                    src={MEDIA.materials}
                    alt="Cabinet, countertop, and tile material selections"
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="p-8 md:p-10">
                    <div className="mb-3 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.25em] text-[#1F2E23]/45">
                      {content.guidanceEyebrow}
                    </div>
                    <h2 className="font-serif-display text-3xl font-light text-[#1F2E23] md:text-4xl">
                      {content.guidanceTitle}
                    </h2>
                    <p className="mt-5 font-sans-clean text-sm leading-[1.85] text-[#1F2E23]/68 md:text-base">
                      {content.guidanceBody}
                    </p>
                  </div>
                </Panel>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <Panel className="border border-[#1F2E23]/10 bg-white p-8 md:p-10">
                  <div className="mb-6 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.25em] text-[#1F2E23]/45">
                    Visit Information
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#545E55]" />
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
                      <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-[#545E55]" />
                      <div>
                        <div className="mb-1 font-sans-clean text-[11px] uppercase tracking-[0.18em] text-[#1F2E23]/45">
                          Phone
                        </div>
                        <a
                          href="tel:2813518700"
                          className="font-sans-clean text-[15px] text-[#1F2E23] transition-colors hover:text-[#545E55]"
                        >
                          281.351.8700
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-[#545E55]" />
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
              </AnimatedSection>
            </div>
          </div>
        </section>

        <BottomCTA variant="showroom" />
      </PageShell>
    </>
  );
}