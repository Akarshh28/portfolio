"use client";

import { motion, type Variants  } from "framer-motion";
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
    <section id="projects" className="py-28 px-6 bg-[#0D1117]">
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
  className="glass glass-hover rounded-2xl border border-white/5 p-7 flex flex-col group transition-all duration-300"
>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs text-slate-600 font-medium">{project.year}</span>
                  <h3 className="text-lg font-bold text-white mt-1 leading-tight group-hover:text-cyan-300 transition-colors duration-200">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-2 shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/8 hover:border-white/15 transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <FaGithub size={15} />
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-200"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt size={13} />
                    </a>
                  ) : (
                    <span
                      className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/3 text-slate-700 border border-white/5 cursor-not-allowed"
                      title="No live demo"
                    >
                      <FaExternalLinkAlt size={13} />
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

              {/* Engineering highlights */}
              <div className="mb-6 flex-grow">
                <p className="text-xs text-slate-600 uppercase tracking-wider mb-3">Highlights</p>
                <ul className="space-y-2">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2.5 text-xs text-slate-500 leading-relaxed">
                      <span className="text-cyan-500 mt-0.5 shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech badges */}
              <div>
                <p className="text-xs text-slate-600 uppercase tracking-wider mb-2.5">Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-slate-400"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
