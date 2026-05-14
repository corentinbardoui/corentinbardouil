"use client";

import { motion } from "framer-motion";
import { services, type Service } from "@/data/site-content";

const nums = ["01", "02", "03"];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.55,
        ease: [0.22, 0.61, 0.36, 1] as const,
      }}
      className="card-glow group relative flex flex-col gap-6 rounded-2xl border border-white/8 bg-card p-8 hover:bg-[oklch(0.14_0.012_265)] transition-colors duration-300"
    >
      {/* Number */}
      <span className="text-xs font-mono font-bold tracking-widest gradient-text">
        {nums[index]}
      </span>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold leading-snug">{service.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </div>

      <ul className="space-y-3 mt-auto">
        {service.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm text-muted-foreground"
          >
            <span
              className="mt-2 size-1 rounded-full shrink-0"
              style={{ background: "oklch(0.63 0.22 265)" }}
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>

      {/* Subtle bottom glow on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.63 0.22 265 / 40%), transparent)" }}
      />
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden">
      {/* Section background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.63 0.22 265 / 20%), transparent)" }}
      />

      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.63_0.22_265)]">
            Mon offre de services
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-2xl">
            Des missions à{" "}
            <span className="gradient-text">fort impact</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
