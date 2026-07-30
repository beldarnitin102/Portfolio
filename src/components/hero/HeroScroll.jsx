"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroScroll() {
  return (
    <motion.a
      href="#about"
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 1.4,
        duration: 0.7,
      }}
      className="
        hidden
        lg:flex

        absolute

        bottom-8
        left-1/2
        -translate-x-1/2

        z-20

        flex-col
        items-center
        gap-3
      "
    >
      <span
        className="
          text-[11px]
          uppercase

          tracking-[0.45em]

          text-secondary
        "
      >
        Scroll
      </span>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
          ease: "easeInOut",
        }}
        className="
          flex
          h-12
          w-7

          items-start
          justify-center

          rounded-full

          border
          border-border
        "
      >
        <motion.div
          animate={{
            y: [4, 18, 4],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
          }}
          className="
            mt-2

            h-2
            w-2

            rounded-full

            bg-accent
          "
        />
      </motion.div>

      <ChevronDown
        size={18}
        className="text-accent/80"
      />
    </motion.a>
  );
}