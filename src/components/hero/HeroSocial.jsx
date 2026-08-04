"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

// Internal fallback array definition
const defaultSocials = [
  {
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
    href: "https://github.com/beldarnitin102",
  },
  {
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    href: "https://www.linkedin.com/in/nitin-beldar-022240333?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    icon: Mail,
    href: "mailto:beldarnitin940@gmail.com",
  },
];

// Added parameter protection logic down into the component declaration line
export default function HeroSocial({ items }) {
  // If items are passed as a prop, use them; otherwise default to our safe array
  const socialList = items || defaultSocials;

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 18 }}
      transition={{ delay: 1, duration: 0.8 }}
      
      className="
        hidden
        xl:flex
        flex-col
        items-center
        justify-center
        gap-9
        z-20
        self-center
      "
    >
      {/* Safe mapping iteration loop prevents runtime crashes */}
      {socialList.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.15 }}
            className="text-secondary hover:text-accent transition-colors duration-300"
          >
            <Icon size={22} width={22} height={22} />
          </motion.a>
        );
      })}

      <div className="mt-2 h-28 w-px bg-gradient-to-b from-accent to-transparent" />
    </motion.div>
  );
}
