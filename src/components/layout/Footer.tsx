"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";
import portfolio from "@/data/portfolio";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#070B11] border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Branding */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="text-sm font-semibold text-white/70">
            Akarsh<span className="text-cyan-400">.</span>
          </span>
          <span className="text-xs text-slate-600 ml-2">
            © {new Date().getFullYear()} • Designed & Developed by Akarsh Pandey
          </span>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-5">
          <a
            href={portfolio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={portfolio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={`mailto:${portfolio.email}`}
            className="text-slate-600 hover:text-white transition-colors duration-200"
            aria-label="Email"
          >
            <FaEnvelope size={18} />
          </a>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollTop}
          className="flex items-center gap-2 text-xs text-slate-600 hover:text-cyan-400 transition-colors duration-200 group"
          aria-label="Back to top"
        >
          Back to top
          <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white/10 group-hover:border-cyan-400/40 transition-colors duration-200">
            <HiArrowUp size={12} />
          </span>
        </button>
      </div>
    </footer>
  );
}
