"use client";

import { motion } from "framer-motion";
import { writingData } from "@/data/personal-content";

export function Writing() {
  return (
    <section id="writing" className="py-24 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono uppercase tracking-widest text-muted-foreground/60"
          >
            Writing
          </motion.p>

          <div className="space-y-0 divide-y divide-white/5">
            {writingData.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
              >
                {post.slug ? (
                  <a
                    href={`/writing/${post.slug}`}
                    className="group flex items-center justify-between py-5 hover:text-foreground transition-colors"
                  >
                    <span className="text-base font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {post.title}
                    </span>
                    <span className="flex items-center gap-3 text-xs font-mono text-muted-foreground/50 flex-shrink-0 ml-6">
                      {post.date}
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center justify-between py-5 opacity-50 cursor-default">
                    <span className="text-base font-medium text-muted-foreground">
                      {post.title}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground/50 flex-shrink-0 ml-6">
                      {post.date}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
