// src/components/hero/Hero.jsx
"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroSocial from "./HeroSocial";
import HeroScroll from "./HeroScroll";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center justify-center pt-24 lg:pt-28">
      <HeroBackground />

      <Container className="relative z-10 w-full flex flex-col justify-center">
        <div className="mx-auto w-full">
          <div className="min-h-[calc(100vh-120px)] grid items-center gap-10 lg:gap-14 xl:gap-20 lg:grid-cols-2 grid-cols-1 justify-center">
            
            {/* ================= LEFT SIDE LAYOUT ================= */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start w-full">
              
              {/* 
                UPDATED LINE BELOW: 
                - Increased gap from gap-8 to gap-16 (adds more room between icons and text).
                - Added -ml-6 to -ml-12 on xl screens to shift the social track slightly to the left.
              */}
              <div className="flex items-start gap-12 xl:gap-16 w-full max-w-[660px] xl:-ml-10">
                
                {/* Social icons */}
                <HeroSocial />

                {/* Text blocks */}
                <div className="flex-1 text-center lg:text-left">
                  <HeroContent />
                </div>
              </div>

            </div>

            {/* ================= RIGHT SIDE LAYOUT ================= */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end w-full">
              <HeroImage />
            </div>

          </div>
        </div>
      </Container>

      <HeroScroll />
    </section>
  );
}
