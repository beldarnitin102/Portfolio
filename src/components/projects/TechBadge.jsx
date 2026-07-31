"use client";

export default function TechBadge({ children }) {
  return (
    <span
      className="
        rounded-full
        border
        border-[#D4AF37]/20
        bg-[#D4AF37]/10

        px-4
        py-1.5

        text-sm
        font-medium
        text-[#D4AF37]

        transition-all
        duration-300

        hover:bg-[#D4AF37]
        hover:text-black
      "
    >
      {children}
    </span>
  );
}