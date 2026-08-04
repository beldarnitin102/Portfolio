"use client";

import { Mail, Phone, ArrowUpRight } from "lucide-react";

export default function ContactCard() {
  return (
    <div
      className="
        mx-auto
        mt-0
        mb-24
        max-w-5xl
        rounded-[36px]
        border
        border-white/10
        bg-gradient-to-br
        from-white/[0.04]
        to-white/[0.02]
        p-10
        backdrop-blur-2xl
      "
    >
      <div
        className="
          grid
          gap-8
          md:grid-cols-2
        "
      >
        <a
          href="mailto:yourmail@gmail.com"
          className="
            group
            flex
            items-center
            gap-6
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-8
            transition-all
            duration-300
            hover:border-[#D4AF37]/40
            hover:bg-white/[0.05]
          "
        >
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-[#D4AF37]
              text-black
            "
          >
            <Mail size={28} />
          </div>

          <div className="flex-1">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">
              Email
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              beldarnitin940@gmail.com
            </h3>
          </div>

          <ArrowUpRight
            className="
              text-[#D4AF37]
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </a>

        <a
          href="tel:+919876543210"
          className="
            group
            flex
            items-center
            gap-6
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-8
            transition-all
            duration-300
            hover:border-[#D4AF37]/40
            hover:bg-white/[0.05]
          "
        >
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-[#D4AF37]
              text-black
            "
          >
            <Phone size={28} />
          </div>

          <div className="flex-1">
            <p className="text-sm uppercase tracking-[0.3em] text-white/40">
              Phone
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              +91 9579737086
            </h3>
          </div>

          <ArrowUpRight
            className="
              text-[#D4AF37]
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </a>
      </div>
    </div>
  );
}
