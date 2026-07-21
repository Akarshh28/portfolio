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

export default function Education() {
  return (
    <section id="education" className="py-28 px-6 bg-[#0D1117]">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div {...fadeUp()} className="mb-14">
          <p className="section-label mb-3">Education</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Academic <span className="gradient-text">background</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8">
          <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-cyan-500/20 to-transparent" />

          {portfolio.education.map((edu, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.1 + i * 0.1)}
              className="relative mb-10 last:mb-0"
            >
              {/* Dot */}
              <div className="absolute -left-8 top-2 w-3.5 h-3.5 rounded-full border-2 border-cyan-400 bg-[#0D1117] shadow-lg shadow-cyan-500/30" />

              {/* Card */}
              <div className="glass glass-hover rounded-2xl border border-white/5 p-7">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight mb-1">{edu.degree}</h3>
                    <p className="text-cyan-400 text-sm font-medium">{edu.institution}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2 shrink-0">
                    <span className="text-xs text-slate-500 font-medium bg-white/5 px-3 py-1.5 rounded-full whitespace-nowrap">
                      {edu.duration}
                    </span>
                    <span className="badge badge-cyan text-xs w-fit">
                      GPA / Score: {edu.cgpa}
                    </span>
                  </div>
                </div>

                {edu.coursework?.length ? (
                  <div>
                    <p className="text-xs text-slate-600 uppercase tracking-wider mb-3">Key Coursework</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-slate-400"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                ): null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
