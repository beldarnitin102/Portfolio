"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import navigation from "@/constants/navigation";
import useScroll from "@/hooks/useScroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll();

  // Close the mobile menu if the viewport grows to desktop.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevent background interaction while the mobile menu is open.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`
          fixed
          left-1/2
          top-0
          z-50
          w-full
          -translate-x-1/2
          transition-all
          duration-500

          max-w-[1360px]

          px-4
          sm:px-6
          lg:px-16
          xl:px-20

          ${
            scrolled
              ? "border-b border-white/10 bg-[#030712]/75 backdrop-blur-2xl"
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            flex
            h-16
            items-center
            justify-between
            sm:h-18
            lg:h-20
          "
        >
          {/* Logo */}
          <div className="shrink-0">
            <Link
              href="/"
              aria-label="Nitin home"
              onClick={() => setIsOpen(false)}
              className="
                text-xl
                font-bold
                tracking-[0.24em]
                sm:text-2xl
                sm:tracking-[0.3em]
              "
            >
              <span className="text-[#E6C15A]">N</span>
              <span className="text-white">ITIN</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex xl:gap-12">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="
                  relative
                  py-2
                  text-sm
                  text-white/70
                  transition-colors
                  duration-300
                  hover:text-[#E6C15A]

                  after:absolute
                  after:bottom-0
                  after:left-0
                  after:h-0.5
                  after:w-0
                  after:bg-[#E6C15A]
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]
              text-white
              transition-colors
              duration-300
              hover:bg-white/[0.07]
              lg:hidden
            "
          >
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="
              fixed
              inset-0
              z-40
              bg-[#030712]/95
              backdrop-blur-2xl
              lg:hidden
            "
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.25 }}
              className="
                flex
                min-h-full
                w-full
                flex-col
                px-6
                pb-10
                pt-28
                sm:px-8
              "
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
                Navigation
              </p>

              <nav className="mt-10 flex flex-col">
                {navigation.map((item, index) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className="
                      border-b
                      border-white/10
                      py-5
                      text-2xl
                      font-medium
                      text-white
                      transition-colors
                      duration-300
                      hover:text-[#E6C15A]
                      sm:text-3xl
                    "
                  >
                    <span className="mr-4 text-sm text-white/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}