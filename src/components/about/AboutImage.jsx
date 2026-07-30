"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutImage() {
  return (
    <div
      className="
        relative
        mx-auto

        w-full
        max-w-[520px]
      "
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-0
          rounded-full
          bg-[#D4AF37]/20
          blur-[120px]
        "
      />

      {/* Main Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        whileHover={{
          y: -8,
        }}
        className="
          relative
          overflow-hidden
          rounded-[36px]

          border
          border-white/10

          bg-white/5
          backdrop-blur-xl

          shadow-[0_25px_80px_rgba(0,0,0,0.45)]
        "
      >
        <Image
          src="/images/about.png"
          alt="About"
          width={600}
          height={750}
          className="
            h-auto
            w-full
            object-cover
          "
        />
      </motion.div>

      {/* Experience Card */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          -left-8
          top-12

          rounded-2xl

          border
          border-[#D4AF37]/20

          bg-[#09090B]/90
          backdrop-blur-xl

          px-6
          py-5
        "
      >
        <h3
          className="
            text-3xl
            font-bold
            text-[#D4AF37]
          "
        >
          2+
        </h3>

        <p
          className="
            mt-1
            text-sm
            text-white/70
          "
        >
          Years Learning
        </p>
      </motion.div>

      {/* Tech Badge */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          -right-8
          bottom-14

          rounded-full

          border
          border-[#D4AF37]/20

          bg-[#09090B]/90
          backdrop-blur-xl

          px-6
          py-3
        "
      >
        <span
          className="
            text-sm
            font-medium
            tracking-wide
            text-white
          "
        >
          MERN • AI • Next.js
        </span>
      </motion.div>
    </div>
  );
}