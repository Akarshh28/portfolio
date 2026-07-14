"use client";

import { motion } from "framer-motion";
import portfolio from "@/data/portfolio";

const categories = [
  {
    title: "Languages",
    items: ["Python", "C"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "OpenCV", "YOLO"],
  },
  {
    title: "Developer Tools",
    items: ["Jupyter Notebook", "VS Code", "Git", "Linux"],
  },
  {
    title: "Security Tools",
    items: ["Ghidra", "Binwalk"],
  },
  {
    title: "Cloud / Databases",
    items: ["MySQL", "CSV/Excel Data Handling"],
  },
  {
    title: "Hardware",
    items: ["Arduino"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border border-slate-800 p-6"
            >
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, j) => (
                  <span
                    key={j}
                    className="text-sm bg-slate-800 text-slate-300 px-3 py-1.5 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-slate-300 mb-3 text-center">
            Areas of Interest
          </h3>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            {portfolio.skills.length > 0
              ? "Machine Learning, Data Analytics, AI-based Projects, Electronics and Embedded Systems"
              : ""}
          </p>
        </motion.div>
      </div>
    </section>
  );
}