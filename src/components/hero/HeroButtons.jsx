"use client";

import { ArrowRight, Download } from "lucide-react";
import Button from "../ui/Button";

export default function HeroButtons() {
  return (
    <div
      className="
        mt-10

        flex
        flex-col
        sm:flex-row

        items-center
        justify-center
        lg:justify-start

        gap-4
      "
    >
      <Button
        variant="primary"
        size="lg"
        className="group min-w-[220px]"
      >
        <span>Explore My Work</span>

        <ArrowRight
          size={18}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </Button>

      <Button
        variant="secondary"
        size="lg"
        className="group min-w-[220px]"
      >
        <span>Download Resume</span>

        <Download
          size={18}
          className="
            transition-transform
            duration-300
            group-hover:-translate-y-1
          "
        />
      </Button>
    </div>
  );
}