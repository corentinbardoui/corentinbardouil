"use client";

import { motion } from "framer-motion";
import { heroData, navData } from "@/data/site-content";

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] as const },
  };
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">

      {/* Background orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="orb-1 absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,oklch(0.63_0.22_265/0.18),transparent_70%)]" />
        <div className="orb-2 absolute top-1/3 -right-60 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.72_0.19_45/0.12),transparent_70%)]" />
        <div className="orb-3 absolute -bottom-20 left-1/3 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,oklch(0.63_0.22_265/0.10),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(oklch(1 0 0 / 1) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">

        {/* Badge */}
        <motion.div {...fadeUp(0)}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.63_0.22_265/30%)] bg-[oklch(0.63_0.22_265/10%)] px-4 py-1.5 text-xs font-medium text-[oklch(0.78_0.16_265)] tracking-wide">
            <span className="size-1.5 rounded-full bg-[oklch(0.78_0.16_265)] animate-pulse" />
            {heroData.tagline}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.1]"
        >
          Le trait d&apos;union entre{" "}
          <span className="gradient-text">l&apos;analyse</span>
          {" "}et{" "}
          <span className="gradient-text">l&apos;action.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          {heroData.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href={navData.ctaHref} className="btn-gradient btn-gradient-lg btn-gradient-glow">
            {navData.cta}
          </a>
          <a
            href={heroData.ctaHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            {heroData.cta}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-wrap items-center justify-center gap-10 pt-6 border-t border-border/30"
        >
          {[
            { value: "3+", label: "secteurs d'intervention" },
            { value: "IA", label: "ingénierie sur-mesure" },
            { value: "360°", label: "de la stratégie au code" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold gradient-text">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
