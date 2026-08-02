"use client";

export default function SkillPill({ icon, name }) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        rounded-full
        border
        border-white/10
        bg-white/[0.04]
        px-6
        py-3
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-[#D4AF37]/40
        hover:bg-[#D4AF37]/10
        hover:-translate-y-1
        shrink-0
      "
    >
      <span className="text-2xl">{icon}</span>

      <span
        className="
          text-[15px]
          font-semibold
          tracking-wide
          text-white
        "
      >
        {name}
      </span>
    </div>
  );
}