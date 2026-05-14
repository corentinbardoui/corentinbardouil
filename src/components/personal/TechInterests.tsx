"use client";

import { motion } from "framer-motion";
import { techInterests } from "@/data/personal-content";
import { useLang } from "@/lib/language";
import { t } from "@/data/translations";

export function TechInterests() {
  const { lang } = useLang();
  const tr = t[lang].interests;

  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono uppercase tracking-widest text-muted-foreground/60"
          >
            {tr.label}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2.5"
          >
            {techInterests.map((interest, i) => (
              <motion.span
                key={interest}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-sm text-muted-foreground border border-white/8 bg-white/3 hover:border-white/15 hover:text-foreground transition-colors cursor-default"
              >
                {interest}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
