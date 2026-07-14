"use client";

import { motion } from "framer-motion";

const education = [
  {
    institution: "Bundelkhand Institute of Engineering and Technology, Jhansi",
    degree: "B.Tech. in Electronics and Communication Engineering",
    duration: "2024 - Present",
    detail: "CGPA: 7.72 (till 4th semester)"
  },
  {
    institution: "The Aryan International School",
    degree: "Intermediate, Central Board of Secondary Education, UP",
    duration: "2023",
    detail: "Percentage: 85"
  },
  {
    institution: "International Hindu School",
    degree: "High School, Central Board of Secondary Education, UP",
    duration: "2021",
    detail: "Percentage: 91"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl font-bold mb-16 text-center">Education</motion.h2>

        <div className="relative border-l-2 border-slate-700 ml-3">
          {education.map((edu, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="relative pl-8 pb-12 last:pb-0">
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-900"></span>
              <span className="text-sm text-cyan-400 font-medium">{edu.duration}</span>
              <h3 className="text-xl font-semibold mt-1">{edu.institution}</h3>
              <p className="text-slate-400 mt-1">{edu.degree}</p>
              <p className="text-slate-500 mt-1 text-sm">{edu.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
