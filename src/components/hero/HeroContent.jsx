"use client";

import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";

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

export default function HeroContent() {
  return (
    <div
      className="
        w-full
        max-w-[620px]
        mx-auto
        lg:mx-0
        text-center
        lg:text-left
        relative
        -top-2
        lg:-top-6
        flex
        flex-col
        gap-7
        lg:gap-9
      "
    >
      {/* Badge Container */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0}
        className="
          inline-flex
          self-center
          lg:self-start
          items-center
          gap-2
          rounded-full
          border
          border-accent/20
          bg-card/60
          px-5
          py-2
          text-sm
          text-secondary
          backdrop-blur-xl
        "
      >
        <span className="h-2 w-2 mt-1 rounded-full bg-accent" />
        Available for Internships
      </motion.div>

      {/* Title & Name Container grouped together tightly */}
      <div className="flex flex-col">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.15}
          className="text-lg text-secondary"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.25}
          className="
            font-bold
            leading-none
            tracking-tight
            text-5xl
            sm:text-6xl
            md:text-7xl
            xl:text-8xl
          "
        >
          Nitin
        </motion.h1>
      </div>

      {/* Role Container */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.35}
        className="flex flex-col gap-2"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-primary">
          Full Stack Developer
        </h2>
        <p className="text-lg md:text-xl text-accent">
          AI • Machine Learning • Generative AI
        </p>
      </motion.div>

      {/* Description Container */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.45}
        className="text-base md:text-lg leading-8 text-secondary"
      >
        I build modern web applications that combine clean design, scalable
        architecture, and intelligent AI experiences. Passionate about creating
        products that are fast, useful, and enjoyable to use.
      </motion.p>

      {/* Buttons Container */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.55}
        className="
          flex
          flex-wrap
          justify-center
          lg:justify-start
          gap-4
          pt-2 /* Extra spacing specifically for buttons */
        "
      >
        <HeroButtons />
      </motion.div>
    </div>
  );
}
