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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 w-full mt-10 lg:mt-0">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          {/* Status badge */}
          <motion.div {...fadeUp(0.1)} className="flex justify-center lg:justify-start mb-6">
            <span className="badge badge-cyan">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Project Intern @ C3iHub, IIT Kanpur
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.2)}
            className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[var(--text-primary)] mb-4 leading-none"
          >
            Akarsh <span className="gradient-text">Pandey</span>
          </motion.h1>

          {/* Primary Headline Hook */}
          <motion.h2
            {...fadeUp(0.3)}
            className="text-lg sm:text-2xl font-semibold text-[var(--text-primary)] mb-4 leading-snug tracking-tight max-w-2xl"
          >
            AI/ML &amp; Firmware Security Researcher{" "}
            <span className="text-cyan-400 font-normal hidden sm:inline">|</span>{" "}
            <br className="sm:hidden" />
            Project Intern @ <span className="text-cyan-400">C3iHub, IIT Kanpur</span>
          </motion.h2>

          {/* Animated role */}
          <motion.div
            {...fadeUp(0.38)}
            className="min-h-[44px] flex items-center justify-center lg:justify-start text-base sm:text-xl text-cyan-400/90 font-medium mb-8 overflow-visible"
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
            className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed mb-10 max-w-xl text-center lg:text-left"
          >
            {portfolio.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.6)}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <a
              href={portfolio.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-[var(--text-primary)] font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-0.5"
            >
              <FaDownload size={14} />
              View Resume
            </a>

            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-[var(--text-primary)] font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              View Projects
              <FaArrowRight size={12} />
            </a>

            <div className="flex gap-4 sm:ml-2 mt-2 sm:mt-0">
              <a
                href={portfolio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>

              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Portrait Integration */}
        <motion.div 
          {...fadeUp(0.5)}
          className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] flex-shrink-0"
        >
          {/* Deep ambient glow behind portrait */}
          <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-[80px]" />
          
          <div className="relative w-full h-full rounded-full lg:rounded-[3rem] overflow-hidden border border-white/5 bg-white/5 glass" style={{
            maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
          }}>
            {/* The actual image - blended using mix-blend mode and contrast */}
            <img 
              src="/profile.png" /* User will need to add this image to public folder */
              alt="Akarsh Pandey"
              className="w-full h-full object-cover object-center opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700 ease-out"
              style={{ filter: 'contrast(1.1) brightness(1.1)' }}
              onError={(e) => {
                // Fallback if image not found to a placeholder showing instructions
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop";
              }}
            />
          </div>

          {/* Geometric tech framing around portrait */}
          <div className="absolute -inset-4 border border-cyan-500/10 rounded-full lg:rounded-[3.5rem] pointer-events-none" />
          <div className="absolute top-8 -right-4 w-2 h-24 bg-gradient-to-b from-cyan-500/50 to-transparent rounded-full" />
          <div className="absolute -bottom-4 left-8 w-24 h-2 bg-gradient-to-r from-blue-500/50 to-transparent rounded-full" />
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