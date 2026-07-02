import { cn } from "@/lib/utils";

type PageFrameProps = {
  className?: string;
  children: React.ReactNode;
};

export function PageFrame({ className, children }: PageFrameProps) {
  return <div className={className}>{children}</div>;
}
