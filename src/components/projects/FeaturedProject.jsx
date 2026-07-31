"use client";

import { motion } from "framer-motion";

import FeaturedContent from "./FeaturedContent";
import LaptopMockup from "./LaptopMockup";

export default function FeaturedProject() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-white/10
        bg-[#0F1724]/70
        backdrop-blur-2xl
      "
    >
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#D4AF37]/8 blur-[150px]" />

        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-500/5 blur-[160px]" />

        <div
          className="
            absolute
            inset-0
            opacity-20
            bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]
            bg-[size:48px_48px]
          "
        />

      </div>

      {/* Layout */}

      <div
        className="
          relative
          z-10

          grid
          items-center

          gap-10

          px-10
          py-10

          lg:grid-cols-[1.05fr_1.2fr]

          xl:px-14
          xl:py-12
        "
      >

        {/* Left */}

        <div
          className="
            max-w-[560px]
            w-full
          "
        >
          <FeaturedContent />
        </div>

        {/* Right */}

        <div
          className="
            flex
            items-center
            justify-center
            lg:justify-end
          "
        >
          <LaptopMockup image="/projects/grievance.png" />
        </div>

      </div>
    </motion.section>
  );
}