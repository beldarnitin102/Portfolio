"use client";

import { motion } from "framer-motion";
/* 
  FIX 1: Removed 'Github' from the lucide-react import parameters 
  to stop the compilation crash immediately.
*/
import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import TechBadge from "./TechBadge";
import ProjectButtons from "./ProjectButtons";

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Gemini AI",
];

export default function FeaturedContent() {
  return (
    <div className="flex h-full flex-col justify-center">

      {/* Featured Badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="
          inline-flex
          w-fit
          items-center
          gap-2
          rounded-full
          border
          border-[#D4AF37]/20
          bg-[#D4AF37]/10
          px-4
          py-2
        "
      >
        <Sparkles size={14} className="text-[#D4AF37]" />
        <span
          className="
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.22em]
            text-[#D4AF37]
          "
        >
          Featured Project
        </span>
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.1,
          duration: 0.5,
        }}
        className="mt-8"
      >
        <h2
          className="
            leading-[0.95]
            font-bold
            text-white
            text-5xl
            xl:text-6xl
          "
        >
          District
        </h2>

        <h2
          className="
            mt-2
            leading-[0.95]
            font-bold
            text-[#E6C15A]
            text-5xl
            xl:text-6xl
          "
        >
          Grievance Portal
        </h2>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 0.55,
        }}
        className="
          mt-8
          max-w-[520px]
          text-[17px]
          leading-8
          text-white/65
        "
      >
        A modern AI-powered grievance management platform for district
        administration that intelligently classifies complaints, predicts
        departments, detects duplicates and enables officers to resolve
        citizen issues faster through an optimized workflow.
      </motion.p>

      {/* Tech */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.3,
        }}
        className="
          mt-10
          flex
          flex-wrap
          gap-3
        "
      >
        {technologies.map((tech) => (
          <TechBadge
            key={tech}
            text={tech}
          />
        ))}
      </motion.div>

      {/* Divider */}
      <div className="mt-10 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

      {/* Bottom Action Hub */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.4,
        }}
        className="
          mt-8
          flex
          flex-wrap
          items-center
          gap-4
        "
      >
        <ProjectButtons />

        <div className="flex items-center gap-5 text-sm text-white/45">
          <div className="flex items-center gap-2">
            <ArrowUpRight size={16} />
            Live Demo
          </div>

          <div className="flex items-center gap-2">
            {/* 
              FIX 2: Replaced the missing Lucide GitHub tag with a native inline SVG markup.
              It will scale beautifully to size 16 and match your styling perfectly!
            */}
            <svg
              role="img"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="currentColor"
              xmlns="http://w3.org"
              className="inline-block"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub
          </div>
        </div>
      </motion.div>

    </div>
  );
}
