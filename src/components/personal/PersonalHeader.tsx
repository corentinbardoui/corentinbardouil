"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { personalNav } from "@/data/personal-content";
import { useLang, type Lang } from "@/lib/language";
import { useTheme } from "@/lib/theme";
import { t } from "@/data/translations";

const LANGS: { value: Lang; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "fr", label: "FR" },
];

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className={cn(
        "flex items-center justify-center size-7 rounded-lg transition-all duration-200",
        "bg-foreground/5 border border-foreground/10",
        "text-muted-foreground hover:text-foreground hover:bg-foreground/8 hover:border-foreground/18"
      )}
    >
      {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
    </button>
  );
}

function LangToggle() {
  const { lang, toggle } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function handleSelect(value: Lang) {
    if (value !== lang) toggle();
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono transition-all duration-200",
          "bg-foreground/5 border border-foreground/10 backdrop-blur-md",
          "text-muted-foreground hover:text-foreground hover:bg-foreground/8 hover:border-foreground/18",
          open && "text-foreground bg-foreground/8 border-foreground/18"
        )}
        aria-label="Switch language"
      >
        {lang.toUpperCase()}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="text-[10px] leading-none opacity-60"
        >
          ▾
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={cn(
              "absolute top-full left-0 mt-2 w-16 rounded-xl overflow-hidden z-50",
              "bg-[oklch(0.12_0.012_265/80%)] light:bg-[oklch(0.97_0.005_265/95%)] backdrop-blur-xl",
              "border border-foreground/10 shadow-[0_8px_32px_oklch(0_0_0/20%)]"
            )}
          >
            {LANGS.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => handleSelect(value)}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 text-xs font-mono transition-colors",
                  value === lang
                    ? "text-foreground bg-white/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                )}
              >
                {label}
                {value === lang && (
                  <span className="size-1 rounded-full bg-[oklch(0.63_0.22_265)]" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PersonalHeader() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const { lang } = useLang();
  const tr = t[lang];

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[oklch(0.08_0.015_265/90%)] light:bg-[oklch(0.98_0.003_265/92%)] backdrop-blur-xl border-b border-white/5 light:border-black/8"
          : "bg-transparent"
      )}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between md:grid md:grid-cols-3">
        <div className="flex items-center gap-2">
          <a
            href="/"
            className="text-sm font-semibold tracking-tight hover:opacity-70 transition-opacity"
          >
            {personalNav.initials}
          </a>
          <LangToggle />
          <ThemeToggle />
        </div>

        <nav className="hidden md:flex items-center justify-center gap-8 text-sm text-muted-foreground">
          {tr.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 justify-self-end">
          <a
            href={personalNav.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src="/github.svg" alt="GitHub" className="size-5 invert opacity-60 hover:opacity-100 transition-opacity" />
          </a>
          <a
            href={personalNav.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src="/linkedin.svg" alt="LinkedIn" className="size-5 invert opacity-60 hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
