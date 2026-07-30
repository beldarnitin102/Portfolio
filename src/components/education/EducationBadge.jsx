"use client";

import { motion } from "framer-motion";

export default function EducationBadge({
  value,
  label,
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.03,
      }}
      className="
        rounded-2xl
        border
        border-accent/15
        bg-card/60
        px-6
        py-5
        text-center
        backdrop-blur-xl
      "
    >
      <h4
        className="
          text-3xl
          font-bold
          text-accent
        "
      >
        {value}
      </h4>

      <p
        className="
          mt-2
          text-sm
          text-secondary
        "
      >
        {label}
      </p>
    </motion.div>
  );
}