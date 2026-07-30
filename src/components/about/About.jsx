"use client";

import Container from "../ui/Container";
import AboutBackground from "./AboutBackground";
import AboutContent from "./AboutContent";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28 lg:py-36 w-full flex justify-center">
      <AboutBackground />

      <Container className="relative z-10 w-full flex flex-col justify-center">
        <div className="w-full max-w-[1360px] mx-auto xl:-translate-x-16">
          <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2 grid-cols-1 w-full">
            
            {/* LEFT SIDE PLACEHOLDER BOX */}
            <div className="flex justify-center lg:justify-start w-full">
              <div className="w-[420px] h-[420px] hidden lg:block" />
            </div>

            {/* RIGHT SIDE */}
            <AboutContent />

          </div>
        </div>
      </Container>
    </section>
  );
}
