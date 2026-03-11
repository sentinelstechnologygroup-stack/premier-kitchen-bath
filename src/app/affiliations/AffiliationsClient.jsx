"use client";

import Head from "next/head";
import Component from "@/components/pages/Affiliations.jsx";

export default function Page() {
  return (
    <>
      <Head>
        <title>Affiliations | Premier Kitchens & Bath</title>
        <meta
          name="description"
          content="Professional affiliations and recognition for Premier Kitchens & Bath and our remodeling designs."
        />
        <link rel="canonical" href="https://PremierKitchens.us/affiliations" />
      </Head>
      <Component />
    </>
  );
}