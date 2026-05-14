"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { navData } from "@/data/site-content";

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 30));

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[oklch(0.08_0.015_265/85%)] backdrop-blur-xl border-b border-white/5 shadow-[0_1px_30px_oklch(0_0_0/40%)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-sm font-semibold tracking-tight hover:opacity-80 transition-opacity">
          {navData.name}
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {navData.links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <a href={navData.ctaHref} className="btn-gradient btn-gradient-sm btn-gradient-glow">
          {navData.cta}
        </a>
      </div>
    </motion.header>
  );
}
