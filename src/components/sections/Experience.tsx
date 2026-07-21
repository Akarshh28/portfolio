"use client";

import { motion, type Variants } from "framer-motion";
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

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-[#070B11]">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
  variants={fadeUp()}
  initial="initial"
  whileInView="whileInView"
  viewport={{ once: true }}
  className="mb-14"
>
          <p className="section-label mb-3">Experience</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Where I&apos;ve <span className="gradient-text">worked</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-cyan-500/20 to-transparent" />

          {portfolio.experience.map((exp, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.1 + i * 0.1)}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-8 top-2 w-3.5 h-3.5 rounded-full border-2 border-cyan-400 bg-[#070B11] shadow-lg shadow-cyan-500/30" />

              {/* Card */}
              <div className="glass glass-hover rounded-2xl border border-white/5 p-7">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      <span className="badge badge-cyan text-xs">{exp.type}</span>
                    </div>
                    <p className="text-cyan-400 font-medium text-sm">{exp.company}</p>
                  </div>
                  <span className="text-xs text-slate-500 font-medium bg-white/5 px-3 py-1.5 rounded-full whitespace-nowrap h-fit">
                    {exp.duration}
                  </span>
                </div>

                {/* Project */}
                <div className="mb-5 pl-3 border-l-2 border-cyan-500/30">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Project</p>
                  <p className="text-slate-300 text-sm font-medium">{exp.project}</p>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3 mb-6">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                      <span className="text-cyan-500 mt-1 shrink-0">→</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech used */}
                <div>
                  <p className="text-xs text-slate-600 mb-2 uppercase tracking-wider">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="badge badge-blue text-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}