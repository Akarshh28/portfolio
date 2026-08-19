"use client";

import { motion, type Variants  } from "framer-motion";
import portfolio from "@/data/portfolio";

const fadeUp = (delay = 0): Variants => ({
  initial: {
    opacity: 0,
    y: 20,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

export default function Research() {
  return (
    <section id="research" className="py-28 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
  variants={fadeUp()}
  initial="initial"
  whileInView="whileInView"
  viewport={{ once: true }}
  className="mb-14"
>
          <p className="section-label mb-3">Research Interests</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Areas I <span className="gradient-text">explore</span>
          </h2>
        </motion.div>

        {/* Research cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.researchInterests.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp(0.06 * i)}
              whileHover={{ y: -3 }}
              className="glass glass-hover rounded-2xl border border-white/5 p-6 group transition-all duration-300"
            >
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="text-sm font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
