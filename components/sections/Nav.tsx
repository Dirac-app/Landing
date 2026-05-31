"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

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
        {/* Logo */}
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

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm text-white/50 hover:text-white/90 transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-sm text-white/50 hover:text-white/90 transition-colors duration-200"
          >
            About
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#waitlist"
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-orange-500/40 px-5 text-sm font-medium text-orange-400 transition-all duration-200 hover:bg-orange-500/10 hover:border-orange-500/60"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/60 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-white/5 px-6 py-5 flex flex-col gap-4"
          style={{ background: "rgba(0,0,0,0.92)" }}
        >
          <a
            href="#features"
            className="text-sm text-white/60 hover:text-white transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Features
          </a>
          <a
            href="#about"
            className="text-sm text-white/60 hover:text-white transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            About
          </a>
          <a
            href="#waitlist"
            className="inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 text-sm font-semibold text-black mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Join Waitlist
          </a>
        </div>
      )}
    </nav>
  );
}
