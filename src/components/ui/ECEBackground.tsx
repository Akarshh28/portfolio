"use client";

import { motion } from "framer-motion";

export function ECEBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep Dark Base */}
      <div className="absolute inset-0 bg-[#04070B] z-0" />

      {/* Subtle ECE Grid / Mesh Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
        }}
      />

      {/* Floating Electronic Traces / PCB Lines */}
      <svg className="absolute inset-0 w-full h-full z-0 opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="traceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Trace 1 */}
        <motion.path
          d="M -100 200 L 200 200 L 250 250 L 500 250 L 550 200 L 1200 200"
          fill="none"
          stroke="url(#traceGradient)"
          strokeWidth="1.5"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        
        {/* Trace 2 */}
        <motion.path
          d="M 1200 600 L 800 600 L 750 650 L 400 650 L 350 600 L -100 600"
          fill="none"
          stroke="url(#traceGradient)"
          strokeWidth="1.5"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
        />

        {/* Trace 3 (Sine wave representing communication/signal) */}
        <motion.path
          d="M -100 400 Q 150 300 400 400 T 900 400 T 1400 400"
          fill="none"
          stroke="rgba(59, 130, 246, 0.4)"
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Circuit Nodes */}
        <motion.circle cx="200" cy="200" r="3" fill="#06B6D4" filter="url(#glow)" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.circle cx="500" cy="250" r="4" fill="#3B82F6" filter="url(#glow)" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 3, repeat: Infinity }} />
        <motion.circle cx="800" cy="600" r="3" fill="#06B6D4" filter="url(#glow)" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.5, repeat: Infinity }} />
        <motion.circle cx="400" cy="650" r="4" fill="#3B82F6" filter="url(#glow)" animate={{ opacity: [0.2, 0.7, 0.2] }} transition={{ duration: 1.5, repeat: Infinity }} />
      </svg>

      {/* Spotlights for Depth & Lighting */}
      <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] mix-blend-screen" />
      <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen" />
    </div>
  );
}
