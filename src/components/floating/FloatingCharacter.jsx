"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function FloatingCharacter() {
  const { scrollYProgress } = useScroll();
  const [isAboutSection, setIsAboutSection] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.12) {
      setIsAboutSection(true);
    } else {
      setIsAboutSection(false);
    }
  });

  /* =========================================================
     1. SEAMLESS CONTAINER DIMENSION & POSITION TIMELINES
     ========================================================= */
  const cardWidth = useTransform(scrollYProgress, [0, 0.14, 0.18], ["500px", "420px", "460px"]);
  const cardHeight = useTransform(scrollYProgress, [0, 0.14, 0.18], ["650px", "420px", "540px"]);

  /*
    FIXED VERTICAL CANSED SPACE (y):
    Changed the destination coordinate parameter from 1160px down to 830px.
    This safely locks the card beside your About biography and completely 
    stops it from drifting down into your Education cards!
  */
  const cardMoveY = useTransform(scrollYProgress, [0, 0.18], ["0px", "760px"]); 
  
  const cardMoveX = useTransform(scrollYProgress, [0, 0.18], ["172px", "-630px"]);
  const cardRadiusChange = useTransform(scrollYProgress, [0, 0.08, 0.18], ["32px", "999px", "24px"]);

  return (
    <div className="absolute inset-x-0 top-32 w-full max-w-[1360px] mx-auto pointer-events-none z-30 px-6 sm:px-8 lg:px-16 xl:px-20">
      <motion.div
        style={{
          width: cardWidth,
          height: cardHeight,
          x: cardMoveX,
          y: cardMoveY,
          borderRadius: cardRadiusChange,
        }}
        className="
          absolute
          left-auto
          right-6
          sm:right-8
          lg:right-16
          xl:right-20
          
          pointer-events-auto
          overflow-hidden
          border
          border-white/10
          bg-[#18181B]
          shadow-2xl
          isolate
          will-change-transform
        "
      >
        {/* IMAGE LAYER 1: HERO PORTRAIT */}
        <motion.div 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          animate={{ opacity: isAboutSection ? 0 : 1 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <Image
            src="/images/nitin.png"
            alt="Nitin - Hero Portrait"
            width={500}
            height={650}
            priority
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* IMAGE LAYER 2: ABOUT ILLUSTRATION */}
        <motion.div 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          animate={{ opacity: isAboutSection ? 1 : 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <Image
            src="/images/about.png"
            alt="Ash and Pikachu Illustration"
            width={500}
            height={650}
            className="w-full h-full object-cover"
          />
        </motion.div>

      </motion.div>
    </div>
  );
}
