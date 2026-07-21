"use client";

import { motion } from "framer-motion";
import portfolio from "@/data/portfolio";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.6,
    delay,
    ease: [0.25, 0.1, 0.25, 1] as const,
  },
});

export default function Contact() {
  const contactItems = [
    {
      label: "Email",
      value: portfolio.email,
      href: `mailto:${portfolio.email}`,
      icon: "✉️",
    },
    {
      label: "Phone",
      value: portfolio.phone,
      href: `tel:${portfolio.phone.replace(/-/g, "")}`,
      icon: "📞",
    },
    {
      label: "GitHub",
      value: "Akarshh28",
      href: portfolio.github,
      icon: "🐙",
    },
    {
      label: "LinkedIn",
      value: "akarsh-pandey",
      href: portfolio.linkedin,
      icon: "💼",
    },
    {
      label: "Location",
      value: portfolio.location,
      href: "",
      icon: "📍",
    },
    {
      label: "Resume",
      value: "Download PDF",
      href: portfolio.resume,
      icon: "📄",
    },
  ];

  return (
    <section id="contact" className="py-28 px-6 bg-[#0D1117]">
      <div className="max-w-4xl mx-auto">

        <motion.div
          {...fadeUp()}
          className="mb-5"
        >
          <p className="section-label mb-3">
            Contact
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>

        <motion.p
          {...fadeUp(0.1)}
          className="text-slate-400 text-lg mb-14 leading-relaxed"
        >
          Always open to discussing new projects, research collaborations,
          internships, and opportunities in AI/ML, Computer Vision,
          Software Engineering, and Cybersecurity.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {contactItems.map((item, index) => (

            <motion.div
              key={item.label}
              {...fadeUp(index * 0.08)}
            >

              {item.href ? (

                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="glass glass-hover rounded-2xl border border-white/5 p-5 flex gap-4"
                >
                  <span className="text-2xl">
                    {item.icon}
                  </span>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      {item.label}
                    </p>

                    <p className="text-white font-medium mt-1">
                      {item.value}
                    </p>
                  </div>
                </a>

              ) : (

                <div className="glass rounded-2xl border border-white/5 p-5 flex gap-4">

                  <span className="text-2xl">
                    {item.icon}
                  </span>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      {item.label}
                    </p>

                    <p className="text-white font-medium mt-1">
                      {item.value}
                    </p>
                  </div>

                </div>

              )}

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}