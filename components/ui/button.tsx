import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonTone = "light" | "dark";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-5 text-sm rounded-xl",
  md: "h-12 px-8 text-sm rounded-xl",
  lg: "h-12 px-10 text-base rounded-xl",
};

const variantClasses: Record<ButtonVariant, Record<ButtonTone, string>> = {
  primary: {
    light:
      "bg-[linear-gradient(180deg,var(--color-accent)_0%,#ee8a66_100%)] text-white shadow-[0_2px_12px_rgba(232,113,76,0.28)] hover:bg-accent-hover hover:bg-none",
    dark:
      "bg-[linear-gradient(180deg,var(--color-accent)_0%,#ee8a66_100%)] text-white shadow-[0_2px_12px_rgba(232,113,76,0.28)] hover:bg-accent-hover hover:bg-none",
  },
  secondary: {
    light:
      "border border-border bg-panel text-ink hover:text-muted",
    dark:
      "border border-white/12 bg-transparent text-white/70 hover:text-white/90",
  },
  ghost: {
    light: "text-muted hover:text-ink",
    dark: "text-white/50 hover:text-white/85",
  },
  link: {
    light: "text-muted hover:text-ink underline-offset-4 hover:underline",
    dark: "text-white/45 hover:text-white/75 underline-offset-4 hover:underline",
  },
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-sans font-semibold transition-colors duration-200 disabled:pointer-events-none disabled:opacity-40";

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
    variant === "link" || variant === "ghost" ? "h-auto px-0" : sizeClasses[size],
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
