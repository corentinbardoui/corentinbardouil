"use client";

import { motion } from "framer-motion";
import { personalAbout } from "@/data/personal-content";
import { useLang } from "@/lib/language";
import { t } from "@/data/translations";

export function PersonalAbout() {
  const { lang } = useLang();
  const tr = t[lang].about;

  return (
    <section id="about" className="py-24 px-6 border-t border-white/5">
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

          <div className="space-y-8">
            <div className="space-y-5">
              {tr.paragraphs.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
                  className={
                    paragraph === tr.emphasis
                      ? "text-xl font-semibold text-foreground"
                      : "text-base text-muted-foreground leading-relaxed"
                  }
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
