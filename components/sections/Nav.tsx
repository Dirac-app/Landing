"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 12;

const links = [
  { href: "#product", label: "Product" },
  { href: "#why", label: "Why" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
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

  const linkClass = cn(
    "text-sm font-medium transition-colors duration-300",
    scrolled ? "text-ink/70 hover:text-ink" : "text-white/90 hover:text-white",
  );

  const logoClass = cn(
    "font-serif text-[17px] font-medium tracking-tight transition-colors duration-300",
    scrolled ? "text-ink" : "text-white",
  );

  const menuButtonClass = cn(
    "transition-colors duration-300 md:hidden",
    scrolled ? "text-ink/70 hover:text-ink" : "text-white/90 hover:text-white",
  );

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-3 md:px-6">
      <div
        className={cn(
          "nav-shell mx-auto flex items-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
          scrolled
            ? "nav-shell--glass h-14 w-full max-w-lg justify-between gap-4 rounded-full px-5 md:h-12 md:w-fit md:max-w-none md:justify-center md:gap-7 md:px-7"
            : "h-16 w-full max-w-7xl justify-between",
        )}
      >
        <div
          className={cn(
            "flex min-w-0 items-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
            scrolled
              ? "flex-1 justify-center gap-5 md:flex-none md:gap-7"
              : "flex-1 gap-0",
          )}
        >
          <a href="/" className="group shrink-0" aria-label="Dirac home">
            <span className={logoClass}>Dirac</span>
          </a>

          <div
            className={cn(
              "hidden items-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none md:flex",
              scrolled ? "gap-6" : "ml-14 gap-12",
            )}
          >
            {links.map((link) => (
              <a key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <button
          type="button"
          className={cn(menuButtonClass, "shrink-0", !scrolled && "ml-auto")}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className={cn(
            "mx-auto mt-2 max-w-sm rounded-2xl px-5 py-4 md:hidden",
            scrolled ? "nav-shell--glass" : "border-t border-white/20 bg-black/20 backdrop-blur-md",
          )}
        >
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(linkClass, "py-1")}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
