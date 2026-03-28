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
    : "fixed inset-x-0 top-0 z-[1000] border-b border-white/10 bg-[#F6F1EA]/96 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.08)]";

  const onScheduleClick = (where) => {
    trackCTA("schedule-consultation", where, {
      page: currentPageName || "unknown",
    });
    trackLeadIntent("contact_open", {
      source: where,
      page: currentPageName || "unknown",
    });
  };

  const desktopNavClass = heroTop
    ? "text-white hover:text-white"
    : "text-[#1E1A17] hover:text-[#7A6552]";

  const desktopPhoneClass = heroTop
    ? "text-white"
    : "text-[#1E1A17]";

  const heroTextStyle = heroTop
    ? {
        textShadow:
          "0 2px 8px rgba(0,0,0,0.65), 0 1px 2px rgba(0,0,0,0.85)",
      }
    : undefined;

  return (
    <header className={shellClass}>
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:h-[76px] md:px-12 lg:px-20">
        {/* LOGO */}
        <Link href={ROUTES.home} className="flex items-center">
          <img
            src="/logo-premier.png"
            alt="Premier Kitchen & Bath"
            className="h-[60px] w-auto object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] md:h-[68px]"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-[11px] font-bold uppercase tracking-[0.24em] transition-colors duration-300 ${desktopNavClass}`}
              style={heroTextStyle}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:12815583700"
            className={`text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 ${desktopPhoneClass}`}
            style={heroTextStyle}
          >
            (281) 558-3700
          </a>

          <Link
            href={ROUTES.consultation}
            onClick={() => onScheduleClick("Header CTA")}
            className={`inline-flex h-12 items-center gap-2 rounded-full px-6 text-[11px] font-bold uppercase tracking-[0.18em] transition ${
              heroTop
                ? "border border-white/22 bg-white/14 text-white backdrop-blur-md hover:bg-white/20"
                : "bg-[#1E1A17] text-[#F6F1EA] hover:bg-[#322A24]"
            }`}
          >
            Consultation
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* MOBILE MENU */}
        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden ${
            heroTop
              ? "border-white/20 bg-white/12 text-white"
              : "border-[#1E1A17]/10 bg-[#F6F1EA] text-[#1E1A17]"
          }`}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden">
          <div className="ml-auto w-1/2 min-w-[240px] border-l border-t border-none bg-[#fffff]/50 shadow-[-12px_12px_30px_rgba(0,0,0,0.1)]">
            <div className="px-5 py-6">
              <div className="flex flex-col gap-6">
                {NAV.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[12px] font-bold uppercase tracking-[0.28em] text-[#070504]"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="border-t pt-5">
                  <a
                    href="tel:12815583700"
                    className="block text-[12px] font-bold uppercase tracking-[0.18em]"
                  >
                    (281) 558-3700
                  </a>

                  <Link
                    href={ROUTES.consultation}
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1E1A17] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#F6F1EA]"
                  >
                    Consultation
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}