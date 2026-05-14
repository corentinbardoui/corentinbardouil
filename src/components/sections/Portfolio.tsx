"use client";

import { motion } from "framer-motion";
import { portfolio, type IaSolution, type MissionConseil } from "@/data/site-content";

function IaCard({ item, index }: { item: IaSolution; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.09, duration: 0.5, ease: [0.22, 0.61, 0.36, 1] as const }}
      className="card-glow group relative flex flex-col gap-4 rounded-2xl border border-white/8 bg-card p-7 hover:bg-[oklch(0.14_0.012_265)] transition-colors duration-300"
    >
      {/* top accent line */}
      <div
        className="absolute top-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.63 0.22 265 / 50%), transparent)" }}
        aria-hidden
      />
      <h3 className="text-base font-semibold">{item.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
    </motion.div>
  );
}

function MissionCard({ item, index }: { item: MissionConseil; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.09, duration: 0.5, ease: [0.22, 0.61, 0.36, 1] as const }}
      className="card-glow group relative flex flex-col gap-3 rounded-2xl border border-white/8 bg-card p-7 hover:bg-[oklch(0.14_0.012_265)] transition-colors duration-300"
    >
      <p className="text-xs font-bold uppercase tracking-widest gradient-text">{item.sector}</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{item.focus}</p>
    </motion.div>
  );
}

function SectionLabel({ label, title }: { label: string; title: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.63_0.22_265)]">
        {label}
      </p>
      <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">{title}</h2>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "oklch(0.10 0.013 265)" }}
    >
      {/* Top / bottom dividers */}
      {["top", "bottom"].map((pos) => (
        <div
          key={pos}
          aria-hidden
          className={`pointer-events-none absolute ${pos}-0 inset-x-0 h-px`}
          style={{ background: "linear-gradient(90deg, transparent, oklch(0.63 0.22 265 / 15%), transparent)" }}
        />
      ))}

      <div className="max-w-6xl mx-auto space-y-24">
        {/* IA Solutions */}
        <div className="space-y-12">
          <SectionLabel
            label="Solutions IA"
            title={<>Ce que je <span className="gradient-text">construis</span></>}
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {portfolio.iaSolutions.map((item, i) => (
              <IaCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Missions Conseil */}
        <div className="space-y-12">
          <SectionLabel
            label="Missions Conseil"
            title={<>Secteurs <span className="gradient-text">d&apos;intervention</span></>}
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {portfolio.missionsConseil.map((item, i) => (
              <MissionCard key={item.sector} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
