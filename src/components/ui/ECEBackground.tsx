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

      {/* Intricate Mathematical Grid / Mesh Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(240, 240, 240, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(240, 240, 240, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      />

      {/* Floating Mathematical Equations and Engineering Geometries */}
      {mounted && (
        <svg className="absolute inset-0 w-full h-full z-0 opacity-50" preserveAspectRatio="none" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mathGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F0F0F0" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#F0F0F0" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#F0F0F0" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="mathGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D0D0D0" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#D0D0D0" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#D0D0D0" stopOpacity="0.1" />
            </linearGradient>
            <filter id="glowMath">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Interwoven Geometric Lines (Architectural/Data Mesh) */}
          <motion.path
            d="M 100 800 L 400 400 L 700 600 L 1000 200 L 1300 500 L 1600 100"
            fill="none"
            stroke="url(#mathGradient1)"
            strokeWidth="1"
            initial={{ strokeDasharray: "2000 0", opacity: 0 }}
            animate={{ strokeDasharray: "0 2000", opacity: 0.8 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />

          <motion.path
            d="M -100 200 L 300 500 L 600 300 L 900 700 L 1200 400 L 1500 800"
            fill="none"
            stroke="url(#mathGradient2)"
            strokeWidth="1"
            initial={{ strokeDasharray: "0 2000", opacity: 0 }}
            animate={{ strokeDasharray: "2000 0", opacity: 0.6 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Complex Parametric Curve (Lissajous / Mathematical feel) */}
          <motion.path
            d="M 200 400 C 400 200, 600 600, 800 400 C 1000 200, 1200 600, 1400 400"
            fill="none"
            stroke="url(#mathGradient1)"
            strokeWidth="0.5"
            opacity="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />

          {/* Floating Math Symbols */}
          <g fill="#F0F0F0" opacity="0.4" fontFamily="serif" fontStyle="italic" fontSize="24" filter="url(#glowMath)">
            {/* Integral */}
            <motion.text x="250" y="300" animate={{ y: [300, 280, 300], opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>∫ f(x)dx</motion.text>
            
            {/* Summation */}
            <motion.text x="1100" y="200" fontSize="32" animate={{ y: [200, 220, 200], opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}>∑</motion.text>
            <motion.text x="1125" y="190" fontSize="14" animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}>∞</motion.text>
            <motion.text x="1125" y="225" fontSize="14" animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}>n=0</motion.text>
            
            {/* Gradient / Nabla */}
            <motion.text x="800" y="650" animate={{ y: [650, 630, 650], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}>∇ × E = -∂B/∂t</motion.text>
            
            {/* Matrix / Vector notation placeholder */}
            <motion.text x="400" y="700" animate={{ y: [700, 715, 700], opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>W^T X + b</motion.text>
            
            {/* Euler's Formula */}
            <motion.text x="1200" y="550" animate={{ y: [550, 530, 550], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}>e^(iπ) + 1 = 0</motion.text>
          </g>

          {/* Grid Nodes (Geometric intersection points) */}
          <motion.circle cx="400" cy="400" r="2" fill="#F0F0F0" animate={{ opacity: [0.1, 0.8, 0.1], r: [1.5, 3, 1.5] }} transition={{ duration: 4, repeat: Infinity }} />
          <motion.circle cx="700" cy="600" r="2" fill="#F0F0F0" animate={{ opacity: [0.1, 0.6, 0.1] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} />
          <motion.circle cx="1000" cy="200" r="2" fill="#F0F0F0" animate={{ opacity: [0.1, 0.9, 0.1], r: [2, 4, 2] }} transition={{ duration: 5, repeat: Infinity, delay: 2 }} />
          
        </svg>
      )}

      {/* Spotlights for Depth & Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-white/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
    </div>
  );
}
