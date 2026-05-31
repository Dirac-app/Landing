type FeatureAnnotationProps = {
  label: string;
  className?: string;
  style?: React.CSSProperties;
  line?: "left" | "right" | "down" | "up" | "down-left" | "down-right";
  lineLength?: number;
};

export function FeatureAnnotation({
  label,
  className = "",
  style,
  line = "left",
  lineLength = 48,
}: FeatureAnnotationProps) {
  const dotPosition: React.CSSProperties = {
    position: "absolute",
    width: 4,
    height: 4,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.45)",
    transform: "translate(-50%, -50%)",
  };

  const lineEl = (
    <span
      aria-hidden
      style={{
        position: "absolute",
        pointerEvents: "none",
        ...(line === "left" && {
          right: "100%",
          top: "50%",
          width: lineLength,
          height: 1,
          marginRight: 6,
          background:
            "linear-gradient(to left, rgba(255,255,255,0.4), rgba(255,255,255,0.06))",
        }),
        ...(line === "right" && {
          left: "100%",
          top: "50%",
          width: lineLength,
          height: 1,
          marginLeft: 6,
          background:
            "linear-gradient(to right, rgba(255,255,255,0.4), rgba(255,255,255,0.06))",
        }),
        ...(line === "down" && {
          top: "100%",
          left: "50%",
          width: 1,
          height: lineLength,
          marginTop: 6,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.06))",
        }),
        ...(line === "up" && {
          bottom: "100%",
          left: "50%",
          width: 1,
          height: lineLength,
          marginBottom: 6,
          background:
            "linear-gradient(to top, rgba(255,255,255,0.4), rgba(255,255,255,0.06))",
        }),
        ...(line === "down-left" && {
          top: "100%",
          right: "25%",
          width: 1,
          height: lineLength,
          marginTop: 4,
          transform: "rotate(-28deg)",
          transformOrigin: "top center",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.06))",
        }),
        ...(line === "down-right" && {
          top: "100%",
          left: "25%",
          width: 1,
          height: lineLength,
          marginTop: 4,
          transform: "rotate(28deg)",
          transformOrigin: "top center",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.06))",
        }),
      }}
    />
  );

  const dotEl = (
    <span
      aria-hidden
      style={{
        ...dotPosition,
        ...(line === "left" && { right: `calc(100% + ${lineLength + 2}px)`, top: "50%" }),
        ...(line === "right" && { left: `calc(100% + ${lineLength + 2}px)`, top: "50%" }),
        ...(line === "down" && { top: `calc(100% + ${lineLength + 2}px)`, left: "50%" }),
        ...(line === "up" && { bottom: `calc(100% + ${lineLength + 2}px)`, left: "50%" }),
        ...(line === "down-left" && { top: `calc(100% + ${lineLength - 4}px)`, right: "18%" }),
        ...(line === "down-right" && { top: `calc(100% + ${lineLength - 4}px)`, left: "18%" }),
      }}
    />
  );

  return (
    <span className={`absolute z-20 pointer-events-none ${className}`} style={style}>
      <span
        className="relative inline-flex items-center rounded-full border border-white/20 px-3 py-1.5 text-[11px] font-medium tracking-wide text-white/90 whitespace-nowrap"
        style={{
          fontFamily: "var(--font-space-grotesk)",
          background: "rgba(0, 0, 0, 0.75)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.07)",
        }}
      >
        {label}
        {lineEl}
        {dotEl}
      </span>
    </span>
  );
}
