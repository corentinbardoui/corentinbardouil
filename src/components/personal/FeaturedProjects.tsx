"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/personal-content";
import { useLang } from "@/lib/language";
import { t } from "@/data/translations";

function TechTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono text-muted-foreground/70 bg-white/4 border border-white/6">
      {label}
    </span>
  );
}

function HighlightItem({ label }: { label: string }) {
  return (
    <li className="flex items-start gap-2 text-sm text-muted-foreground">
      <span className="mt-[6px] size-1 rounded-full bg-[oklch(0.63_0.22_265/60%)] shrink-0" />
      {label}
    </li>
  );
}

type MergedProject = (typeof projects)[number] & {
  subtitle: string;
  description: string;
  highlights: string[];
  status: string;
};

function FlagshipCard({ project }: { project: MergedProject }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      className="card-glow relative rounded-2xl border border-white/8 bg-card p-8 md:p-10 hover:border-white/14 transition-colors"
    >
      <div className="grid md:grid-cols-[1fr_280px] gap-10">
        <div className="space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-[oklch(0.63_0.22_265/12%)] text-[oklch(0.75_0.18_265)] border border-[oklch(0.63_0.22_265/20%)]">
                <span className="relative flex size-1.5">
                  <span className="animate-ping absolute inline-flex size-full rounded-full bg-[oklch(0.75_0.18_265)] opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-[oklch(0.75_0.18_265)]" />
                </span>
                {project.status}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{project.name}</h3>
            <p className="text-muted-foreground font-medium">{project.subtitle}</p>
          </div>
          <p className="text-muted-foreground/80 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => <TechTag key={tech} label={tech} />)}
          </div>
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50 mb-4">Highlights</p>
          <ul className="space-y-3">
            {project.highlights.map((h) => <HighlightItem key={h} label={h} />)}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function FeaturedCard({ project }: { project: MergedProject }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      className="card-glow relative rounded-2xl border border-white/8 bg-card p-8 md:p-10 hover:border-white/14 transition-colors"
    >
      <div className="grid md:grid-cols-[1fr_280px] gap-10">
        {/* Left — content */}
        <div className="space-y-6">
          <div className="space-y-1">
            <div className="mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-[oklch(0.72_0.19_45/10%)] text-[oklch(0.82_0.15_45)] border border-[oklch(0.72_0.19_45/20%)]">
                {project.status}
              </span>
            </div>
            <div className="flex items-baseline gap-4">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{project.name}</h3>
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-muted-foreground/50 hover:text-foreground transition-colors"
                >
                  View app ↗︎
                </a>
              )}
            </div>
            <p className="text-muted-foreground font-medium">{project.subtitle}</p>
          </div>
          <p className="text-muted-foreground/80 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => <TechTag key={tech} label={tech} />)}
          </div>
        </div>

        {/* Right — highlights + images */}
        <div className="space-y-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50 mb-4">Highlights</p>
            <ul className="space-y-3">
              {project.highlights.map((h) => <HighlightItem key={h} label={h} />)}
            </ul>
          </div>
          {project.images.length > 0 && (
            <div className="space-y-2">
              {project.images.map((src, i) => (
                <div key={i} className="relative rounded-lg overflow-hidden border border-white/6 aspect-video">
                  <img src={src} alt={`${project.name} ${i + 1}`} className="w-full h-full object-cover object-top" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function MvpCard({ project, index }: { project: MergedProject; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      className="card-glow flex flex-col rounded-xl border border-white/8 bg-card hover:border-white/14 transition-colors overflow-hidden"
    >
      <div className="flex flex-col flex-1 p-6 space-y-4">
        <div>
          <span className="text-xs font-mono text-muted-foreground/50">{project.status}</span>
          <div className="flex items-start justify-between gap-3 mt-1">
            <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-xs font-mono text-muted-foreground/50 hover:text-foreground transition-colors pt-0.5"
              >
                View app ↗︎
              </a>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-1">{project.subtitle}</p>
        </div>

        {project.images[0] && (
          <div className="relative rounded-lg overflow-hidden border border-white/6 h-40">
            <img
              src={project.images[0]}
              alt={project.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        )}

        <p className="text-sm text-muted-foreground/70 leading-relaxed flex-1">{project.description}</p>
        <ul className="space-y-2">
          {project.highlights.map((h) => <HighlightItem key={h} label={h} />)}
        </ul>
      </div>

      <div className="flex flex-wrap gap-1.5 px-6 pb-6">
        {project.tech.map((tech) => <TechTag key={tech} label={tech} />)}
      </div>
    </motion.div>
  );
}

export function FeaturedProjects() {
  const { lang } = useLang();
  const tr = t[lang].projects;

  const mergedProjects = projects.map((p, i) => ({
    ...p,
    ...tr.items[i],
  })) as MergedProject[];

  const flagship = mergedProjects.find((p) => p.variant === "flagship")!;
  const featured = mergedProjects.find((p) => p.variant === "featured")!;
  const mvps = mergedProjects.filter((p) => p.variant === "mvp");

  return (
    <section id="projects" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start mb-6">
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono uppercase tracking-widest text-muted-foreground/60"
          >
            {tr.label}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground"
          >
            {tr.sub}
          </motion.p>
        </div>

        <FlagshipCard project={flagship} />
        <FeaturedCard project={featured} />

        <div className="grid gap-4 md:grid-cols-3">
          {mvps.map((project, i) => (
            <MvpCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
