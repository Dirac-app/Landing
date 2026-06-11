type SpotlightProps = {
  className?: string;
  transform?: string;
};

export function Spotlight({ className = "", transform }: SpotlightProps) {
  return (
    <svg
      className={`pointer-events-none absolute z-0 select-none opacity-20 ${className}`}
      style={{ transform }}
      width="560"
      height="480"
      viewBox="0 0 560 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <radialGradient
          id={`sg-${className.replace(/\s/g, "")}`}
          cx="50%"
          cy="0%"
          r="100%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="rgba(249,115,22,0.18)" />
          <stop offset="55%" stopColor="rgba(249,115,22,0.05)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse
        cx="280"
        cy="0"
        rx="280"
        ry="480"
        fill={`url(#sg-${className.replace(/\s/g, "")})`}
      />
    </svg>
  );
}
