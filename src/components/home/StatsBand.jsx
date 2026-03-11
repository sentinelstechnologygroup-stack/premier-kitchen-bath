// src/components/home/StatsBand.jsx

import React from "react";

const STATS = [
  { value: "Since 1979", label: "Over 45 years in business" },
  { value: "5,000+", label: "Projects completed" },
  { value: "Houston", label: "Local showroom & team" },
  { value: "Licensed", label: "Fully insured & established" },
];

export default function StatsBand() {
  return (
    <section className="bg-[#171412] py-6 md:py-7">
      <div className="mx-auto max-w-[1440px] grid grid-cols-2 md:grid-cols-4 text-center text-[#F6F1EA]">

        {STATS.map((item, index) => (
          <div
            key={item.value}
            className="px-6 py-4 md:px-8 md:py-6 border-[#F6F1EA]/10
            md:border-r last:border-r-0 border-b md:border-b-0"
          >
            <div className="font-serif-display text-[1.4rem] md:text-[1.8rem] font-semibold tracking-[-0.02em]">
              {item.value}
            </div>

            <div className="mt-1 text-[9px] uppercase tracking-[0.24em] text-[#F6F1EA]/70">
              {item.label}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
