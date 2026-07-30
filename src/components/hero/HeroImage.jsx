"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <div
      className="
      relative
      flex
      items-center
      justify-center

      w-full
      max-w-[520px]

      aspect-[4/5]
    "
    >
      {/* Glow */}

      <div
        className="
        absolute
        inset-0

        rounded-full

        bg-accent/10

        blur-[110px]

        scale-90
      "
      />

      {/* Rotating Ring */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-6

          rounded-full
          border
          border-accent/20
        "
      />

      {/* Photo */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative

          w-[90%]
          h-auto

          overflow-hidden

          rounded-[32px]

          border
          border-border

          bg-card

          shadow-2xl
        "
      >
        <Image
          src="/images/nitin.png"
          alt="Nitin"
          width={468}
          height={585}
          priority
          sizes="(max-width:768px) 90vw, 500px"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Floating Dot */}

      <motion.div
        animate={{
          y: [0, -12, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          right-2
          top-8

          h-4
          w-4

          rounded-full
          bg-accent
        "
      />

      {/* Bottom Ring */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute

          bottom-4
          left-4

          h-16
          w-16

          rounded-full

          border
          border-accent/30
        "
      />
    </div>
  );
}
