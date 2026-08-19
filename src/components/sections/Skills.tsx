"use client";

import { motion, type Transition } from "framer-motion";
import portfolio from "@/data/portfolio";

const fadeUp = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 20,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
  },
  transition: {
    duration: 0.6,
    delay,
    ease: [0.25, 0.1, 0.25, 1],
  } satisfies Transition,
});

export default function Skills() {
  const pillars = portfolio.techStack.filter((cat) => cat.highlight);
  const secondary = portfolio.techStack.filter((cat) => !cat.highlight);

  return (
    <section id="stack" className="py-28 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          {...fadeUp()}
          className="mb-14"
        >
          <p className="section-label mb-3">
            Technical Architecture
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Core <span className="gradient-text">Engineering Pillars</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl">
            Specialized toolsets structured around firmware security, embedded systems, and machine learning pipelines.
          </p>
        </motion.div>

        {/* 3 High-Impact Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {pillars.map((cat, i) => (
            <motion.div
              key={cat.category}
              {...fadeUp(i * 0.1)}
              className="glass glass-hover rounded-2xl border border-cyan-500/20 p-7 relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-2xl">
                    {cat.icon}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                    Pillar 0{i + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {cat.category}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1.5 rounded-lg bg-[#1E1E1E] border border-transparent text-slate-300 hover:text-white transition-all duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Developer Tools & Environment */}
        {secondary.map((cat) => (
          <motion.div
            key={cat.category}
            {...fadeUp(0.35)}
            className="glass rounded-2xl border border-white/5 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{cat.icon}</span>
              <h4 className="text-sm font-semibold text-white">{cat.category}</h4>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}