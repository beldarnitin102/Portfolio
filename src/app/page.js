// src/app/page.js
"use client";

import { useEffect, useState } from "react";

import Loader from "@/components/loader/Loader";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        /* Reverted back to your exact original background setup */
        <main className="relative min-h-screen bg-[#030712]">
          <Navbar />

          {/* Hero Section */}
          <Hero />
        </main>
      )}
    </>
  );
}
