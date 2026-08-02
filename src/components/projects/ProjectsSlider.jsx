"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProjectCard from "./ProjectCard";
import projects from "@/constants/projects";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSlider() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  const [active, setActive] = useState(1);
  const activeRef = useRef(1);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const slider = sliderRef.current;
    if (!section || !slider) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".project-card");

      // initial state
      gsap.set(cards, { scale: 0.82, opacity: 0.45, y: 40 });
      gsap.set(cards[0], { scale: 1, opacity: 1, y: 0 });
      setActive(1);
      activeRef.current = 1;

      // only enable on desktop/tablet; completely disable on small screens
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": () => {
          const getDistance = () => {
            const firstCard = cards[0];
            const lastCard = cards[cards.length - 1];

            const firstCenter =
              firstCard.offsetLeft + firstCard.offsetWidth / 2;

            const lastCenter = lastCard.offsetLeft + lastCard.offsetWidth / 2;

            const viewportCenter = window.innerWidth / 2;

            return {
              start: viewportCenter - firstCenter,
              end: lastCenter - viewportCenter,
            };
          };
          const horizontalTween = gsap.fromTo(
            slider,
            {
              x: () => getDistance().start,
            },
            {
              x: () => -getDistance().end,
              ease: "none",
            },
          );

          const horizontalTrigger = ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: () => `+=${getDistance().end - getDistance().start}`,
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            animation: horizontalTween,
          });

          // per-card ScrollTriggers using containerAnimation to sync with horizontalTween
          cards.forEach((card, i) => {
            const img = card.querySelector(".project-image");
            const title = card.querySelector(".project-title");
            const desc = card.querySelector(".project-desc");
            const stack = card.querySelectorAll(".project-stack > *");
            const buttons = card.querySelector(".project-buttons");
            const bigNum = card.querySelector(".project-big-num");
            const glass = card.querySelector(".project-glass");

            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: card,
                containerAnimation: horizontalTween,
                start: "left center",
                end: "right center",
                scrub: true,
                onEnter() {
                  if (activeRef.current !== i + 1) {
                    setActive(i + 1);
                    activeRef.current = i + 1;
                  }
                },
                onEnterBack() {
                  if (activeRef.current !== i + 1) {
                    setActive(i + 1);
                    activeRef.current = i + 1;
                  }
                },
              },
            });

            tl.to(card, { scale: 1, opacity: 1, y: 0, ease: "power3.out" })
              .fromTo(img || {}, { y: -20 }, { y: 20, ease: "none" }, 0)
              .fromTo(
                bigNum || {},
                { y: 40, opacity: 0.25 },
                { y: -40, opacity: 0.02, ease: "power2.out" },
                0,
              )
              .fromTo(
                [title, desc, ...Array.from(stack || []), buttons],
                { y: 24, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.6,
                  stagger: 0.08,
                  ease: "power3.out",
                },
                0,
              )
              .to(
                glass || {},
                { opacity: 0, duration: 0.35, ease: "power3.out" },
                0,
              );
          });
        },

        "(max-width: 767px)": () => {
          // mobile: do nothing — let markup be stacked and scroll normally
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-screen
        overflow-hidden
      "
    >
      {/* Progress indicator */}
      <div className="absolute right-8 top-8 z-50">
        <div className="rounded-xl border border-white/6 bg-black/40 px-4 py-2 backdrop-blur-md text-sm text-white/70">
          <span className="font-semibold text-white">
            {String(active).padStart(2, "0")}
          </span>
          <span className="opacity-60">
            {" "}
            / {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="
          flex
          md:flex-row
          flex-col
          md:h-screen
          h-auto
          md:items-center
          items-start

          gap-20

      
          pl-6
          pr-6

          will-change-transform
        "
      >
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="
      project-card
      relative
      shrink-0

      w-[520px]
      min-w-[520px]
      max-w-[520px]
    "
          >
            <ProjectCard
              index={index + 1}
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
              github={project.github}
              live={project.live}
              offset={index % 2 === 0 ? "up" : "down"}
            />
          </div>
        ))}
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
