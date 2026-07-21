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

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 px-6 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div {...fadeUp()} className="mb-14">
          <p className="section-label mb-3">Certifications</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            What I&apos;ve <span className="gradient-text">certified in</span>
          </h2>
        </motion.div>

        {/* Certification cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {portfolio.certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              {...fadeUp(0.07 * i)}
              whileHover={{ y: -3 }}
              className="glass glass-hover rounded-2xl border border-white/5 p-6 flex items-start gap-5 group transition-all duration-300"
            >
              <span className="text-3xl mt-0.5 shrink-0">{cert.icon}</span>
              <div>
                <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-200 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-500 mb-2">{cert.organization}</p>
                <span className="badge badge-cyan text-xs">{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
