"use client";

import AboutBackground from "./AboutBackground";
import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import Container from "../ui/Container";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        flex
        w-full
        justify-center
        overflow-hidden
        py-28
        lg:py-36
      "
    >
      <AboutBackground />

      <Container className="relative z-10 w-full">
        <div
          className="
            w-full
            max-w-[1360px]
            mx-auto
            xl:-translate-x-16
          "
        >
          <div
            className="
              grid
              w-full
              items-center
              gap-14
              lg:grid-cols-2
              lg:gap-16
              xl:gap-20
            "
          >
            {/* ================= LEFT VISUAL ================= */}

            <div
              className="
                order-1
                flex
                w-full
                justify-center
                lg:justify-start
              "
            >
              {/* The visible shared image is supplied by FloatingCharacter. */}
              <div data-floating-slot="about" className="invisible w-full xl:hidden">
                <AboutImage />
              </div>

              {/* Desktop space for FloatingCharacter */}
              <div
                aria-hidden="true"
                className="
                  hidden
                  h-[420px]
                  w-[420px]
                  shrink-0
                  xl:block
                "
              />
            </div>

            {/* ================= RIGHT CONTENT ================= */}

            <div className="order-2 w-full">
              <AboutContent />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
