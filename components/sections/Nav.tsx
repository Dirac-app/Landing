"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SIGNUP_URL } from "@/lib/urls";

const SCROLL_THRESHOLD = 12;

const links = [
  { href: "#how", label: "How it works" },
  { href: "#product", label: "Features" },
  { href: "#pricing", label: "Pricing" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (scrolled) setMobileOpen(false);
  }, [scrolled]);

  return (
    <nav
      className={cn(
        "nav-shell fixed inset-x-0 top-0 z-50",
        scrolled && "nav-shell--scrolled",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="/" className="shrink-0" aria-label="Dirac home">
          <span className="font-serif text-[1.15rem] font-medium tracking-tight text-ink">
            Dirac
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <Button href={SIGNUP_URL} size="sm">
            Get started
          </Button>
        </div>

        <button
          type="button"
          className="text-ink/70 transition-colors hover:text-ink md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-1 text-sm font-medium text-ink/80"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href={SIGNUP_URL} size="sm" className="mt-2 w-full">
              Get started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
