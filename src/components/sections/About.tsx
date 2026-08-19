"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.6,
    delay,
    ease: [0.25, 0.1, 0.25, 1] as const,
  },
});

const cards = [
  {
    label: "Introduction",
    icon: "👋",
    content:
      "I'm an Electronics & Communication Engineering student at BIET Jhansi with a strong focus on AI, Machine Learning, Computer Vision, and Cybersecurity. I build projects that bridge hardware and software — from real-time computer vision systems to firmware security research tools.",
  },
  {
    label: "Current Focus",
    icon: "🔬",
    content:
      "Currently a Project Intern at C3iHub, IIT Kanpur — researching automated firmware vulnerability analysis for DLMS/COSEM-compliant smart meters in Advanced Metering Infrastructure (AMI). Building an AI-assisted static analysis pipeline.",
  },
  {
    label: "Interests",
    icon: "⚡",
    content:
      "Deeply interested in the intersection of AI and security. I enjoy reverse engineering, embedded systems programming, building ML pipelines, and deploying real-time computer vision systems on constrained hardware.",
  },
  {
    label: "Goals",
    icon: "🎯",
    content:
      "Aiming to contribute to cutting-edge research in AI-powered cybersecurity and embedded intelligence. Seeking opportunities in AI/ML Engineering, Computer Vision, Software Engineering, and Cybersecurity research roles.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          {...fadeUp()}
          className="mb-14"
        >
          <p className="section-label mb-3">
            About Me
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Building at the edge of{" "}
            <span className="gradient-text">
              AI &amp; Security
            </span>
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp(0.1)}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 glass rounded-2xl border border-white/5 mb-8"
        >
          {[
            {
              value: "CGPA: 7.72",
              label: "Upto 4th sem",
            },
            {
              value: "2+",
              label: "Core Engineering Projects",
            },
            {
              value: "C3iHub",
              label: "Project Intern @ IIT Kanpur",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <p className="text-2xl sm:text-3xl font-bold text-cyan-400">
                {stat.value}
              </p>

              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.label}
              {...fadeUp(0.2 + index * 0.1)}
              className="glass glass-hover rounded-2xl border border-white/5 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">
                  {card.icon}
                </span>

                <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400/70">
                  {card.label}
                </span>
              </div>

              <p className="text-slate-400 leading-7">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}