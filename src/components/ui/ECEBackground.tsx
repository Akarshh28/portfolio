"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function ECEBackground({ isGlobal = false }: { isGlobal?: boolean }) {
  const [mounted, setMounted] = useState(false);
  
  // Parallax setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates from -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Smooth out the mouse movement
  const springConfig = { damping: 30, stiffness: 100, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Inverted parallax: when mouse goes left (-1), curve goes right (+px)
  // Max translation is 40px
  const translateX = useTransform(springX, [-1, 1], [40, -40]);
  const translateY = useTransform(springY, [-1, 1], [40, -40]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${!isGlobal ? 'bg-[#0A0A0A]' : ''}`}>
      {/* Radial Gradient Overlay (Center Lighting Effect) */}
      {!isGlobal && (
        <div 
          className="absolute inset-0 z-0" 
          style={{
            background: 'radial-gradient(circle at center, #1A1A1D 0%, #050505 100%)'
          }}
        />
      )}

      {/* Floating Sweeping Waves / Parametric Curves with Parallax */}
      {mounted && (
        <motion.div 
          className="absolute inset-0 z-0 opacity-50"
          style={{ x: translateX, y: translateY }} // Apply parallax here
        >
          <svg className="w-[110%] h-[110%] -left-[5%] -top-[5%] absolute" preserveAspectRatio="none" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
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

            {/* Existing curves with infinite wave propagation */}
            <motion.path
              fill="none" stroke="url(#waveGradient1)" strokeWidth="1.5" filter="url(#softGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: 1,
                d: [
                  "M -200 600 C 300 800, 800 200, 1600 400",
                  "M -200 550 C 400 700, 700 300, 1600 450",
                  "M -200 600 C 300 800, 800 200, 1600 400"
                ]
              }}
              transition={{ 
                pathLength: { duration: 3, ease: "easeInOut" },
                opacity: { duration: 3, ease: "easeInOut" },
                d: { duration: 12, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.path
              fill="none" stroke="url(#waveGradient2)" strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ 
                pathLength: 1, 
                opacity: 1,
                d: [
                  "M -200 700 C 400 900, 900 300, 1600 600",
                  "M -200 750 C 350 800, 950 400, 1600 550",
                  "M -200 700 C 400 900, 900 300, 1600 600"
                ]
              }}
              transition={{ 
                pathLength: { duration: 4, ease: "easeInOut", delay: 0.5 },
                opacity: { duration: 4, ease: "easeInOut", delay: 0.5 },
                d: { duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
            />
            <motion.path
              fill="none" stroke="url(#waveGradient1)" strokeWidth="1" opacity="0.6"
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ 
                pathLength: 1, 
                opacity: 0.6,
                d: [
                  "M -100 300 C 500 100, 1000 700, 1600 200",
                  "M -100 250 C 550 200, 900 800, 1600 250",
                  "M -100 300 C 500 100, 1000 700, 1600 200"
                ]
              }}
              transition={{ 
                pathLength: { duration: 3.5, ease: "easeInOut", delay: 0.2 },
                opacity: { duration: 3.5, ease: "easeInOut", delay: 0.2 },
                d: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
              }}
            />
            <motion.path
              fill="none" stroke="url(#waveGradient2)" strokeWidth="0.5" opacity="0.8"
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ 
                pathLength: 1, 
                opacity: 0.8,
                d: [
                  "M -100 200 C 600 -100, 1100 600, 1600 100",
                  "M -100 150 C 500 0, 1200 700, 1600 150",
                  "M -100 200 C 600 -100, 1100 600, 1600 100"
                ]
              }}
              transition={{ 
                pathLength: { duration: 4.5, ease: "easeInOut", delay: 0.8 },
                opacity: { duration: 4.5, ease: "easeInOut", delay: 0.8 },
                d: { duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }
              }}
            />
            
            {/* New Additional Curves to make it denser */}
            <motion.path
              fill="none" stroke="url(#waveGradient1)" strokeWidth="0.8" opacity="0.5"
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ 
                pathLength: 1, 
                opacity: 0.5,
                d: [
                  "M -300 400 C 200 200, 800 800, 1500 500",
                  "M -300 450 C 250 100, 750 900, 1500 450",
                  "M -300 400 C 200 200, 800 800, 1500 500"
                ]
              }}
              transition={{ 
                pathLength: { duration: 3.2, ease: "easeInOut", delay: 0.3 },
                opacity: { duration: 3.2, ease: "easeInOut", delay: 0.3 },
                d: { duration: 11, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.path
              fill="none" stroke="url(#waveGradient2)" strokeWidth="1.2" opacity="0.7"
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ 
                pathLength: 1, 
                opacity: 0.7,
                d: [
                  "M 0 800 C 400 300, 1000 200, 1600 700",
                  "M 0 750 C 450 200, 950 100, 1600 650",
                  "M 0 800 C 400 300, 1000 200, 1600 700"
                ]
              }}
              transition={{ 
                pathLength: { duration: 4.2, ease: "easeInOut", delay: 0.6 },
                opacity: { duration: 4.2, ease: "easeInOut", delay: 0.6 },
                d: { duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
            />
            <motion.path
              fill="none" stroke="url(#waveGradient1)" strokeWidth="0.5" opacity="0.9"
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ 
                pathLength: 1, 
                opacity: 0.9,
                d: [
                  "M -100 500 C 600 800, 900 100, 1700 300",
                  "M -100 550 C 650 900, 850 200, 1700 350",
                  "M -100 500 C 600 800, 900 100, 1700 300"
                ]
              }}
              transition={{ 
                pathLength: { duration: 3.8, ease: "easeInOut", delay: 0.4 },
                opacity: { duration: 3.8, ease: "easeInOut", delay: 0.4 },
                d: { duration: 16, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.path
              fill="none" stroke="url(#waveGradient2)" strokeWidth="1.5" opacity="0.4" filter="url(#softGlow)"
              initial={{ pathLength: 0, opacity: 0 }} 
              animate={{ 
                pathLength: 1, 
                opacity: 0.4,
                d: [
                  "M 100 100 C 500 900, 1100 800, 1500 0",
                  "M 100 50 C 450 800, 1150 900, 1500 50",
                  "M 100 100 C 500 900, 1100 800, 1500 0"
                ]
              }}
              transition={{ 
                pathLength: { duration: 5, ease: "easeInOut", delay: 1 },
                opacity: { duration: 5, ease: "easeInOut", delay: 1 },
                d: { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }
              }}
            />

            {/* === ELEMENT 1: PCB Circuit Traces (45/90 degree lines) === */}
            <motion.path
              d="M -100 200 L 200 200 L 250 250 L 500 250 L 550 200 L 1200 200 L 1250 250 L 1600 250"
              fill="none"
              stroke="rgba(6, 182, 212, 0.3)"
              strokeWidth="1.5"
              filter="url(#softGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
            <motion.path
              d="M 1600 600 L 1200 600 L 1150 650 L 800 650 L 750 600 L 300 600 L 250 650 L -100 650"
              fill="none"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="1.5"
              filter="url(#softGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
            />

            {/* === ELEMENT 2: Analog Communication Signals (Sine Waves) === */}
            <motion.path
              d="M -200 300 Q 200 100 600 300 T 1400 300 T 2200 300"
              fill="none"
              stroke="rgba(6, 182, 212, 0.4)" // Cyan tech vibe
              strokeWidth="2"
              strokeDasharray="6 6"
              filter="url(#softGlow)"
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M -200 600 Q 200 800 600 600 T 1400 600 T 2200 600"
              fill="none"
              stroke="rgba(59, 130, 246, 0.4)" // Blue tech vibe
              strokeWidth="1.5"
              strokeDasharray="4 8"
              filter="url(#softGlow)"
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            {/* === ELEMENT 4: Glowing Circuit Nodes (Vias) === */}
            <motion.circle cx="250" cy="250" r="3.5" fill="#06B6D4" filter="url(#softGlow)" animate={{ opacity: [0.1, 0.8, 0.1], scale: [1, 1.5, 1] }} transition={{ duration: 3, repeat: Infinity }} />
            <motion.circle cx="850" cy="700" r="4.5" fill="#3B82F6" filter="url(#softGlow)" animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.3, 1] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} />
            <motion.circle cx="1250" cy="200" r="3" fill="#06B6D4" filter="url(#softGlow)" animate={{ opacity: [0.1, 0.9, 0.1], scale: [1, 1.4, 1] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} />
            <motion.circle cx="550" cy="650" r="2.5" fill="#ffffff" filter="url(#softGlow)" animate={{ opacity: [0.1, 0.6, 0.1] }} transition={{ duration: 3.5, repeat: Infinity }} />
            <motion.circle cx="1050" cy="400" r="3.5" fill="#3B82F6" filter="url(#softGlow)" animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }} />

            {/* === ELEMENT 3: Signal Pulse / Electrons === */}
            {/* Travelling along the first wave */}
            <motion.circle cx="0" cy="0" r="3.5" fill="#ffffff" filter="url(#softGlow)">
              <animateMotion 
                dur="8s" 
                repeatCount="indefinite"
                path="M -200 600 C 300 800, 800 200, 1600 400"
              />
            </motion.circle>

            {/* Travelling along the third wave */}
            <motion.circle cx="0" cy="0" r="3" fill="#06B6D4" filter="url(#softGlow)">
              <animateMotion 
                dur="12s" 
                repeatCount="indefinite"
                path="M -100 300 C 500 100, 1000 700, 1600 200"
                begin="2s"
              />
            </motion.circle>

            {/* Travelling along the dense bottom wave */}
            <motion.circle cx="0" cy="0" r="4" fill="#3B82F6" filter="url(#softGlow)">
              <animateMotion 
                dur="10s" 
                repeatCount="indefinite"
                path="M 0 800 C 400 300, 1000 200, 1600 700"
                begin="1s"
              />
            </motion.circle>
            
            {/* Fast electron travelling back along an analog sine wave */}
            <motion.circle cx="0" cy="0" r="2.5" fill="#06B6D4" filter="url(#softGlow)">
              <animateMotion 
                dur="5s" 
                repeatCount="indefinite"
                path="M 2200 300 T 1400 300 T 600 300 Q 200 100 -200 300" 
              />
            </motion.circle>

          </svg>
        </motion.div>
      )}

      {/* Spotlights for Depth & Lighting */}
      <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute top-[30%] right-[10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
    </div>
  );
}
