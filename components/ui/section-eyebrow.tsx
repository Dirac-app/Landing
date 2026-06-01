type SectionEyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionEyebrow({ children, className = "" }: SectionEyebrowProps) {
  return (
    <p
      className={`text-xs text-white/30 uppercase tracking-widest font-medium pl-1 ${className}`}
    >
      {children}
    </p>
  );
}
