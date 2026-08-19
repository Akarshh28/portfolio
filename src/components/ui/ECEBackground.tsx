"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ECEBackground({ isGlobal = false }: { isGlobal?: boolean }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${!isGlobal ? 'bg-[#0A0A0A]' : ''}`}>
      {/* Radial Gradient Overlay (Center Lighting Effect) - only if not global, else GlobalBackground handles it */}
      {!isGlobal && (
        <div 
          className="absolute inset-0 z-0" 
          style={{
            background: 'radial-gradient(circle at center, #1A1A1D 0%, #050505 100%)'
          }}
        />
      )}

      {/* Floating Sweeping Waves / Parametric Curves */}
      {mounted && (
        <svg className="absolute inset-0 w-full h-full z-0 opacity-40" preserveAspectRatio="none" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="30%" stopColor="#ffffff" stopOpacity="0.15" />
              <stop offset="70%" stopColor="#ffffff" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="30%" stopColor="#ffffff" stopOpacity="0.08" />
              <stop offset="70%" stopColor="#ffffff" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Elegant sweeping curves matching the screenshots */}
          
          <motion.path
            d="M -200 600 C 300 800, 800 200, 1600 400"
            fill="none"
            stroke="url(#waveGradient1)"
            strokeWidth="1.5"
            filter="url(#softGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />

          <motion.path
            d="M -200 700 C 400 900, 900 300, 1600 600"
            fill="none"
            stroke="url(#waveGradient2)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
          />

          <motion.path
            d="M -100 300 C 500 100, 1000 700, 1600 200"
            fill="none"
            stroke="url(#waveGradient1)"
            strokeWidth="1"
            opacity="0.6"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3.5, ease: "easeInOut", delay: 0.2 }}
          />
          
          <motion.path
            d="M -100 200 C 600 -100, 1100 600, 1600 100"
            fill="none"
            stroke="url(#waveGradient2)"
            strokeWidth="0.5"
            opacity="0.8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4.5, ease: "easeInOut", delay: 0.8 }}
          />
          
        </svg>
      )}

      {/* Spotlights for Depth & Lighting */}
      <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute top-[30%] right-[10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
    </div>
  );
}
