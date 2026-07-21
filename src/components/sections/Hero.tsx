"use client";

import { motion,  type Transition } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";
import portfolio from "@/data/portfolio";

const fadeUp = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.25, 0.1, 0.25, 1],
  } satisfies Transition,
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#070B11] grid-bg">
      {/* Ambient gradient blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        {/* Status badge */}
        <motion.div {...fadeUp(0.1)} className="flex justify-center mb-8">
          <span className="badge badge-green">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4 leading-[1.05]"
        >
          Akarsh{" "}
          <span className="gradient-text">Pandey</span>
        </motion.h1>

        {/* Animated role */}
        <motion.div {...fadeUp(0.35)} className="text-xl sm:text-2xl text-slate-400 font-medium mb-6 h-9">
          <TypeAnimation
            sequence={[
              "AI & ML Engineer",
              2000,
              "Computer Vision Developer",
              2000,
              "Firmware Security Researcher",
              2000,
              "Embedded Systems Engineer",
              2000,
            ]}
            wrapper="span"
            speed={55}
            repeat={Infinity}
            className="text-cyan-400"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          {...fadeUp(0.45)}
          className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed mb-10"
        >
          {portfolio.description}
        </motion.p>

        {/* Internship badge */}
        <motion.div {...fadeUp(0.5)} className="flex justify-center gap-3 flex-wrap mb-10">
          <span className="badge badge-cyan">
            🔬 {portfolio.role}
          </span>
          <span className="badge badge-blue">
            🏛️ C3iHub · IIT Kanpur
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={portfolio.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-0.5"
          >
            <FaDownload size={14} />
            View Resume
          </a>

          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
          >
            View Projects
            <FaArrowRight size={12} />
          </a>

          <a
            href={portfolio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
          >
            <FaGithub size={16} />
            GitHub
          </a>

          <a
            href={portfolio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
          >
            <FaLinkedin size={16} />
            LinkedIn
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}