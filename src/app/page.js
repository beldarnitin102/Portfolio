// src/app/page.js
"use client";

import { useEffect, useState } from "react";

import Loader from "@/components/loader/Loader";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import FloatingCharacter from "@/components/floating/FloatingCharacter";
import Education from "@/components/education/Education";
import Projects from "@/components/projects/Projects";

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

          {/* 
        THE FIX: We wrap Hero, About, and your Character in an absolute track frame. 
        Once you scroll past this wrapper zone toward Education, the character is 
        forced to physically scroll away with the top sections instead of sticking!
      */}
          <div className="relative w-full">
            <FloatingCharacter />
            <Hero />
            <About />
          </div>

          {/* Education safely renders outside the tracking zone bounds */}
          <Education />
          <Projects />
        </main>
      )}
    </>
  );
}
