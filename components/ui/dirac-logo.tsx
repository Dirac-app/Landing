import Image from "next/image";
import { cn } from "@/lib/utils";

const sizes = {
  sm: 20,
  md: 28,
} as const;

type DiracLogoMarkProps = {
  size?: keyof typeof sizes;
  className?: string;
  priority?: boolean;
};

export function DiracLogoMark({
  size = "md",
  className,
  priority = false,
}: DiracLogoMarkProps) {
  const px = sizes[size];

  return (
    <Image
      src="/dirac-logo.png"
      alt=""
      width={px}
      height={px}
      priority={priority}
      className={cn("shrink-0 object-contain", className)}
      style={{ width: px, height: px }}
    />
  );
}
