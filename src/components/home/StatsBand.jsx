// src/components/home/StatsBand.jsx
import React from "react";
import AnimatedSection from "../shared/AnimatedSection";

const STATS = [
  { value: "Since 1979", label: "Over 45 years in business" },
  { value: "5,000+", label: "Projects completed" },
  { value: "Houston", label: "Local showroom & team" },
  { value: "Fully Insured", label: "Established remodeling team" },
];

export default function StatsBand() {
  return (
    <section className="border-y border-[#1F2E23]/10 bg-[#EFE7DD]">
      <div className="mx-auto max-w-[1440px] px-6 py-10 md:px-12 lg:px-20">
        <AnimatedSection>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
            {STATS.map((item) => (
              <div key={item.value} className="text-center">
                <div className="font-serif-display text-[2rem] font-light leading-none text-[#1F2E23] md:text-[2.4rem]">
                  {item.value}
                </div>
                <div className="mt-3 font-sans-clean text-[10px] font-semibold uppercase tracking-[0.22em] text-[#1F2E23]/55">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}