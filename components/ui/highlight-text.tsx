import { cn } from "@/lib/utils";

type HighlightTextProps = {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p" | "div";
};

export function HighlightText({
  children,
  className,
  as: Tag = "span",
}: HighlightTextProps) {
  return (
    <Tag className={cn("editorial-highlight", className)}>{children}</Tag>
  );
}
