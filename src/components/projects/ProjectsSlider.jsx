"use client";

import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProjectCard from "./ProjectCard";
import projects from "@/constants/projects";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSlider() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const slider = sliderRef.current;

      if (!section || !slider) return;

      const cards = gsap.utils.toArray(".project-card");

      const getDistance = () =>
        slider.scrollWidth - window.innerWidth;

      // ==========================
      // Initial State
      // ==========================

      gsap.set(cards, {
        scale: 0.88,
        opacity: 0.45,
        y: 40,
      });

      // ==========================
      // Horizontal Scroll
      // ==========================

      const horizontalTween = gsap.to(slider, {
        x: () => -getDistance(),

        ease: "none",

        scrollTrigger: {
          trigger: section,

          start: "top top",

          end: () => `+=${getDistance()}`,

          pin: true,

          scrub: 1.2,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      // ==========================
      // Card Animation
      // ==========================

      cards.forEach((card) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: card,

            containerAnimation: horizontalTween,

            start: "center 65%",

            end: "center center",

            scrub: true,
          },
        })

        .to(card, {
          scale: 1,
          opacity: 1,
          y: 0,
          ease: "power3.out",
        })

        .to(
          card,
          {
            scale: 0.88,
            opacity: 0.45,
            y: 40,
            ease: "power3.out",
          },
          1
        );
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-[400vh]
        overflow-hidden
      "
    >
      <div
        ref={sliderRef}
        className="
          flex
          h-screen
          items-center

          gap-28

          pl-[40vw]
          pr-[40vw]

          will-change-transform
        "
      >        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`
              project-card
              shrink-0
              w-[520px]

              ${index % 2 === 0 ? "-translate-y-8" : "translate-y-8"}
            `}
          >
            <ProjectCard
              index={index + 1}
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
              github={project.github}
              live={project.live}
            />
          </div>
        ))}

        {/* Ending Space */}
        <div className="w-[40vw] shrink-0" />
      </div>

      {/* ================= Scroll Hint ================= */}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1.2,
        }}
        className="
          pointer-events-none
          absolute
          bottom-10
          left-1/2
          z-40
          -translate-x-1/2
        "
      >
        <div
          className="
            flex
            items-center
            gap-3

            rounded-full

            border
            border-white/10

            bg-white/5

            px-6
            py-3

            backdrop-blur-xl
          "
        >
          <div
            className="
              h-2
              w-2
              rounded-full
              bg-[#D4AF37]
              animate-pulse
            "
          />

          <span
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-white/60
            "
          >
            Scroll
          </span>

          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#D4AF37]"
          >
            <path d="M5 12h14" />
            <path d="M13 5l7 7-7 7" />
          </svg>
        </div>
      </motion.div>

      {/* Left Fade */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-30
          h-full
          w-48
          bg-gradient-to-r
          from-[#030712]
          to-transparent
        "
      />

      {/* Right Fade */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-30
          h-full
          w-48
          bg-gradient-to-l
          from-[#030712]
          to-transparent
        "
      />
    </section>
  );
}