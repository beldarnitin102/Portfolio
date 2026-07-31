"use client";

import Image from "next/image";

export default function BrowserMockup({ image }) {
  return (
    <div
      className="
        overflow-hidden
        border-b
        border-white/10
        bg-[#0B0E12]
      "
    >
      <div
        className="
          flex
          items-center
          gap-2
          bg-[#111318]
          px-5
          py-3
        "
      >
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
      </div>

      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={image}
          alt="Project preview"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 32vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </div>
  );
}