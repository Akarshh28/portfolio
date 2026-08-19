"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ECEBackground() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep Dark Base */}
      <div className="absolute inset-0 bg-[#04070B] z-0" />

      {/* Subtle ECE Grid / Mesh Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)'
        }}
      />

      {/* Floating ECE Signals / PCB Lines */}
      {mounted && (
        <svg className="absolute inset-0 w-full h-full z-0 opacity-40" preserveAspectRatio="none" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="traceGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
              <stop offset="20%" stopColor="#06B6D4" stopOpacity="0.5" />
              <stop offset="80%" stopColor="#3B82F6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="traceGradient2" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
              <stop offset="20%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="80%" stopColor="#06B6D4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
            </linearGradient>
            <filter id="glowWave">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Analog Signal (Sine Wave) - Communication */}
          <motion.path
            d="M -100 400 Q 150 250 350 400 T 800 400 T 1250 400 T 1600 400"
            fill="none"
            stroke="url(#traceGradient1)"
            strokeWidth="1.5"
            filter="url(#glowWave)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />

          {/* Analog Signal 2 (Out of phase sine wave) */}
          <motion.path
            d="M -100 450 Q 150 600 350 450 T 800 450 T 1250 450 T 1600 450"
            fill="none"
            stroke="url(#traceGradient2)"
            strokeWidth="1"
            opacity="0.6"
            initial={{ pathLength: 1, opacity: 0 }}
            animate={{ pathLength: 0, opacity: 1 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
          />

          {/* Digital Signal (Square Wave) - Electronics / Microcontrollers */}
          <motion.path
            d="M -100 600 L 200 600 L 200 520 L 400 520 L 400 600 L 700 600 L 700 520 L 900 520 L 900 600 L 1200 600 L 1200 520 L 1400 520 L 1400 600 L 1600 600"
            fill="none"
            stroke="url(#traceGradient1)"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          {/* High-speed PCB Trace (45 degree angled lines) */}
          <motion.path
            d="M 1600 200 L 1200 200 L 1100 300 L 700 300 L 600 200 L 200 200 L 100 300 L -100 300"
            fill="none"
            stroke="url(#traceGradient2)"
            strokeWidth="2"
            filter="url(#glowWave)"
            initial={{ strokeDasharray: "0 2000", opacity: 0 }}
            animate={{ strokeDasharray: "2000 0", opacity: 0.8 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Another PCB trace crossing */}
          <motion.path
            d="M -100 150 L 300 150 L 400 250 L 900 250 L 1000 150 L 1600 150"
            fill="none"
            stroke="url(#traceGradient1)"
            strokeWidth="1"
            opacity="0.5"
            initial={{ strokeDasharray: "2000 0" }}
            animate={{ strokeDasharray: "0 2000" }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Glowing Vias / Nodes at intersections or bends */}
          <motion.circle cx="1100" cy="300" r="4" fill="#06B6D4" filter="url(#glowWave)" animate={{ opacity: [0.3, 1, 0.3], r: [3, 5, 3] }} transition={{ duration: 3, repeat: Infinity }} />
          <motion.circle cx="600" cy="200" r="4" fill="#3B82F6" filter="url(#glowWave)" animate={{ opacity: [0.3, 1, 0.3], r: [3, 5, 3] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }} />
          <motion.circle cx="400" cy="250" r="3" fill="#06B6D4" filter="url(#glowWave)" animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 4, repeat: Infinity }} />
          <motion.circle cx="900" cy="250" r="3" fill="#3B82F6" filter="url(#glowWave)" animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
          
          {/* Signal Pulse travelling along trace */}
          <motion.circle cx="0" cy="0" r="3" fill="#ffffff" filter="url(#glowWave)">
            <animateMotion 
              dur="4s" 
              repeatCount="indefinite"
              path="M 1600 200 L 1200 200 L 1100 300 L 700 300 L 600 200 L 200 200 L 100 300 L -100 300"
            />
          </motion.circle>
        </svg>
      )}

      {/* Spotlights for Depth & Lighting */}
      <div className="absolute top-[10%] left-[20%] w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
    </div>
  );
}
