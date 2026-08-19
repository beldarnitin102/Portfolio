"use client";

import { useEffect, useState } from "react";

import Loader from "@/components/loader/Loader";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import FloatingCharacter from "@/components/floating/FloatingCharacter";
import Education from "@/components/education/Education";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";

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
        <main className="relative min-h-screen bg-[#030712]">
          <Navbar />

          <div className="relative w-full">
            <FloatingCharacter />
            <Hero />
            <About />
          </div>

          <Education />
          <Projects />
          <Skills />
          <Contact />
        </main>
      )}
    </>
  );
}