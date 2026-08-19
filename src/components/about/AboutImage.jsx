"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutImage() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [90, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.65, 1], [0, 0.8, 1]);

  const experienceY = useTransform(scrollYProgress, [0, 1], [35, 0]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [-20, 0]);

  return (
    <div
      ref={containerRef}
      className="
        relative
        mx-auto
        w-full
        max-w-[520px]
        px-2
        sm:px-4
      "
    >
      {/* Ambient glow */}
      <motion.div
        style={{
          opacity: imageOpacity,
          scale: imageScale,
        }}
        className="
          pointer-events-none
          absolute
          inset-8
          rounded-full
          bg-[#D4AF37]/15
          blur-[100px]
          sm:blur-[120px]
        "
      />

      {/* Main illustration */}
      <motion.div
        style={{
          y: imageY,
          scale: imageScale,
          opacity: imageOpacity,
        }}
        className="
          relative
          z-10
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-white/5
          shadow-[0_25px_80px_rgba(0,0,0,0.45)]
          sm:rounded-[32px]
          lg:rounded-[36px]
        "
      >
        <Image
          src="/images/about.png"
          alt="About Nitin"
          width={600}
          height={750}
          sizes="
            (max-width: 639px) 92vw,
            (max-width: 1023px) 520px,
            420px
          "
          className="h-auto w-full object-cover"
        />
      </motion.div>

      {/* Experience card */}
      <motion.div
        style={{ y: experienceY, opacity: imageOpacity }}
        animate={{ y: [0, -7, 0] }}
        transition={{
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          absolute
          left-0
          top-8
          z-20
          rounded-2xl
          border
          border-[#D4AF37]/20
          bg-[#09090B]/90
          px-4
          py-4
          backdrop-blur-xl
          sm:left-2
          sm:top-12
          sm:px-5
          sm:py-5
          lg:left-[-16px]
        "
      >
        <h3 className="text-2xl font-bold text-[#D4AF37] sm:text-3xl">
          2+
        </h3>

        <p className="mt-1 text-xs text-white/70 sm:text-sm">
          Years Learning
        </p>
      </motion.div>

      {/* Tech badge */}
      <motion.div
        style={{ y: badgeY, opacity: imageOpacity }}
        animate={{ y: [0, 7, 0] }}
        transition={{
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          absolute
          bottom-8
          right-0
          z-20
          rounded-full
          border
          border-[#D4AF37]/20
          bg-[#09090B]/90
          px-4
          py-2.5
          backdrop-blur-xl
          sm:bottom-12
          sm:right-2
          sm:px-5
          sm:py-3
          lg:right-[-16px]
        "
      >
        <span className="text-xs font-medium tracking-wide text-white sm:text-sm">
          MERN • AI • Next.js
        </span>
      </motion.div>
    </div>
  );
}