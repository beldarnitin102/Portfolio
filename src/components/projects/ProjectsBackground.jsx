"use client";

import { motion } from "framer-motion";

export default function ProjectsBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[#030712]" />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          -left-40
          top-40
          h-[520px]
          w-[520px]
          rounded-full
          border
          border-[#D4AF37]/10
        "
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          right-[-180px]
          bottom-[-180px]
          h-[650px]
          w-[650px]
          rounded-full
          border
          border-white/5
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-32
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#D4AF37]/10
          blur-[180px]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]
          bg-[size:80px_80px]
          opacity-30
        "
      />
    </>
  );
}