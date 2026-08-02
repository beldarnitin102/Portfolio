"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  index,
  title,
  description,
  image,
  tech = [],
  github,
  live,
}) {
  return (
    <article
      className="
        group
        relative
        flex
        h-[760px]
        w-[520px]
        flex-col
        overflow-hidden
        rounded-[34px]
        border
        border-white/10
        bg-[#0B1118]
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-[#D4AF37]/40
        hover:shadow-[0_40px_120px_rgba(0,0,0,.55)]
      "
    >
      {/* IMAGE */}

      <div className="relative h-[350px] overflow-hidden">
        <Image
          src={image || "/images/placeholder.png"}
          alt={title}
          fill
          sizes="520px"
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#0B1118]
            via-[#0B111830]
            to-transparent
          "
        />

        {/* Project Number */}

        <div
          className="
            absolute
            left-7
            top-7
            rounded-full
            border
            border-white/10
            bg-black/40
            px-4
            py-2
            backdrop-blur-xl
          "
        >
          <span
            className="
              text-[11px]
              font-semibold
              tracking-[0.35em]
              text-[#D4AF37]
            "
          >
            {String(index).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* CONTENT */}

      <div className="flex flex-1 flex-col p-8">
        <h3
          className="
            text-[38px]
            font-bold
            leading-none
            tracking-tight
            text-white
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-5
            text-[16px]
            leading-8
            text-white/65
          "
        >
          {description}
        </p>

        {/* STACK */}

        <div className="mt-8 flex flex-wrap gap-3">
          {tech.map((item) => (
            <span
              key={item}
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-4
                py-2
                text-xs
                font-medium
                text-white/70
                transition
                duration-300
                group-hover:border-[#D4AF37]/20
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* divider */}

        <div className="my-8 h-px bg-white/8" />

        {/* buttons */}

        <div className="mt-auto flex gap-4">
          <a
            href={live || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1
              flex
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-[#D4AF37]
              py-4
              font-semibold
              text-black
              transition-all
              duration-300
              hover:scale-[1.03]
            "
          >
            Live Demo
            <ArrowUpRight size={18} />
          </a>

          <a
            href={github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              h-[58px]
              w-[58px]
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              transition-all
              duration-300
              hover:border-white/30
              hover:bg-white/[0.06]
            "
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.303 3.438 9.8 8.205 11.385.6.112.82-.258.82-.577v-2.234c-3.338.726-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.833 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.304-5.467-1.334-5.467-5.932 0-1.31.47-2.382 1.236-3.222-.124-.303-.535-1.526.118-3.177 0 0 1.008-.323 3.3 1.23a11.51 11.51 0 013.003-.404c1.02.004 2.047.138 3.006.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.65.244 2.874.12 3.177.77.84 1.235 1.913 1.235 3.222 0 4.61-2.806 5.625-5.48 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.6 24 12.297 24 5.67 18.627.297 12 .297Z" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
