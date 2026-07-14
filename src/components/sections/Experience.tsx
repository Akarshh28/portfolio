"use client";

import { motion } from "framer-motion";

const experience = [
  {
    role: "Project Intern",
    company: "C3iHub, IIT Kanpur",
    duration: "June 2026 – Nov 2026",
    project: "Automated Firmware Analysis on DLMS/COSEM Protocol",
    points: [
      "Worked on research and development of an automated firmware analysis framework for DLMS/COSEM-compliant smart meters used in Advanced Metering Infrastructure (AMI).",
      "Studied firmware architecture and security mechanisms to identify potential vulnerabilities before deployment.",
      "Explored static and dynamic firmware analysis techniques, including reverse engineering, symbolic execution, and fuzz testing.",
      "Developed a proof-of-concept automated firmware analysis pipeline integrating reverse engineering and AI-assisted vulnerability detection.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-xl border border-slate-700 p-8 hover:border-cyan-500 transition"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-2xl font-semibold text-cyan-400">
                  {exp.role} · {exp.company}
                </h3>
                <span className="text-slate-400 text-sm mt-1 md:mt-0">
                  {exp.duration}
                </span>
              </div>

              <p className="text-slate-300 font-medium mb-4">
                Project: {exp.project}
              </p>

              <ul className="list-disc list-inside space-y-2 text-slate-400">
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}