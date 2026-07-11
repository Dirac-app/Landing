import { cn } from "@/lib/utils";

type SiteContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
  id?: string;
};

export function SiteContainer({
  children,
  className,
  as: Tag = "div",
  id,
}: SiteContainerProps) {
  return (
    <Tag id={id} className={cn("mx-auto w-full max-w-6xl px-5 md:px-8", className)}>
      {children}
    </Tag>
  );
}
