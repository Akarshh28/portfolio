"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import portfolio from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white px-6">

      <div className="max-w-6xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-slate-300"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-2 text-6xl md:text-8xl font-extrabold"
        >
          {portfolio.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="mt-6 text-2xl md:text-4xl text-cyan-400 font-semibold"
        >
          <TypeAnimation
            sequence={[
              "AI & ML Enthusiast",
              1800,
              "Computer Vision Developer",
              1800,
              "Firmware Security Researcher",
              1800,
              "Aspiring Software Engineer",
              1800,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="mt-8 max-w-3xl mx-auto text-slate-300 text-lg leading-8"
        >
          {portfolio.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10"
        >
          <div className="inline-block rounded-full border border-cyan-500 px-6 py-3 text-cyan-300">
            {portfolio.role}
          </div>

          <p className="mt-4 text-slate-400">
            {portfolio.internship}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >

          <a
            href={portfolio.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-3 font-semibold hover:bg-cyan-400 transition"
          >
            <FaDownload />
            Resume
          </a>

          <a
            href={portfolio.github}
            target="_blank"
            className="flex items-center gap-2 rounded-xl border border-slate-600 px-7 py-3 hover:bg-slate-800 transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={portfolio.linkedin}
            target="_blank"
            className="flex items-center gap-2 rounded-xl border border-slate-600 px-7 py-3 hover:bg-slate-800 transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>

        </motion.div>

      </div>

    </section>
  );
}