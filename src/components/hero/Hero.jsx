"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroSocial from "./HeroSocial";
import HeroScroll from "./HeroScroll";
import HeroImage from "./HeroImage";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        pt-20
        pb-16
        sm:pt-24
        lg:pt-28
        lg:pb-20
      "
    >
      <HeroBackground />

      <Container className="relative z-10 w-full">
        <div
          className="
            grid
            w-full
            items-center
            gap-8
            sm:gap-10
            lg:grid-cols-2
            lg:gap-14
            xl:gap-20
          "
        >
          {/* ================= LEFT / CONTENT ================= */}

          <div
            className="
              order-2
              flex
              w-full
              justify-center
              lg:order-1
              lg:justify-start
            "
          >
            <div
              className="
                flex
                w-full
                max-w-[740px]
                items-center
                gap-0
                xl:gap-16
                xl:-translate-x-10
              "
            >
              <HeroSocial />

              <div className="min-w-0 flex-1 text-center lg:text-left">
                <HeroContent />
              </div>
            </div>
          </div>

          {/* ================= VISUAL ================= */}

          <div
            className="
              order-1
              flex
              w-full
              justify-center
              lg:order-2
              lg:justify-end
            "
          >
            {/* Tablet / Mobile visual */}
            <div
              data-floating-slot="hero"
              className="
                invisible
                flex
                w-full
                justify-center
                lg:justify-end
                xl:hidden
              "
            >
              <HeroImage />
            </div>

            {/* Desktop space reserved for FloatingCharacter (xl only — must match xl:block in FloatingCharacter.jsx) */}
            <div
              aria-hidden="true"
              className="
                hidden
                xl:block
                xl:h-[650px]
                xl:w-[500px]
                shrink-0
              "
            />
          </div>
        </div>
      </Container>

      <HeroScroll />
    </section>
  );
}
