"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, MapPin } from "lucide-react";

import Button from "../ui/Button";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
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

export default function AboutContent() {
  return (
    <div 
      className="
        w-full 
        max-w-2xl
        /* 
          THE STRUCTURAL FIX FOR COLLAPSING:
          Turning this wrapper into a flex column with a strict gap utility 
          ensures all elements maintain a beautiful distance from one another.
        */
        flex
        flex-col
        gap-6
        lg:gap-8
      "
    >
      {/* Badge Container */}
      <div className="flex">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[#D4AF37]/20
            bg-white/5
            backdrop-blur-xl
            px-5
            py-2
          "
        >
          <span className="h-6 w-6 rounded-full bg-[#D4AF37]" />
          <span className="text-sm text-white/70">About Me</span>
        </motion.div>
      </div>

      {/* Heading Container */}
      <div>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.15}
          className="
            text-4xl
            font-bold
            leading-tight
            text-white
            sm:text-5xl
            lg:text-6xl
          "
        >
          Passionate About Building
          <br />
          <span className="text-[#D4AF37]">Modern Digital Experiences.</span>
        </motion.h2>
      </div>

      {/* Description Container */}
      <div>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.3}
          className="
            text-lg
            leading-8
            text-white/65
          "
        >
          I'm a Full Stack Developer who enjoys transforming ideas into
          beautiful, scalable, and high-performance web applications.
          My interests span modern frontend development, backend systems,
          Artificial Intelligence, Machine Learning, and Generative AI.
          <br />
          <br />
          I love creating products that not only look premium but also solve
          real-world problems through clean architecture and thoughtful user
          experience.
        </motion.p>
      </div>

      {/* Info Cards / Icons Container */}
      <div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.45}
          className="
            flex
            flex-col
            gap-5
            sm:flex-row
            sm:flex-wrap
          "
        >
          <div className="flex items-center gap-3 text-white/80">
            <GraduationCap size={20} className="text-[#D4AF37]" />
            <span>B.Tech CSE (AI & ML)</span>
          </div>

          <div className="flex items-center gap-3 text-white/80">
            <MapPin size={20} className="text-[#D4AF37]" />
            <span>Maharashtra, India</span>
          </div>
        </motion.div>
      </div>

      {/* CTA Button Container */}
      <div className="pt-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.6}
        >
          <Button
            variant="primary"
            size="lg"
            className="inline-flex items-center gap-3"
          >
            Let's Connect
            <ArrowRight size={18} />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
