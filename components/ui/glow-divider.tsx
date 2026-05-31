export function GlowDivider() {
  return (
    <div className="relative w-full" style={{ height: 32 }} aria-hidden>
      {/* Outer soft glow — wide, very diffuse */}
      <div
        className="absolute left-0 right-0"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          height: 24,
          background:
            "radial-gradient(ellipse 60% 100% at 50% 50%, rgba(255,255,255,0.07) 0%, transparent 100%)",
          filter: "blur(6px)",
        }}
      />
      {/* Mid glow — tighter, more visible */}
      <div
        className="absolute left-0 right-0"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          height: 6,
          background:
            "radial-gradient(ellipse 45% 100% at 50% 50%, rgba(255,255,255,0.18) 0%, transparent 100%)",
          filter: "blur(3px)",
        }}
      />
      {/* The actual line */}
      <div
        className="absolute left-0 right-0"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          height: 1,
          background:
            "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.06) 10%, rgba(255,255,255,0.55) 35%, rgba(255,255,255,0.90) 50%, rgba(255,255,255,0.55) 65%, rgba(255,255,255,0.06) 90%, transparent 100%)",
        }}
      />
    </div>
  );
}
