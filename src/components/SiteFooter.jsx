"use client";

// src/components/SiteFooter.jsx
import React from "react";
import Link from "next/link";
import { ROUTES } from "@/components/utils/routes";

export default function SiteFooter() {
  return (
    <footer className="bg-[#1F2E23] text-[#F5F0EA] relative overflow-hidden">
      <div className="h-px bg-[#F5F0EA]/12" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="mb-7">
              <span className="font-serif-display text-4xl font-light tracking-tight">
                Premier
              </span>
              <span className="block text-[10px] tracking-[0.35em] uppercase font-sans-clean font-medium mt-1 text-[#F5F0EA]/55">
                Land Design
              </span>
            </div>

            <p className="text-sm leading-relaxed text-[#F5F0EA]/55 font-sans-clean max-w-sm">
            Custom kitchen, bath, cabinetry, countertop, and remodeling
            solutions delivered with thoughtful design, premium materials, and a
            seasoned Houston team.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] tracking-[0.32em] uppercase font-sans-clean font-semibold text-[#F5F0EA]/40 mb-6">
              Navigate
            </h4>

            <div className="flex flex-col gap-3">
              {[
                { label: "Home", href: ROUTES.home },
                { label: "About", href: ROUTES.about },
                { label: "Design", href: ROUTES.design },
                { label: "Construction", href: ROUTES.construction },
                { label: "Projects", href: ROUTES.projects },
                { label: "Contact", href: ROUTES.contact },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-sans-clean text-[#F5F0EA]/70 hover:text-[#F5F0EA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F5F0EA]/20 rounded-sm w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] tracking-[0.32em] uppercase font-sans-clean font-semibold text-[#F5F0EA]/40 mb-6">
              Services
            </h4>

            <div className="flex flex-col gap-3 text-sm font-sans-clean text-[#F5F0EA]/70">
              <span>Landscape Architecture</span>
              <span>Landscape Construction</span>
              <span>Land Planning</span>
              <span>Site Analysis</span>
              <span>Hardscape Design</span>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] tracking-[0.32em] uppercase font-sans-clean font-semibold text-[#F5F0EA]/40 mb-6">
              Contact
            </h4>

            <div className="flex flex-col gap-4 text-sm font-sans-clean text-[#F5F0EA]/70">
              <div>
                <div className="text-[#F5F0EA]/40 text-[11px] mb-1">Phone</div>
                <a
                  href="tel:2812592610"
                  className="hover:text-[#F5F0EA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F5F0EA]/20 rounded-sm"
                >
                  (281)-558-3700
                </a>
              </div>

              <div>
                <div className="text-[#F5F0EA]/40 text-[11px] mb-1">Address</div>
                <div className="leading-relaxed">
                  1918 Baker Rd
                  <br />
                  Houston, TX 77074
                </div>
              </div>

              <div>
                <div className="text-[#F5F0EA]/40 text-[11px] mb-1">Email</div>
                <a
                  href="mailto: Info@PremierKitchens.us"
                  className="hover:text-[#F5F0EA] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F5F0EA]/20 rounded-sm"
                >
                   Info@PremierKitchens.us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-14 pt-7 border-t border-[#F5F0EA]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-sans-clean text-[#F5F0EA]/35">
            © {new Date().getFullYear()} Premier Kitchens & Bath All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            <a
              href="https://www.houzz.com/professionals/kitchen-and-bath-remodelers/premier-kitchen-and-bath-pfvwus-pf~1829338305"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.15em] uppercase font-sans-clean text-[#F5F0EA]/35 hover:text-[#F5F0EA]/75 transition-colors"
            >
              Houzz
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.15em] uppercase font-sans-clean text-[#F5F0EA]/35 hover:text-[#F5F0EA]/75 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/PremierKitchenAndBath"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.15em] uppercase font-sans-clean text-[#F5F0EA]/35 hover:text-[#F5F0EA]/75 transition-colors"
            >
              Facebook
            </a>
          </div>

          <div className="text-xs font-sans-clean text-[#F5F0EA]/30 text-right">
            Custom Build By:{" "}
            <span className="tracking-[0.15em] uppercase text-[#F5F0EA]/60">
              Big Boom Hosting
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
