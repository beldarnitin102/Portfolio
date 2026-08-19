"use client";

import { ArrowRight, Download } from "lucide-react";
import Button from "../ui/Button";

export default function HeroButtons() {
  return (
    <div
      className="
        mt-5
        flex
        w-full
        flex-col
        items-center
        justify-center
        gap-3
        sm:mt-6
        sm:w-auto
        sm:flex-row
        sm:gap-4
        lg:justify-start
      "
    >
      <a href="#projects" className="w-full sm:w-auto">
        <Button
          variant="primary"
          size="lg"
          className="group w-full sm:min-w-[210px] sm:w-auto"
        >
          <span>Explore My Work</span>

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Button>
      </a>

      <a
        href="https://drive.google.com/file/d/1Uk9SN9HYCu7CF1qL0Qh9W9hprKRX50Fa/view?usp=sharing"
        target="_blank"
        rel="noreferrer noopener"
        className="w-full sm:w-auto"
      >
        <Button
          variant="secondary"
          size="lg"
          className="group w-full sm:min-w-[210px] sm:w-auto"
        >
          <span>Download Resume</span>

          <Download
            size={18}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
        </Button>
      </a>
    </div>
  );
}