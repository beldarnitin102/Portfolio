"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function FloatingCharacter() {
  const { scrollYProgress } = useScroll();
  const [isAboutSection, setIsAboutSection] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.05) {
      setIsAboutSection(true);
    } else {
      setIsAboutSection(false);
    }
  });

  /* =========================================================
     1. SEAMLESS CONTAINER DIMENSION & POSITION TIMELINES
     ========================================================= */
  const cardWidth = useTransform(scrollYProgress, [0, 0.06, 0.09], ["470px", "420px", "460px"]);
  const cardHeight = useTransform(scrollYProgress, [0, 0.06, 0.09], ["600px", "420px", "540px"]);

  /*
    SPEED CORRECTION:
    By lowering the end scroll value to 0.09, the image will fly down (Y) 
    and push left (X) much faster. It will now lock perfectly into place 
    the exact moment the About section text rolls onto the screen.
  */
  const cardMoveY = useTransform(scrollYProgress, [0, 0.09], ["0px", "690px"]); 
  
  // Increased from -630px to -680px to push it completely clear of the text
  const cardMoveX = useTransform(scrollYProgress, [0, 0.09], ["172px", "-680px"]);
  const cardRadiusChange = useTransform(scrollYProgress, [0, 0.04, 0.09], ["32px", "999px", "24px"]);
  return (
    <div className="hidden xl:block absolute inset-x-0 top-20 w-full max-w-[1360px] mx-auto pointer-events-none z-30 px-6 sm:px-8 lg:px-16 xl:px-20">
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
