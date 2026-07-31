"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
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
            
            {/* LEFT SIDE */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start w-full">
              <div className="flex items-start gap-12 xl:gap-16 w-full max-w-[740px] xl:-translate-x-16">
                <HeroSocial />
                <div className="flex-1 text-center lg:text-left">
                  <HeroContent />
                </div>
              </div>
            </div>

            {/* RIGHT SIDE PLACEHOLDER */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end w-full">
              <div className="w-[500px] h-[650px] hidden lg:block xl:translate-x-8 xl:-translate-y-6" />
            </div>

          </div>
        </div>
      </Container>
      <HeroScroll />
    </section>
  );
}
