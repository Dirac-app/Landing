type SectionEyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionEyebrow({ children, className = "" }: SectionEyebrowProps) {
  return (
    <p
      className={`text-xs text-muted uppercase tracking-widest font-medium ${className}`}
    >
      {children}
    </p>
  );
}
