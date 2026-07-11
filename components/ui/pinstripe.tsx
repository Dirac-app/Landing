import { cn } from "@/lib/utils";

type PinstripeProps = {
  className?: string;
};

export function Pinstripe({ className }: PinstripeProps) {
  return <div className={cn("pinstripe-band", className)} aria-hidden />;
}
