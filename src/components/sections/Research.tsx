"use client";

import { motion } from "framer-motion";
import portfolio from "@/data/portfolio";

const fadeUp = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function Research() {
  return (
    <section id="research" className="py-28 px-6 bg-[#070B11]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div {...fadeUp()} className="mb-14">
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
