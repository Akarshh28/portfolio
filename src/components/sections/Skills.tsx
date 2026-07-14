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
  return (
    <section id="stack" className="py-28 px-6 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          {...fadeUp()}
          className="mb-14"
        >
          <p className="section-label mb-3">
            Technical Stack
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Tools I{" "}
            <span className="gradient-text">
              work with
            </span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.techStack.map((cat, i) => (
            <motion.div
              key={cat.category}
              {...fadeUp(i * 0.05)}
              className="glass glass-hover rounded-2xl border border-white/5 p-6 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">
                  {cat.icon}
                </span>

                <h3 className="text-sm font-semibold text-white">
                  {cat.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:border-cyan-400/40 hover:text-white transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}