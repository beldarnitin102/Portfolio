"use client";

import { motion } from "framer-motion";
import Container from "../ui/Container";
import ContactCard from "./ContactCard";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#030712]
        /* 
          THE UPPER SPACING FIX:
          Changed from generic py balancing parameters to pt-48 and lg:pt-56!
          This opens up an elegant, professional layout breathing room gap right 
          above your section headline and pill tag below the preceding rows.
        */
        pt-48
        pb-32
        lg:pt-56
        lg:pb-40
        w-full
        flex
        flex-col
        items-center
        justify-center
      "
    >
      {/* Container wrapper layer centered via inner flex alignments */}
      <Container className="w-full flex flex-col items-center justify-center relative z-10">
        
        {/* Structural separation tracking grid framework */}
        <div className="flex flex-col items-center gap-16 lg:gap-20 w-full max-w-[1360px] mx-auto">

          {/* Header Text Animation Block */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              mx-auto
              max-w-4xl
              text-center
              flex
              flex-col
              items-center
              justify-center
              w-full
            "
          >
            {/* Symmetrical Badge Pill */}
            <span
              className="
                inline-flex
                rounded-full
                border
                border-[#D4AF37]/20
                bg-[#D4AF37]/10
                px-6
                py-2.5
                text-xs
                font-semibold
                uppercase
                tracking-[0.35em]
                text-[#D4AF37]
              "
            >
              Let's Connect
            </span>

            {/* Centered Heading */}
            <h2
              className="
                mt-8
                text-4xl
                sm:text-5xl
                font-black
                leading-tight
                text-white
                md:text-6xl
                tracking-tight
              "
            >
              Thanks For Visiting
            </h2>

            {/* Description Paragraph */}
            <p
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-base
                sm:text-lg
                leading-8
                text-center
                text-white/60
              "
            >
              Thank you for taking the time to explore my portfolio.
              Every project here represents my passion for building
              beautiful interfaces, scalable applications, and solving
              real-world problems with technology.
              <br /><br />
              If you have an opportunity, an exciting idea, or simply
              want to connect, I'd be delighted to hear from you.
              Let's create something meaningful together.
            </p>
          </motion.div>

          {/* The Contact Card Form Section Elements Row */}
          <div className="w-full flex justify-center items-center relative">
            <ContactCard />
          </div>

        </div>

      </Container>
    </section>
  );
}
