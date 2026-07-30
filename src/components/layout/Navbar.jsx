"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import navigation from "@/constants/navigation";
import useScroll from "@/hooks/useScroll";
import Button from "../ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll();

  return (
    <>
      <header
        className={`
          fixed
          top-0
          /* 
            FORCE CENTERING MECHANISM:
            Using left-1/2 and -translate-x-1/2 allows the fixed element to ignore 
            collapsing layout rules and align content columns according to the viewport center.
          */
          left-1/2
          -translate-x-1/2
          w-full
          /* Match your hero container maximum boundary limits */
          max-w-[1360px]
          z-50
          transition-all
          duration-500
          
          /* Match screen horizontal padding parameters from Container.jsx */
          px-6
          sm:px-8
          lg:px-16
          xl:px-20
          
          ${
            scrolled
              ? "bg-[#030712]/70 backdrop-blur-2xl border-b border-white/10"
              : "bg-transparent"
          }
        `}
      >
        <div className="flex h-20 items-center justify-between gap-4">
          
          {/* Logo Column */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="text-2xl font-bold tracking-[0.3em]">
              <span className="text-[#E6C15A]">N</span>
              <span className="text-white">ITIN</span>
            </Link>
          </div>

          {/* Navigation Items (Perfect visual center alignment) */}
          <nav className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="
                  relative
                  text-white/70
                  transition-all
                  duration-300
                  hover:text-[#E6C15A]

                  after:absolute
                  after:left-0
                  after:-bottom-2
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

          {/* Action Button Group */}
          <div className="flex-1 flex items-center justify-end gap-4">
            <div className="hidden lg:block">
              <Button variant="secondary">Resume</Button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#09090B]/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="w-full max-w-[1360px] mx-auto pt-28 px-6 sm:px-8">
              <nav className="flex flex-col gap-8">
                {navigation.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-medium text-white transition-colors hover:text-[#E6C15A]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <Button variant="primary" className="mt-12 w-full">
                Download Resume
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
