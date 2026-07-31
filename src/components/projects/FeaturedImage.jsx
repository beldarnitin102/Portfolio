"use client";

import { motion } from "framer-motion";

import LaptopMockup from "./LaptopMockup";

export default function FeaturedImage() {
  return (
    <div className="relative flex justify-center">

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
      >
        <LaptopMockup
          image="/projects/grievance.png"
        />
      </motion.div>

      <div className="absolute h-[350px] w-[350px] rounded-full bg-[#D4AF37]/15 blur-[120px]" />

    </div>
  );
}