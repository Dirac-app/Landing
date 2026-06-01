"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#scenario", label: "Scenario" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#why", label: "Why" },
] as const;

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(0,0,0,0.72)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 group">
          <div
            className="w-7 h-7 rounded-lg border border-white/15 bg-white/5 flex items-center justify-center text-xs text-white/30 font-mono"
            aria-label="Dirac logo placeholder"
          >
            D
          </div>
          <span
            className="text-white text-[17px] font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Dirac
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/50 hover:text-white/90 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#waitlist"
            className="inline-flex h-9 items-center gap-1.5 rounded-full accent-border-outline px-5 text-sm font-medium text-accent transition-all duration-200 hover:bg-accent/10"
          >
            Join Waitlist
          </a>
        </div>

        <button
          className="md:hidden text-white/60 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden border-t border-white/5 px-6 py-5 flex flex-col gap-4"
          style={{ background: "rgba(0,0,0,0.92)" }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="inline-flex h-10 items-center justify-center rounded-full btn-accent px-6 text-sm font-semibold text-black mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Join Waitlist
          </a>
        </div>
      )}
    </nav>
  );
}
