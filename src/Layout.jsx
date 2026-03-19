// src/Layout.jsx
"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { trackScrollDepth, trackPageView, startEngagementTimer } from "@/lib/intelligence";

export default function Layout({ children, currentPageName = "unknown" }) {
  const pathname = usePathname();
  const HEADER_OFFSET = "pt-20 md:pt-24";

  const [hasHeroClass, setHasHeroClass] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const read = () => {
      setHasHeroClass(document.body.classList.contains("premier-has-hero"));
    };

    read();

    const Obs = typeof MutationObserver !== "undefined" ? MutationObserver : null;
    if (!Obs) return;

    const observer = new Obs(read);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, [pathname]);

  const heroUnderHeader = hasHeroClass || pathname === "/";

  useEffect(() => {
    trackPageView(pathname);
    return startEngagementTimer(pathname);
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        const denom = document.body.scrollHeight - window.innerHeight;
        if (denom <= 0) return;
        const depth = (window.scrollY / denom) * 100;
        trackScrollDepth(depth);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F3EEE7]">
      <SiteHeader currentPageName={currentPageName} heroUnderHeader={heroUnderHeader} />
      <div className={heroUnderHeader ? "" : HEADER_OFFSET}>{children}</div>
      <SiteFooter />
    </div>
  );
}