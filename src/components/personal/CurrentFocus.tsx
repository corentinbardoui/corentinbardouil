"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/language";
import { t } from "@/data/translations";

export function CurrentFocus() {
  const { lang } = useLang();
  const tr = t[lang].focus;

  return (
    <section id="focus" className="py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/60">
              {tr.label}
            </p>
          </motion.div>

          <div className="space-y-6">
            {tr.paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-3 pt-2"
            >
              <span className="relative flex size-1.5">
                <span className="animate-ping absolute inline-flex size-full rounded-full bg-[oklch(0.63_0.22_265)] opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-[oklch(0.63_0.22_265)]" />
              </span>
              <span className="text-sm font-medium text-foreground/80">
                {tr.building}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
