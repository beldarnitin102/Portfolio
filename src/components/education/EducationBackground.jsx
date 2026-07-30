"use client";

export default function EducationBackground() {
  return (
    <>
      <div
        className="
          absolute
          inset-0
          bg-[#030712]
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-32
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#D4AF37]/10
          blur-[150px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#708A58]/10
          blur-[130px]
        "
      />
    </>
  );
}