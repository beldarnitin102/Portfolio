"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  CalendarDays,
  Building2,
  Award,
} from "lucide-react";

export default function EducationCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        rounded-[30px]
        border
        border-white/10
        bg-card/70
        p-8
        backdrop-blur-xl
        shadow-2xl
      "
    >
      {/* Heading */}

      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-accent/10
          "
        >
          <GraduationCap
            size={24}
            className="text-accent"
          />
        </div>

        <div>
          <h3 className="text-2xl font-semibold">
            R. C. Patel Institute of Technology
          </h3>

          <p className="text-secondary">
            Shirpur, Maharashtra
          </p>
        </div>
      </div>

      {/* Details */}

      <div className="mt-8 space-y-6">

        <div className="flex items-center gap-4">
          <Building2
            size={20}
            className="text-accent"
          />

          <div>
            <p className="text-secondary text-sm">
              Degree
            </p>

            <p className="font-medium">
              B.Tech (Artificial Intelligence &
              Machine Learning)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <CalendarDays
            size={20}
            className="text-accent"
          />

          <div>
            <p className="text-secondary text-sm">
              Duration
            </p>

            <p className="font-medium">
              2024 — 2028
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Award
            size={20}
            className="text-accent"
          />

          <div>
            <p className="text-secondary text-sm">
              Current CGPA
            </p>

            <p className="font-medium">
              8.23 / 10
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
}