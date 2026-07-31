"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import EducationBackground from "./EducationBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Education() {
  return (
    <section
      id="education"
      className="relative min-h-screen overflow-hidden flex items-center py-32 w-full justify-center"
    >
      <EducationBackground />

      {/* 
        FIX 1: BOOSTED CONTAINER BOUNDS
        Expanded from max-w-[1360px] to max-w-[1440px] to give the wider image 
        plenty of canvas space to render natively at high resolution!
      */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="w-full">
          {/* Main layout columns tracker */}
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 w-full">
            {/* ================= LEFT SIDE LAYOUT (TIMELINE CONNECTOR GRID) ================= */}
            {/* ================= LEFT SIDE LAYOUT (TIMELINE CONNECTOR GRID) ================= */}
            <div className="w-full flex items-start gap-6 xl:gap-8 max-w-[580px]">
              {/* Short tracking vertical line indicators */}
              <div className="relative flex flex-col items-center justify-start h-full pt-16 min-h-[420px] hidden sm:flex">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] ring-4 ring-[#D4AF37]/20 z-10" />
                <div className="w-[1.5px] flex-1 bg-gradient-to-b from-[#D4AF37] via-white/10 to-transparent my-1.5" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20 z-10" />
              </div>

              {/* 
    THE FIX LOCATION:
    Changed "flex flex-col gap-6" to "flex flex-col gap-10"!
    This immediately pushes the Title, B.Tech box, and 12th Box apart vertically.
  */}
              <div className="flex-1 flex flex-col gap-10">
                {/* Title Section */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl font-bold text-white tracking-tight sm:text-5xl">
                    My Education
                  </h2>
                  <p className="mt-2 text-base text-white/60">
                    Academic journey and current qualifications.
                  </p>
                </motion.div>

                {/* Card 1: B.Tech Degree */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col gap-2 text-left hover:border-white/20 transition-all duration-300"
                >
                  <span className="text-sm font-medium text-[#D4AF37]">
                    2023 - Present
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    B.Tech in Computer Science
                  </h3>
                  <p className="text-sm text-white/70">
                    Specialisation in AI & ML
                  </p>
                </motion.div>

                {/* Card 2: 12th Grade Summary */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col gap-2 text-left hover:border-white/20 transition-all duration-300"
                >
                  <span className="text-sm font-medium text-white/40">
                    Completed
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Higher Secondary Certificate (12th)
                  </h3>
                  <p className="text-sm text-white/70">Science Stream</p>
                </motion.div>
              </div>
            </div>

            {/* ================= RIGHT SIDE FIXED GRAPHIC CONTAINER ================= */}
            <div className="flex justify-center lg:justify-end w-full">
              {/* 
                FIX 2: ENLARGED DISPLAY CANVAS DIMENSIONS
                Boosted container box parameters from w-[640px] h-[480px] up to 
                w-[760px] h-[520px]! This creates a massive, cinema-style banner asset framing.
              */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="w-full max-w-[760px] h-[520px] hidden lg:block overflow-hidden rounded-3xl border border-white/10 bg-[#18181B] shadow-2xl relative group"
              >
                <Image
                  src="/images/college-new.png"
                  alt="College Campus Location View"
                  fill
                  sizes="(max-width: 1024px) 100vw, 760px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/60 via-transparent to-[#030712]/20 pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
