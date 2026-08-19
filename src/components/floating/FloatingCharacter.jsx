"use client";

import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingCharacter() {
  const { scrollY, scrollYProgress } = useScroll();
  const [isAboutSection, setIsAboutSection] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [mobilePath, setMobilePath] = useState({
    distance: 850,
    startX: 48,
    endX: 48,
    startY: 0,
    endY: 850,
    startWidth: 270,
    endWidth: 300,
  });

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1279px)");
    const updateLayout = () => setIsCompact(media.matches);

    updateLayout();
    media.addEventListener("change", updateLayout);
    return () => media.removeEventListener("change", updateLayout);
  }, []);

  useEffect(() => {
    if (!isCompact) return;

    const measurePath = () => {
      const wrapper = document.querySelector("[data-floating-wrapper]");
      const heroSlot = document.querySelector('[data-floating-slot="hero"]');
      const aboutSlot = document.querySelector('[data-floating-slot="about"]');
      if (!wrapper || !heroSlot || !aboutSlot) return;

      const wrapperRect = wrapper.getBoundingClientRect();
      const heroRect = heroSlot.getBoundingClientRect();
      const aboutRect = aboutSlot.getBoundingClientRect();
      const startWidth = Math.min(heroRect.width * 0.86, 390);
      const endWidth = Math.min(aboutRect.width * 0.86, 390);
      const startHeight = startWidth * 1.25;
      const endHeight = endWidth * 1.25;
      const startY = heroRect.top - wrapperRect.top + (heroRect.height - startHeight) / 2;
      const endY = aboutRect.top - wrapperRect.top + (aboutRect.height - endHeight) / 2;

      setMobilePath({
        distance: Math.max(endY - startY, 1),
        startX: heroRect.left - wrapperRect.left + (heroRect.width - startWidth) / 2,
        endX: aboutRect.left - wrapperRect.left + (aboutRect.width - endWidth) / 2,
        startY,
        endY,
        startWidth,
        endWidth,
      });
    };

    const frame = requestAnimationFrame(measurePath);
    window.addEventListener("resize", measurePath);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", measurePath);
    };
  }, [isCompact]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsAboutSection(latest >= 0.05);
  });

  const mobileWidth = useTransform(
    scrollY,
    [0, mobilePath.distance * 0.55, mobilePath.distance],
    [
      mobilePath.startWidth,
      Math.min(mobilePath.startWidth, mobilePath.endWidth) * 0.78,
      mobilePath.endWidth,
    ],
  );
  const mobileHeight = useTransform(
    scrollY,
    [0, mobilePath.distance * 0.55, mobilePath.distance],
    [
      mobilePath.startWidth * 1.25,
      Math.min(mobilePath.startWidth, mobilePath.endWidth) * 0.78,
      mobilePath.endWidth * 1.25,
    ],
  );
  const mobileX = useTransform(scrollY, [0, mobilePath.distance], [mobilePath.startX, mobilePath.endX]);
  const mobileY = useTransform(scrollY, [0, mobilePath.distance], [mobilePath.startY, mobilePath.endY]);
  const mobileRadius = useTransform(
    scrollY,
    [0, mobilePath.distance * 0.55, mobilePath.distance],
    [28, 999, 28],
  );

  const cardWidth = useTransform(
    scrollYProgress,
    [0, 0.06, 0.09],
    ["470px", "420px", "460px"],
  );

  const cardHeight = useTransform(
    scrollYProgress,
    [0, 0.06, 0.09],
    ["600px", "420px", "540px"],
  );

  const cardMoveY = useTransform(
    scrollYProgress,
    [0, 0.09],
    ["0px", "690px"],
  );

  const cardMoveX = useTransform(
    scrollYProgress,
    [0, 0.09],
    ["172px", "-680px"],
  );

  const cardRadiusChange = useTransform(
    scrollYProgress,
    [0, 0.04, 0.09],
    ["32px", "999px", "24px"],
  );

  return (
    <div
      data-floating-wrapper
      className="
        pointer-events-none
        absolute
        inset-x-0
        top-20
        z-30
        mx-auto
        block
        w-full
        max-w-[1360px]
        px-6
        sm:px-8
        lg:px-16
        xl:px-20
      "
    >
      <motion.div
        style={{
          width: isCompact ? mobileWidth : cardWidth,
          height: isCompact ? mobileHeight : cardHeight,
          x: isCompact ? mobileX : cardMoveX,
          y: isCompact ? mobileY : cardMoveY,
          borderRadius: isCompact ? mobileRadius : cardRadiusChange,
          right: isCompact ? "auto" : undefined,
        }}
        className="
          pointer-events-auto
          absolute
          right-6
          overflow-hidden
          border
          border-white/10
          bg-[#18181B]
          shadow-2xl
          isolate
          will-change-transform
          sm:right-8
          lg:right-16
          xl:right-20
        "
      >
        {/* Hero image */}
        <motion.div
          className="pointer-events-none absolute inset-0 h-full w-full"
          animate={{ opacity: isAboutSection ? 0 : 1 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <Image
            src="/images/nitin.png"
            alt="Nitin"
            fill
            priority
            sizes="470px"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* About image */}
        <motion.div
          className="pointer-events-none absolute inset-0 h-full w-full"
          animate={{ opacity: isAboutSection ? 1 : 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <Image
            src="/images/about.png"
            alt="About illustration"
            fill
            sizes="470px"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
