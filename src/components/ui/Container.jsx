"use client";

export default function Container({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        mx-auto
        w-full
        max-w-[1360px]

        px-6
        sm:px-8
        lg:px-16
        xl:px-20

        ${className}
      `}
    >
      {children}
    </div>
  );
}