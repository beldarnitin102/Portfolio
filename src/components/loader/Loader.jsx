"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  
  // ADDED: Track if the component has mounted on the client browser
  const [isMounted, setIsMounted] = useState(false);

  // Generate particles only once using lazy state initializer
  const [particles] = useState(() =>
    Array.from({ length: 18 }).map(() => ({
      left: 8 + Math.random() * 84,
      duration: 5 + Math.random() * 3,
      delay: Math.random() * 2,
      x: Math.random() * 60 - 30,
      size: 2 + Math.random() * 3,
    }))
  );

  useEffect(() => {
    // Component has safely mounted on the browser, flip the mount switch
    setIsMounted(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  // ADDED: Prevent server-side pre-rendering mismatch by returning a static background container
  if (!isMounted) {
    return <div className="fixed inset-0 bg-[#09090B] z-[9999]" />;
  }

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.9,
              ease: "easeInOut",
            },
          }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            overflow-hidden
            bg-[#09090B]
          "
        >
          {/* Gold Glow */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.12, 0.22, 0.12],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-[650px]
              w-[650px]
              rounded-full
              bg-[#D4AF37]/10
              blur-[180px]
            "
          />

          {/* Olive Glow */}
          <motion.div
            animate={{
              scale: [1.05, 1.2, 1.05],
              opacity: [0.04, 0.1, 0.04],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-[420px]
              w-[420px]
              rounded-full
              bg-[#708A58]/10
              blur-[140px]
            "
          />

          {/* Text */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 1.04,
            }}
            transition={{
              duration: 1,
            }}
            className="
              relative
              overflow-hidden
              bg-gradient-to-r
              from-[#FAFAFA]
              via-[#E6C15A]
              to-[#FAFAFA]
              bg-clip-text
              text-4xl
              font-bold
              tracking-[0.22em]
              text-transparent
              md:text-6xl
            "
          >
            Radhe Radhe
            <motion.span
              animate={{
                x: ["-150%", "150%"],
              }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-transparent
                via-white/60
                to-transparent
                mix-blend-screen
              "
            />
          </motion.h1>

          {/* Floating Dust */}
          {particles.map((particle, index) => (
            <motion.span
              key={index}
              className="absolute rounded-full bg-[#D4AF37]"
              style={{
                left: `${particle.left}%`,
                bottom: "8%",
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                opacity: [0.1, 0.8, 0],
                y: [-20, -220],
                x: [0, particle.x],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
