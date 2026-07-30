export default function NoiseOverlay() {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-[1]
        opacity-[0.03]
        mix-blend-soft-light
      "
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, white 1px, transparent 1px),
          radial-gradient(circle at 80% 60%, white 1px, transparent 1px),
          radial-gradient(circle at 40% 90%, white 1px, transparent 1px)
        `,
        backgroundSize: "7px 7px",
      }}
    />
  );
}