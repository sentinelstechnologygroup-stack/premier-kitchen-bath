// src/components/SiteFooter.jsx
import React from "react";
import Link from "next/link";
import { ROUTES } from "@/components/utils/routes";

const NAV_LINKS = [
  { label: "Home", href: ROUTES.home },
  { label: "Kitchens", href: ROUTES.kitchens },
  { label: "Bathrooms", href: ROUTES.bathrooms },
  { label: "Portfolio", href: ROUTES.projects },
  { label: "Products", href: ROUTES.products },
  { label: "Showroom", href: ROUTES.showroom },
  { label: "Contact", href: ROUTES.contact },
];

const RESOURCE_LINKS = [
  { label: "Granite Guide", href: ROUTES.blog },
  { label: "Remodeling Calculator", href: ROUTES.blog },
  { label: "Blog", href: ROUTES.blog },
  { label: "Privacy Policy", href: ROUTES.privacy },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#12100F] text-[#F5F0EA]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-4 md:px-12 lg:px-20">
        <div>
          <div className="leading-none">
            <div className="font-serif-display text-[18px] font-semibold tracking-[0.08em]">
              PREMIER KITCHENS
            </div>

            <div className="mt-1 text-[9px] uppercase tracking-[0.34em] text-[#F5F0EA]/70">
              Kitchen &amp; Bath
            </div>
          </div>

          <p className="mt-5 max-w-[260px] text-[14px] leading-[1.8] text-[#F5F0EA]/70">
            Houston&apos;s trusted kitchen &amp; bath renovation specialists since
            1979.
          </p>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D8C6B6]">
            Navigate
          </div>

          <div className="mt-5 flex flex-col gap-3">
            {NAV_LINKS.filter(
              (link) => typeof link.href === "string" && link.href.length > 0
            ).map((link) => (
              <Link
                key={`nav-${link.label}-${link.href}`}
                href={link.href}
                className="text-sm text-[#F5F0EA]/70 transition hover:text-[#F5F0EA]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D8C6B6]">
            Resources
          </div>

          <div className="mt-5 flex flex-col gap-3">
            {RESOURCE_LINKS.filter(
              (link) => typeof link.href === "string" && link.href.length > 0
            ).map((link) => (
              <Link
                key={`resource-${link.label}-${link.href}`}
                href={link.href}
                className="text-sm text-[#F5F0EA]/70 transition hover:text-[#F5F0EA]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D8C6B6]">
            Contact
          </div>

          <div className="mt-5 space-y-3 text-sm leading-[1.8] text-[#F5F0EA]/70">
            <p>
              1918 Baker Rd.
              <br />
              Houston, TX 77074
            </p>

            <p>
              <a
                href="tel:17135206570"
                className="transition hover:text-[#F5F0EA]"
              >
                (713) 520-6570
              </a>
              <br />
              <a
                href="mailto:info@premierkitchens.us"
                className="transition hover:text-[#F5F0EA]"
              >
                info@premierkitchens.us
              </a>
            </p>

            <p>Saturday: 9am – 1pm</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] border-t border-[#F5F0EA]/10 px-6 md:px-12 lg:px-20" />

      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-6 text-[12px] text-[#F5F0EA]/60 md:flex-row md:items-center md:justify-between md:px-12 lg:px-20">
        <div>© {new Date().getFullYear()} Premier Kitchens. All rights reserved.</div>

        <div className="text-[10px] uppercase tracking-[0.22em] text-[#F5F0EA]/40">
          Houston, Texas • Since 1979
        </div>
      </div>
    </footer>
  );
}
