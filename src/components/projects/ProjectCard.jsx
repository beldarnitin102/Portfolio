"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
} from "lucide-react";

import BrowserMockup from "./BrowserMockup";
import TechBadge from "./TechBadge";

export default function ProjectCard({
  title,
  image,
  description,
  stack = [],
}) {
  return (
    <motion.article
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500

        hover:border-[#D4AF37]/25
        hover:shadow-[0_25px_80px_rgba(0,0,0,.45)]
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,.08),transparent_45%)]
        "
      />

      {/* Screenshot */}

      <BrowserMockup image={image} />

      {/* Content */}

      <div className="relative p-7">

        <div className="flex items-start justify-between gap-4">

          <h3
            className="
              text-2xl
              font-bold
              text-white
              transition-colors
              duration-300
              group-hover:text-[#E6C15A]
            "
          >
            {title}
          </h3>

          <ArrowUpRight
            size={20}
            className="
              mt-1
              text-white/40
              transition-all
              duration-300

              group-hover:translate-x-1
              group-hover:-translate-y-1
              group-hover:text-[#E6C15A]
            "
          />

        </div>

        <p
          className="
            mt-4
            text-[15px]
            leading-7
            text-white/60
          "
        >
          {description}
        </p>

        <div
          className="
            mt-7
            flex
            flex-wrap
            gap-2
          "
        >
          {stack.map((item) => (
            <TechBadge
              key={item}
              text={item}
            />
          ))}
        </div>

      </div>
    </motion.article>
  );
}