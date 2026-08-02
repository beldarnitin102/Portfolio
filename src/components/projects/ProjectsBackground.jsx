"use client";

import { motion } from "framer-motion";

export default function ProjectsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base background */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Left gold glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 12,
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
          bg-[#D4AF37]/15
          blur-[180px]
        "
      />

      {/* Right blue glow */}
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.16, 0.26, 0.16],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-56
          bottom-0
          h-[640px]
          w-[640px]
          rounded-full
          bg-sky-500/10
          blur-[220px]
        "
      />

      {/* Center radial glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[900px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.02]
          blur-[220px]
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      {/* Noise */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          mix-blend-soft-light
          bg-[url('/images/noise.png')]
          bg-repeat
        "
      />

      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#030712] to-transparent" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#030712] to-transparent" />
    </div>
  );
}