"use client";

import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import HeroSocial from "./HeroSocial";

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
        relative
        mx-auto
        flex
        w-full
        max-w-[620px]
        flex-col
        gap-6
        text-center
        lg:mx-0
        lg:gap-8
        lg:text-left
        xl:-top-6
      "
    >
      {/* ================= STATUS ================= */}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0}
        className="
          inline-flex
          w-fit
          self-center
          items-center
          gap-2
          rounded-full
          border
          border-accent/20
          bg-card/60
          px-4
          py-2
          text-sm
          text-secondary
          backdrop-blur-xl
          lg:self-start
        "
      >
        <span className="h-2 w-2 rounded-full bg-accent" />
        Available for Internships
      </motion.div>

      {/* ================= NAME ================= */}

      <div className="flex flex-col">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.15}
          className="
            text-base
            text-secondary
            sm:text-lg
          "
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.25}
          className="
            mt-1
            text-5xl
            font-bold
            leading-[0.95]
            tracking-tight
            text-white
            sm:text-6xl
            md:text-7xl
            xl:text-8xl
          "
        >
          Nitin
        </motion.h1>
      </div>

      {/* ================= ROLE ================= */}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.35}
        className="flex flex-col gap-2"
      >
        <h2
          className="
            text-xl
            font-semibold
            text-primary
            sm:text-2xl
            md:text-3xl
          "
        >
          Full Stack Developer
        </h2>

        <p
          className="
            text-base
            font-medium
            text-accent
            sm:text-lg
            md:text-xl
          "
        >
          AI • Machine Learning • Generative AI
        </p>
      </motion.div>

      {/* ================= DESCRIPTION ================= */}

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.45}
        className="
          max-w-[620px]
          text-sm
          leading-7
          text-secondary
          sm:text-base
          sm:leading-8
          md:text-lg
        "
      >
        I build modern web applications that combine clean design, scalable
        architecture, and intelligent AI experiences. Passionate about creating
        products that are fast, useful, and enjoyable to use.
      </motion.p>

      {/* ================= ACTIONS ================= */}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.55}
        className="
          w-full
          pt-1
          sm:w-auto
        "
      >
        <HeroButtons />
      </motion.div>

      {/* ================= SOCIAL (mobile / tablet only) ================= */}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0.65}
      >
        <HeroSocial variant="mobile" />
      </motion.div>
    </div>
  );
}
