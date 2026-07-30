"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* Background Gradient */}

      <div
        className="
          absolute
          inset-0
          bg-background
        "
      />

      {/* Top Gold Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.14, 0.22, 0.14],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[-260px]
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-accent/15
          blur-[180px]
        "
      />

      {/* Right Olive Glow */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-180px]
          top-1/3
          h-[420px]
          w-[420px]
          rounded-full
          bg-olive/20
          blur-[140px]
        "
      />

      {/* Bottom Ambient Light */}

      <motion.div
        animate={{
          opacity: [0.05, 0.09, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-[-250px]
          left-1/2
          h-[650px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-white
          blur-[220px]
        "
      />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Vignette */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle,transparent_55%,rgba(0,0,0,.65))]
        "
      />
    </>
  );
}
