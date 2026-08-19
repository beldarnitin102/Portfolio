"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroImage() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Subtle hero portrait leaving motion. The dedicated About scene handles the
  // visible portrait-to-About transition on small screens.
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1, 0]);

  const ringRotate = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const ringOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.5, 0]);

  return (
    <div
      ref={containerRef}
      className="
        relative
        flex
        w-full
        max-w-[420px]
        items-center
        justify-center
        px-4
        sm:max-w-[460px]
        sm:px-6
        lg:max-w-[500px]
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
          inset-10
          rounded-full
          bg-[#D4AF37]/10
          blur-[90px]
          sm:inset-6
          sm:blur-[110px]
        "
      />

      {/* Decorative ring */}
      <motion.div
        style={{
          rotate: ringRotate,
          opacity: ringOpacity,
        }}
        className="
          pointer-events-none
          absolute
          inset-5
          rounded-full
          border
          border-[#D4AF37]/20
          sm:inset-7
        "
      />

      {/* Portrait */}
      <motion.div
        style={{
          y: imageY,
          scale: imageScale,
          opacity: imageOpacity,
        }}
        initial={{ opacity: 0, y: 35, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          w-[86%]
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-[#18181B]
          shadow-[0_25px_80px_rgba(0,0,0,0.42)]
          sm:w-[84%]
          sm:rounded-[32px]
        "
      >
        <Image
          src="/images/nitin.png"
          alt="Nitin"
          width={468}
          height={585}
          priority
          sizes="
            (max-width: 639px) 82vw,
            (max-width: 1023px) 400px,
            440px
          "
          className="h-auto w-full object-cover"
        />

        {/* Soft highlight */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[linear-gradient(135deg,rgba(255,255,255,.12),transparent_32%,transparent)]
          "
        />
      </motion.div>

      {/* Floating accent */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-2
          top-8
          z-20
          h-3
          w-3
          rounded-full
          bg-[#D4AF37]
          sm:right-4
          sm:h-4
          sm:w-4
        "
      />

      {/* Bottom ring */}
      <motion.div
        style={{ opacity: imageOpacity }}
        animate={{
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-2
          left-2
          z-20
          h-12
          w-12
          rounded-full
          border
          border-[#D4AF37]/30
          sm:bottom-4
          sm:left-4
          sm:h-16
          sm:w-16
        "
      />
    </div>
  );
}
