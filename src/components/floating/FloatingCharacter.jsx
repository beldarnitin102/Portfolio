"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function FloatingCharacter() {
  const { scrollYProgress } = useScroll();
  
  // Track three distinct active view string states: "hero" | "about" | "education"
  const [activeSection, setActiveSection] = useState("hero");

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.15) {
      setActiveSection("hero");
    } else if (latest >= 0.15 && latest < 0.40) {
      setActiveSection("about");
    } else {
      setActiveSection("education");
    }
  });

  /* =========================================================
     1. SEAMLESS CONTAINER DIMENSION & POSITION TIMELINES
     ========================================================= */
  
  // Controls structural width adjustments dynamically through all three zones
  const cardWidth = useTransform(
    scrollYProgress,
    [0, 0.12, 0.18, 0.38, 0.44],
    ["500px", "420px", "460px", "420px", "520px"] // Custom size for education panel
  );

  // Controls structural height adjustments dynamically through all three zones
  const cardHeight = useTransform(
    scrollYProgress,
    [0, 0.12, 0.18, 0.38, 0.44],
    ["650px", "420px", "540px", "420px", "400px"] // Wider banner-style aspect ratio for college
  );

  // Smoothly drives the vertical movement down past your sections
  const cardMoveY = useTransform(
    scrollYProgress,
    [0, 0.18, 0.38, 0.45],
    ["-24px", "80px", "80px", "680px"] // Pushes the card down into the Education grid
  );

  // Handles horizontal travel across your layout grid columns
  const cardMoveX = useTransform(
    scrollYProgress,
    [0, 0.18, 0.38, 0.45],
    ["172px", "-630px", "-630px", "0px"] // Centers over the right side space of the Education container
  );

  /* 
    MULTI-STAGE RADIUS MORPH:
    - Moves out of Hero: Squeezes down into a circle at 0.12
    - Enters About: Flattens out to a 24px rounded rectangle at 0.18
    - Moves out of About: Squeezes back into a circle at 0.40
    - Enters Education: Forms a clean 16px corner bounding edge layout box at 0.45
  */
  const cardRadiusChange = useTransform(
    scrollYProgress,
    [0, 0.12, 0.18, 0.40, 0.45],
    ["36px", "999px", "24px", "999px", "16px"]
  );

  return (
    <div className="fixed inset-x-0 top-32 w-full max-w-[1360px] mx-auto pointer-events-none z-30 px-6 sm:px-8 lg:px-16 xl:px-20">
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
        {/* IMAGE LAYER 1: HERO PORTRAIT (Your Face) */}
        <motion.div 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          animate={{ opacity: activeSection === "hero" ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
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

        {/* IMAGE LAYER 2: ABOUT ILLUSTRATION (Ash & Pikachu) */}
        <motion.div 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          animate={{ opacity: activeSection === "about" ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Image
            src="/images/about.png"
            alt="Ash and Pikachu Illustration"
            width={500}
            height={650}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* IMAGE LAYER 3: EDUCATION VIEW (College Canvas Scene) */}
        <motion.div 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          animate={{ opacity: activeSection === "education" ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Image
            src="/images/college.png"
            alt="College Campus Location View"
            width={520}
            height={400}
            className="w-full h-full object-cover"
          />
        </motion.div>

      </motion.div>
    </div>
  );
}
