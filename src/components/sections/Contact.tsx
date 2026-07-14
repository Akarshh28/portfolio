"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import portfolio from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-950 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-300 mb-10"
        >
          I am always open to discussing new projects, research opportunities,
          or just having a conversation about AI, ML, and embedded systems.
          Feel free to reach out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-5"
        >
          <a href={"mailto:" + portfolio.email} className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold hover:bg-cyan-400 transition">
            <FaEnvelope />
            Email
          </a>

          <a href="tel:+918400726094" className="flex items-center gap-2 rounded-xl border border-slate-600 px-6 py-3 hover:bg-slate-800 transition">
            <FaPhone />
            +91-8400726094
          </a>

          <a href={portfolio.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl border border-slate-600 px-6 py-3 hover:bg-slate-800 transition">
            <FaGithub />
            GitHub
          </a>

          <a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl border border-slate-600 px-6 py-3 hover:bg-slate-800 transition">
            <FaLinkedin />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
