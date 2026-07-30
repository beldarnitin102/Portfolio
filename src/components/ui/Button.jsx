"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const variants = {
    primary: `
      bg-accent
      text-background
      border
      border-accent
      hover:-translate-y-1
      hover:shadow-[0_15px_40px_rgba(212,175,55,.25)]
      active:translate-y-0
    `,

    secondary: `
      bg-card/70
      backdrop-blur-xl
      border
      border-border
      text-primary
      hover:bg-card
      hover:border-accent/40
      hover:-translate-y-1
    `,

    ghost: `
      bg-transparent
      text-secondary
      hover:text-accent
      hover:bg-card/40
    `,
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-xl",

    md: "px-6 py-3 text-[15px] rounded-2xl",

    lg: "px-8 py-4 text-base rounded-2xl",
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: 0.25,
      }}
      className={clsx(
        `
        inline-flex
        items-center
        justify-center
        gap-2

         rounded-2xl

        font-medium

        transition-all
        duration-300

        outline-none

        cursor-pointer

        whitespace-nowrap

        disabled:pointer-events-none
        disabled:opacity-50
        `,
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
