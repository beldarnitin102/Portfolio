"use client";

import { motion } from "framer-motion";

export default function AboutBackground() {
  return (
    <>
      {/* Large Gold Glow */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.14, 0.22, 0.14],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-44
          top-20

          h-[520px]
          w-[520px]

          rounded-full
          bg-[#D4AF37]/12
          blur-[150px]
        "
      />

      {/* Olive Glow */}

      <motion.div
        animate={{
          scale: [1.05, 1.18, 1.05],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-0
          bottom-0

          h-[420px]
          w-[420px]

          rounded-full
          bg-[#708A58]/12
          blur-[140px]
        "
      />

      {/* Grid Pattern */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.035]

          [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* Top Divider */}

      <div
        className="
          absolute
          top-0
          left-1/2
          h-px
          w-[75%]
          -translate-x-1/2

          bg-gradient-to-r
          from-transparent
          via-[#D4AF37]/30
          to-transparent
        "
      />
    </>
  );
}