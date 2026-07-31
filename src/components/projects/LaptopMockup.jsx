"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LaptopMockup({ image }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{ y: -6 }}
      className="relative w-full max-w-[700px] mx-auto group"
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          rounded-[42px]
          bg-[#D4AF37]/10
          blur-[90px]
          opacity-0
          transition
          duration-700
          group-hover:opacity-100
        "
      />

      {/* Shadow */}

      <div
        className="
          absolute
          left-1/2
          top-[98%]
          h-8
          w-[70%]
          -translate-x-1/2
          rounded-full
          bg-black/70
          blur-3xl
        "
      />

      {/* Laptop */}

      <div
        className="
          relative
          rounded-[28px]
          border
          border-white/10
          bg-[#141922]
          p-[10px]
          shadow-[0_35px_90px_rgba(0,0,0,.55)]
        "
      >
        {/* Camera */}

        <div className="absolute left-1/2 top-3 z-30 -translate-x-1/2 h-2 w-2 rounded-full bg-black">
          <div className="absolute inset-[2px] rounded-full bg-white/20" />
        </div>

        {/* Screen */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[18px]
            border
            border-white/10
            bg-[#090B10]
            aspect-[16/10]
          "
        >
          <Image
            src={image}
            alt="Project Preview"
            fill
            priority
            className="
              object-cover
object-top
              bg-[#F8F8F8]
              transition-transform
              duration-700
              group-hover:scale-[1.015]
            "
          />

          {/* Reflection */}

          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(120deg,rgba(255,255,255,.14),transparent_34%,transparent)]
            "
          />
        </div>
      </div>

      {/* Base */}

      <div className="relative mx-auto -mt-[2px] w-[94%]">
        <div
          className="
            h-[15px]
            rounded-b-[26px]
            border-x
            border-b
            border-white/10
            bg-gradient-to-b
            from-[#566170]
            via-[#323A46]
            to-[#191F28]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[4px]
            -translate-x-1/2
            h-[4px]
            w-24
            rounded-full
            bg-black/30
          "
        />
      </div>
    </motion.div>
  );
}
