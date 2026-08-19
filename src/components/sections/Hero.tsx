"use client";

import { motion, type Transition } from "framer-motion";
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 flex flex-col items-center justify-center w-full mt-10 lg:mt-0 text-center">

        {/* Status badge */}
        <motion.div {...fadeUp(0.1)} className="flex justify-center mb-6">
          <span className="badge badge-cyan">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Open to Internships & Collaborations
          </span>
        </motion.div>

        {/* Name */}
        <motion.h2
          {...fadeUp(0.2)}
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[var(--text-primary)] mb-6 leading-none"
        >
          Hi, I'm Akarsh <span className="gradient-text">Pandey</span>
        </motion.h2>

        {/* Primary Headline Hook */}
        <motion.h2
          {...fadeUp(0.3)}
          className="text-lg sm:text-2xl font-semibold text-[var(--text-primary)] mb-4 leading-snug tracking-tight max-w-2xl"
        >
          AI/ML &amp; Firmware Security Researcher
        </motion.h2>

        {/* Animated role */}
        <motion.div
          {...fadeUp(0.38)}
          className="min-h-[44px] flex items-center justify-center text-base sm:text-xl text-cyan-400/90 font-medium mb-6 overflow-visible"
        >
          <TypeAnimation
            sequence={[
              "Firmware Security Researcher",
              2200,
              "AI & ML Engineer",
              2200,
              "Computer Vision Developer",
              2200,
              "Embedded Systems Specialist",
              2200,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="inline-block text-cyan-400"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          {...fadeUp(0.45)}
          className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed mb-10 max-w-2xl text-center mx-auto"
        >
          {portfolio.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={portfolio.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3.5 bg-[var(--text-primary)] text-[#0A0A0A] font-semibold rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-white/10 hover:-translate-y-0.5"
          >
            <FaDownload size={14} />
            Download Resume
          </a>

          <a
            href="#projects"
            className="flex items-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 text-[var(--text-primary)] font-semibold rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-3.5 bg-white/5 hover:bg-white/10 text-[var(--text-primary)] font-semibold rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
          >
            Get In Touch
          </a>

          <div className="flex gap-4 mt-4 sm:mt-0 w-full sm:w-auto justify-center">
            <a
              href={portfolio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>

            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-600 tracking-widest uppercase hidden sm:block">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-cyan-500/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}