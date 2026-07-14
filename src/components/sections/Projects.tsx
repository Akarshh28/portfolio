"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "AI-Based Hand Gesture Controlled Robotic Car",
    year: "2025",
    description:
      "Built a Computer Vision-based robotic car using real-time hand gesture recognition. Developed a real-time hand gesture recognition system using OpenCV and MediaPipe to detect finger gestures from a laptop camera, and mapped gestures to robotic car movements via serial communication with Arduino UNO.",
    tools: ["Python", "OpenCV", "MediaPipe", "Arduino UNO", "L298N Motor Driver", "HC-05 Bluetooth"],
    link: "https://github.com/Akarshh28/Hand-Gesture-Controlled-Robotics-Car"
  },
  {
    title: "Linear Regression vs Random Forest - World Happiness Dataset",
    year: "2026",
    description:
      "Compared machine learning regression models for predicting happiness scores using real-world data. Performed data preprocessing, feature engineering, and exploratory data analysis, then evaluated model performance using MAE, MSE, RMSE, and R2 score.",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Jupyter Notebook"],
    link: "https://github.com/Akarshh28/Linear-Regression-Vs-Random-Forest-Comparison-Happiness-Dataset"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col rounded-xl border border-slate-700 p-6 hover:border-cyan-500 transition"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-cyan-400">{project.title}</h3>
                <span className="text-slate-500 text-sm whitespace-nowrap ml-3">{project.year}</span>
              </div>

              <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tools.map((tool, j) => (
                  <span key={j} className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full">{tool}</span>
                ))}
              </div>

              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition text-sm font-medium">
                <FaGithub />
                View on GitHub
                <span className="text-xs"><FaExternalLinkAlt /></span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
