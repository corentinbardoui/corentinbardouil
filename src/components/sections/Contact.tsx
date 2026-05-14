"use client";

import { motion } from "framer-motion";
import { contactData } from "@/data/site-content";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "oklch(0.10 0.013 265)" }}
    >
      {/* Background orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full"
        style={{ background: "radial-gradient(circle, oklch(0.63 0.22 265 / 8%), transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] as const }}
          className="relative rounded-3xl border border-white/8 bg-card p-12 md:p-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-12 overflow-hidden"
          style={{ boxShadow: "0 0 80px oklch(0.63 0.22 265 / 10%)" }}
        >
          {/* Inner glow corners */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-0 w-64 h-64 rounded-full"
            style={{ background: "radial-gradient(circle at top left, oklch(0.63 0.22 265 / 12%), transparent 60%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-0 w-48 h-48 rounded-full"
            style={{ background: "radial-gradient(circle at bottom right, oklch(0.62 0.22 300 / 10%), transparent 60%)" }}
          />

          <div className="relative space-y-5 max-w-lg">
            <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.63_0.22_265)]">
              Contact
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              {contactData.heading}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {contactData.sub}
            </p>
            <a
              href={`mailto:${contactData.email}`}
              className="inline-block text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              {contactData.email}
            </a>
          </div>

          <a
            href={contactData.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient btn-gradient-lg btn-gradient-glow shrink-0"
          >
            {contactData.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
