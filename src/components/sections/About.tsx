"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/data/site-content";

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.63 0.22 265 / 20%), transparent)" }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 lg:sticky lg:top-28"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.63_0.22_265)]">
              À propos
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.15]">
              {aboutData.headline}
            </h2>
          </motion.div>

          {/* Right — story */}
          <div className="space-y-7">
            {aboutData.story.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: i * 0.07,
                  duration: 0.5,
                  ease: [0.22, 0.61, 0.36, 1] as const,
                }}
                className={`text-base leading-[1.9] ${
                  i === 0
                    ? "text-foreground font-medium text-lg"
                    : "text-muted-foreground"
                }`}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
