"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import portfolio from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm">Copyright {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p>

        <div className="flex items-center gap-5">
          <a href={portfolio.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href={"mailto:" + portfolio.email} className="hover:text-cyan-400 transition" aria-label="Email">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
