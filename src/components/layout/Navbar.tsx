"use client";

import Link from "next/link";
import portfolio from "@/data/portfolio";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          href="/"
          className="text-2xl font-bold tracking-tight hover:text-blue-600 transition"
        >
          Akarsh<span className="text-blue-600">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">

          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>

          <a href="#education" className="hover:text-blue-600 transition">
            Education
          </a>

          <a href="#experience" className="hover:text-blue-600 transition">
            Experience
          </a>

          <a href="#projects" className="hover:text-blue-600 transition">
            Projects
          </a>

          <a href="#skills" className="hover:text-blue-600 transition">
            Skills
          </a>

          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>

        </div>

        <a
          href={portfolio.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-blue-600 text-white px-5 py-2 hover:bg-blue-700 transition"
        >
          Resume
        </a>

      </div>
    </nav>
  );
}