"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-slate-300 leading-8 text-center mb-12"
        >
          I&apos;m an Electronics and Communication Engineering student at
          Bundelkhand Institute of Engineering and Technology, Jhansi, with a
          strong interest in Artificial Intelligence, Machine Learning,
          Computer Vision, and Firmware Security. I enjoy building projects
          that combine hardware and software, and I&apos;m currently exploring
          firmware security research for Advanced Metering Infrastructure.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-slate-800 p-6 text-center"
          >
            <p className="text-3xl font-bold text-cyan-400">7.72</p>
            <p className="text-slate-400 mt-2">CGPA (till 4th sem)</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-slate-800 p-6 text-center"
          >
            <p className="text-3xl font-bold text-cyan-400">2+</p>
            <p className="text-slate-400 mt-2">Projects Built</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl border border-slate-800 p-6 text-center"
          >
            <p className="text-3xl font-bold text-cyan-400">1</p>
            <p className="text-slate-400 mt-2">Research Internship</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}