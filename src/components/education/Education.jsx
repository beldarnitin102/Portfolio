"use client";

import { motion } from "framer-motion";
import EducationBackground from "./EducationBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Education() {
  return (
    <section
      id="education"
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        py-32
        w-full
        justify-center
      "
    >
      <EducationBackground />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1360px]
          px-6
          sm:px-8
          lg:px-16
          xl:px-20
        "
      >
        <div className="w-full xl:-translate-x-16">
          <div
            className="
              grid
              items-center
              grid-cols-1
              lg:grid-cols-2
              gap-16
              w-full
            "
          >
            {/* ================= LEFT SIDE LAYOUT (EDUCATION CARDS) ================= */}
            <div className="w-full flex flex-col gap-8 max-w-[580px]">
              
              {/* Heading */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <h2 className="text-4xl font-bold text-white tracking-tight sm:text-5xl">
                  My Education
                </h2>
                <p className="mt-2 text-base text-white/60">
                  Academic journey and current qualifications.
                </p>
              </motion.div>

              {/* Card 1: B.Tech Degree */}
              <motion.div 
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col gap-2 text-left"
              >
                <span className="text-sm font-medium text-[#D4AF37]">2023 - Present</span>
                <h3 className="text-xl font-bold text-white">B.Tech in Computer Science</h3>
                <p className="text-sm text-white/70">Specialisation in AI & ML</p>
                <p className="text-xs text-white/40">Currently pursuing higher studies</p>
              </motion.div>

              {/* Card 2: 12th Grade Summary */}
              <motion.div 
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col gap-2 text-left"
              >
                <span className="text-sm font-medium text-[#D4AF37]">Completed</span>
                <h3 className="text-xl font-bold text-white">Higher Secondary Certificate (12th)</h3>
                <p className="text-sm text-white/70">Science Stream</p>
                <p className="text-xs text-white/40">Scored excellent foundational grade metrics</p>
              </motion.div>

            </div>

            {/* ================= RIGHT SIDE LAYOUT (IMAGE TARGET SLOT) ================= */}
            <div className="flex justify-center lg:justify-end w-full">
              {/* This reserves the column slot space for college.png to land safely */}
              <div className="w-[520px] h-[400px] hidden lg:block" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
