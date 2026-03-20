// src/components/SiteHeader.jsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV, ROUTES } from "./utils/routes";
import { trackCTA, trackLeadIntent } from "@/lib/intelligence";

export default function SiteHeader({ currentPageName }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hasHeroUnderHeader, setHasHeroUnderHeader] = useState(false);
  const [isHomeHero, setIsHomeHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const syncBodyState = () => {
      if (typeof document === "undefined") return;

      const body = document.body;
      setHasHeroUnderHeader(body.classList.contains("premier-has-hero"));
      setIsHomeHero(body.classList.contains("premier-home-hero"));
    };

    syncBodyState();

    const observer = new MutationObserver(syncBodyState);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [pathname]);

  const heroTop = useMemo(
    () => hasHeroUnderHeader && !scrolled && !mobileOpen,
    [hasHeroUnderHeader, scrolled, mobileOpen]
  );

  const shellClass = heroTop
    ? `fixed inset-x-0 top-0 z-[1000] border-b border-white/12 ${
        isHomeHero ? "bg-[rgba(10,9,8,0.18)]" : "bg-[rgba(10,9,8,0.30)]"
      } backdrop-blur-md`
    : "fixed inset-x-0 top-0 z-[1000] border-b border-[#1E1A17]/10 bg-[#F6F1EA]/96 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.05)]";

  const textClass = heroTop ? "text-white" : "text-[#1E1A17]";
  const navClass = heroTop
    ? "text-white/92 hover:text-white"
    : "text-[#1E1A17] hover:text-[#7A6552]";

  const onScheduleClick = (where) => {
    trackCTA("schedule-consultation", where, {
      page: currentPageName || "unknown",
    });
    trackLeadIntent("contact_open", {
      source: where,
      page: currentPageName || "unknown",
    });
  };

  return (
    <header className={shellClass}>
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:h-[76px] md:px-12 lg:px-20">
        <Link href={ROUTES.home} className={`leading-none ${textClass}`}>
          <div className="font-serif-display text-[15px] font-semibold tracking-[0.08em] [text-shadow:0_2px_12px_rgba(0,0,0,0.35)] md:text-[18px]">
            PREMIER KITCHEN &amp; BATH
          </div>
          <div className="mt-1 text-[8px] uppercase tracking-[0.30em] opacity-80 [text-shadow:0_2px_10px_rgba(0,0,0,0.3)] md:text-[9px] md:tracking-[0.34em]">
            HOUSTON REMODELING SINCE 1979
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors [text-shadow:0_2px_10px_rgba(0,0,0,0.28)] ${navClass}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:12815583700"
            className={`text-[11px] font-semibold uppercase tracking-[0.18em] [text-shadow:0_2px_10px_rgba(0,0,0,0.28)] ${textClass}`}
          >
            (281) 558-3700
          </a>

          <Link
            href={ROUTES.consultation}
            onClick={() => onScheduleClick("Header CTA")}
            className={`inline-flex h-12 items-center gap-2 rounded-full px-6 text-[11px] font-semibold uppercase tracking-[0.18em] transition ${
              heroTop
                ? "border border-white/22 bg-white/14 text-white backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.24)] hover:bg-white/20"
                : "bg-[#1E1A17] text-[#F6F1EA] hover:bg-[#322A24]"
            }`}
          >
            Consultation
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden ${
            heroTop
              ? "border-white/20 bg-white/12 text-white backdrop-blur-sm"
              : "border-[#1E1A17]/10 bg-[#F6F1EA] text-[#1E1A17]"
          }`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-[#1E1A17]/10 bg-[#F6F1EA] lg:hidden">
          <div className="mx-auto max-w-[1440px] px-5 py-6 md:px-12">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-5">
                {NAV.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#1E1A17]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="border-t border-[#1E1A17]/10 pt-5">
                <a
                  href="tel:12815583700"
                  className="block text-[12px] font-semibold uppercase tracking-[0.18em] text-[#1E1A17]"
                >
                  (281) 558-3700
                </a>

                <Link
                  href={ROUTES.consultation}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1E1A17] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F6F1EA]"
                  onClick={() => onScheduleClick("Mobile Header CTA")}
                >
                  Consultation
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}