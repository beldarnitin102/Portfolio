"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import SkillsMarquee from "./SkillsMarquee";

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#030712]
        pt-48
        pb-40
        /* 
          THE COMPONENT CENTERING HUB:
          Added full width, flexbox directions, and alignment parameters. 
          This guarantees the root container canvas centers everything seamlessly!
        */
        w-full
        flex
        flex-col
        items-center
        justify-center
      "
    >
      {/* Container wrapper layer centered via inner flex alignments */}
      <Container className="w-full flex flex-col items-center justify-center relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mx-auto
            flex
            max-w-[900px]
            flex-col
            items-center
            text-center
            justify-center
            w-full
          "
        >
          {/* Centered Heading */}
          <h2
            className="
              mt-10
              text-4xl
              font-black
              leading-[1.08]
              text-white
              md:text-5xl
              tracking-tight
            "
          >
            Technologies I Work With
          </h2>

          {/* Description Paragraph: Fixed with mx-auto to guarantee horizontal centering */}
          <p
            className="
              mt-6
              max-w-[720px]
              text-lg
              leading-8
              text-white/60
              mx-auto
            "
          >
            Building responsive, scalable and modern user interfaces using the
            latest frontend technologies.
          </p>
        </motion.div>

      </Container>

      {/* Space before marquee */}
      <div className="h-12 w-full" />

      {/* Left Fade edge gradient border shadow overlay */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-40 bg-gradient-to-r from-[#030712] to-transparent" />

      {/* Right Fade edge gradient border shadow overlay */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-[#030712] to-transparent" />
      
      {/* 
        INFINITE MARQUEE COMPONENT WRAPPER:
        Forced full-width layout scaling parameters so the horizontal ticker 
        spans symmetrically right across the center field timeline of the webpage!
      */}
      <div className="w-full relative z-10 flex justify-center items-center">
        <SkillsMarquee />
      </div>
    </section>
  );
}
