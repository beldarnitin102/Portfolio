"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  School,
  BookOpen,
} from "lucide-react";

const education = [
  {
    icon: School,
    year: "2020",
    title: "Secondary School",
    subtitle: "SSC",
    description:
      "Built a strong academic foundation while developing an interest in science and technology.",
  },

  {
    icon: BookOpen,
    year: "2022",
    title: "Higher Secondary",
    subtitle: "HSC • Biology",
    description:
      "Completed higher secondary education before discovering my passion for programming and software development.",
  },

  {
    icon: GraduationCap,
    year: "2024 - Present",
    title: "B.Tech (AI & ML)",
    subtitle: "R. C. Patel Institute of Technology",
    description:
      "Currently pursuing Artificial Intelligence & Machine Learning while building real-world full stack and AI projects.",
  },
];

export default function EducationTimeline() {
  return (
    <div className="relative">
      {/* Vertical Line */}

      <div
        className="
          absolute
          left-5
          top-0
          bottom-0
          w-px
          bg-gradient-to-b
          from-accent
          via-accent/30
          to-transparent
        "
      />

      <div className="space-y-12">
        {education.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              className="
                relative
                flex
                gap-8
              "
            >
              {/* Icon */}

              <div
                className="
                  relative
                  z-10

                  flex
                  h-10
                  w-10
                  items-center
                  justify-center

                  rounded-full
                  border
                  border-accent/20

                  bg-card

                  shadow-lg
                "
              >
                <Icon
                  size={18}
                  className="text-accent"
                />
              </div>

              {/* Card */}

              <div
                className="
                  flex-1

                  rounded-3xl

                  border
                  border-white/10

                  bg-card/70

                  p-7

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  hover:border-accent/30
                  hover:-translate-y-1
                "
              >
                <span
                  className="
                    text-sm
                    text-accent
                  "
                >
                  {item.year}
                </span>

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-semibold
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-1
                    font-medium
                    text-secondary
                  "
                >
                  {item.subtitle}
                </p>

                <p
                  className="
                    mt-4
                    leading-7
                    text-secondary
                  "
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}