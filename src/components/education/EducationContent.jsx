"use client";

import { motion } from "framer-motion";
import EducationTimeline from "./EducationTimeline";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function EducationContent() {
  return (
    <div
      className="
        grid
        items-center
        gap-20

        lg:grid-cols-[0.9fr_1.1fr]
      "
    >
      {/* Left Side */}

      <div>
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0}
          className="
            inline-flex
            rounded-full
            border
            border-accent/20
            bg-card/70
            px-5
            py-2
            text-sm
            text-accent
            backdrop-blur-xl
          "
        >
          Education Journey
        </motion.span>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.15}
          className="
            mt-8
            text-4xl
            font-bold

            md:text-5xl
          "
        >
          Learning Never
          <br />
          Stops.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.3}
          className="
            mt-8
            max-w-xl
            text-lg
            leading-8
            text-secondary
          "
        >
          Every stage of my education strengthened my curiosity,
          problem-solving mindset, and passion for technology.
          Today I combine engineering principles with modern
          software development and Artificial Intelligence.
        </motion.p>
      </div>

      {/* Right Side */}

      <EducationTimeline />
    </div>
  );
}