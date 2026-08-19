"use client";

import { motion, type Variants } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import portfolio from "@/data/portfolio";

const fadeUp = (delay = 0): Variants => ({
  initial: {
    opacity: 0,
    y: 24,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={fadeUp()}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="section-label mb-3">Projects</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Things I&apos;ve <span className="gradient-text">built</span>
          </h2>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {portfolio.projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={fadeUp(0.1 + i * 0.1)}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="glass glass-hover rounded-2xl border border-white/5 p-7 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs text-cyan-400 font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">{project.year}</span>
                    <h3 className="text-xl font-bold text-white mt-2.5 leading-snug group-hover:text-cyan-300 transition-colors duration-200">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">{project.description}</p>

                {/* Engineering highlights */}
                <div className="mb-6">
                  <p className="text-[11px] text-slate-500 uppercase font-semibold tracking-wider mb-3">Engineering Highlights</p>
                  <ul className="space-y-2">
                    {project.highlights.map((h, j) => (
                      <li key={j} className="flex gap-2.5 text-xs text-slate-400 leading-relaxed">
                        <span className="text-cyan-400 font-bold mt-0.5 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                {/* Tech badges */}
                <div className="pt-4 border-t border-white/5 mb-6">
                  <p className="text-[11px] text-slate-500 uppercase font-semibold tracking-wider mb-2.5">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2.5 py-1 rounded-md bg-[#1E1E1E] border border-transparent text-slate-300 hover:text-cyan-300 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap gap-3 items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs border border-white/10 hover:border-cyan-500/40 transition-all duration-200"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub size={14} />
                    <span>View Repository</span>
                  </a>

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-medium text-xs border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-200"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt size={12} />
                      <span>Live Preview</span>
                    </a>
                  ) : (
                    <div
                      className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.02] text-slate-500 text-xs border border-white/5 cursor-not-allowed opacity-60"
                      title="Research / Source available on GitHub"
                    >
                      <FaExternalLinkAlt size={12} />
                      <span>Source Available</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
