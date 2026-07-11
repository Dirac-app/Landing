import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonTone = "light" | "dark";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs rounded-md",
  md: "h-11 px-5 text-xs rounded-md",
  lg: "h-12 px-6 text-sm rounded-md",
};

const variantClasses: Record<ButtonVariant, Record<ButtonTone, string>> = {
  primary: {
    light: "bg-ink text-white hover:bg-ink/90",
    dark: "bg-white text-ink hover:bg-white/90",
  },
  secondary: {
    light: "border border-ink/20 bg-transparent text-ink hover:border-ink/40",
    dark: "border border-white/30 bg-transparent text-white hover:border-white/50",
  },
  ghost: {
    light: "text-muted hover:text-ink",
    dark: "text-white/60 hover:text-white",
  },
  link: {
    light: "text-muted hover:text-ink underline-offset-4 hover:underline",
    dark: "text-white/50 hover:text-white/80 underline-offset-4 hover:underline",
  },
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-sans font-semibold uppercase tracking-[0.08em] transition-colors duration-200 disabled:pointer-events-none disabled:opacity-40";

export function buttonClassName({
  variant = "primary",
  size = "md",
  tone = "light",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  tone?: ButtonTone;
  className?: string;
}) {
  return cn(
    baseClasses,
    variant === "link" || variant === "ghost" ? "h-auto px-0 normal-case tracking-normal" : sizeClasses[size],
    variantClasses[variant][tone],
    className,
  );
}

type SharedButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  tone?: ButtonTone;
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsAnchor = SharedButtonProps &
  Omit<React.ComponentPropsWithoutRef<"a">, keyof SharedButtonProps> & {
    href: string;
  };

type ButtonAsButton = SharedButtonProps &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof SharedButtonProps> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsAnchor | ButtonAsButton;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    { href, variant = "primary", size = "md", tone = "light", className, children, ...props },
    ref,
  ) {
    const classes = buttonClassName({ variant, size, tone, className });

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...(props as React.ComponentPropsWithoutRef<"a">)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        className={classes}
        {...(props as React.ComponentPropsWithoutRef<"button">)}
      >
        {children}
      </button>
    );
  },
);
