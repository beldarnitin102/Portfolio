"use client";

import { motion } from "framer-motion";

import Container from "../ui/Container";
import ProjectsBackground from "./ProjectsBackground";
import ProjectsSlider from "./ProjectsSlider";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-[#030712]
      "
    >
      <ProjectsBackground />

      {/* ================= HEADER ================= */}

      <Container className="relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="
            mx-auto
            flex
            min-h-[42vh]
            max-w-3xl
            flex-col
            items-center
            justify-center
            pt-32
            text-center

            lg:pt-40
          "
        >
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#D4AF37]/20
              bg-[#D4AF37]/10
              px-5
              py-2

              text-xs
              font-semibold
              uppercase
              tracking-[0.32em]
              text-[#D4AF37]
            "
          >
            Selected Work
          </span>

          <h2
            className="
              mt-8
              text-5xl
              font-black
              leading-[1.05]
              tracking-tight
              text-white

              md:text-6xl
            "
          >
            Featured Projects
          </h2>

          <p
            className="
              mt-7
              max-w-2xl
              text-lg
              leading-8
              text-white/60
            "
          >
            Production-ready applications crafted with scalable architecture,
            premium interfaces and AI-powered experiences.
          </p>
        </motion.div>
      </Container>

      {/* ================= HORIZONTAL PROJECTS ================= */}

      <div className="relative z-10 mt-24 lg:mt-28">
        <ProjectsSlider />
      </div>
    </section>
  );
}