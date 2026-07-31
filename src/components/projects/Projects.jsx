"use client";

import { motion } from "framer-motion";
import ProjectsBackground from "./ProjectsBackground";
import FeaturedProject from "./FeaturedProject";
import ProjectsGrid from "./ProjectsGrid";
import Container from "../ui/Container";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        py-32
        lg:py-36
        w-full
        flex
        justify-center
      "
    >
      <ProjectsBackground />

      <Container className="relative z-10 w-full flex flex-col justify-center">
        
        {/* 
          REMOVED xl:-translate-x-16 from the main row track container.
          This ensures the grid space centers perfectly on your monitor screen canvas!
        */}
        <div className="w-full max-w-[1360px] mx-auto">
          <div className="flex flex-col gap-24 lg:gap-32 w-full">
            
            {/* Header Text Block */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              /* 
                THE CENTER ALIGNMENT FIX:
                Changed text-left to text-center, added mx-auto to center the wrapper box,
                and applied flex-col items-center so the pill tag sits directly over the title!
              */
              className="text-center flex flex-col items-center mx-auto max-w-3xl"
            >
              <span
                className="
                  inline-block
                  rounded-full
                  border
                  border-[#D4AF37]/20
                  bg-[#D4AF37]/10
                  px-4
                  py-1.5
                  text-xs
                  font-medium
                  tracking-wider
                  text-[#D4AF37]
                  uppercase
                "
              >
                Portfolio
              </span>

              <h2
                className="
                  mt-6
                  text-4xl
                  font-bold
                  tracking-tight
                  text-white
                  sm:text-5xl
                  md:text-6xl
                "
              >
                Featured Projects
              </h2>

              <p
                className="
                  mt-4
                  text-base
                  leading-7
                  text-white/60
                "
              >
                Production-ready applications built with scalable architecture,
                modern UI and AI-powered experiences.
              </p>
            </motion.div>

            {/* FEATURED PROJECTS DASHBOARD CARD */}
            <div className="w-full block relative">
              <FeaturedProject />
            </div>

            {/* SECONDARY PROJECTS GRID */}
            <div className="w-full block relative">
              <ProjectsGrid />
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
