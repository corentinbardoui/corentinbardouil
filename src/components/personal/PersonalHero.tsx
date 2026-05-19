"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/language";
import { t } from "@/data/translations";
import { personalNav } from "@/data/personal-content";

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] as const },
  };
}

export function PersonalHero() {
  const { lang } = useLang();
  const tr = t[lang].hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background orbs + grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="orb-1 absolute -top-40 -left-40 w-150 h-150 rounded-full bg-[radial-gradient(circle,oklch(0.63_0.22_265/0.18),transparent_70%)]" />
        <div className="orb-2 absolute top-1/3 -right-60 w-125 h-125 rounded-full bg-[radial-gradient(circle,oklch(0.72_0.19_45/0.12),transparent_70%)]" />
        <div className="orb-3 absolute -bottom-20 left-1/3 w-100 h-100 rounded-full bg-[radial-gradient(circle,oklch(0.63_0.22_265/0.10),transparent_70%)]" />
        <div className="hero-grid" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 pt-20">
        {/* Status badge */}
        <motion.div {...fadeUp(0)}>
          <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground tracking-wide">
            <span className="relative flex size-1.5">
              <span className="animate-ping absolute inline-flex size-full rounded-full bg-[oklch(0.63_0.22_265)] opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-[oklch(0.63_0.22_265)]" />
            </span>
            {tr.badge}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl sm:text-6xl md:text-[5.5rem] font-bold tracking-[-0.03em] leading-none"
        >
          Corentin Bardouil
        </motion.h1>

        {/* Headline */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto leading-snug"
        >
          {tr.headlinePart1}{" "}
          <br className="hidden sm:block" />
          {tr.headlinePart2}
        </motion.p>

        {/* Sub */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-base md:text-lg text-muted-foreground/60 max-w-lg mx-auto leading-relaxed"
        >
          {tr.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full"
        >
          <a href="#projects" className="btn-gradient btn-gradient-lg btn-gradient-glow w-full sm:w-auto">
            {tr.cta}
          </a>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={personalNav.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 h-11 rounded-full border border-white/10 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors"
            >
              GitHub ↗︎
            </a>
            <a
              href={personalNav.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 h-11 rounded-full border border-white/10 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors"
            >
              LinkedIn ↗︎
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#focus"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
      >
        <span className="text-xs font-mono text-muted-foreground/40 group-hover:text-muted-foreground/70 transition-colors tracking-widest">
          {tr.scroll}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="size-8 rounded-full border border-white/10 group-hover:border-white/25 flex items-center justify-center transition-colors"
        >
          <span className="text-muted-foreground/50 group-hover:text-muted-foreground transition-colors text-sm leading-none">
            ↓
          </span>
        </motion.div>
      </motion.a>
    </section>
  );
}
