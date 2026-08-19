"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., 2.5 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#04070B] overflow-hidden"
        >
          {/* Subtle tech background grid for loader */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(6, 182, 212, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'
            }}
          />

          {/* Central Logo Container */}
          <div className="relative flex flex-col items-center justify-center">
            
            {/* AP Logo Text with glowing effect */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 tracking-tighter">
                AP
              </h1>
              
              {/* Glowing blur behind AP */}
              <div className="absolute inset-0 blur-xl bg-cyan-500/30 -z-10 animate-pulse rounded-full" />
              
              {/* Scanning line effect over AP */}
              <motion.div
                initial={{ top: "-10%" }}
                animate={{ top: "110%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-0.5 bg-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.8)] z-10"
              />
            </motion.div>

            {/* Loading text */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 flex flex-col items-center gap-3"
            >
              <span className="text-cyan-400/80 text-sm tracking-[0.3em] font-medium uppercase">
                System Initializing
              </span>
              
              {/* Progress bar */}
              <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-cyan-500 to-blue-500"
                />
              </div>
              
              {/* Percentage (fake counter) */}
              <motion.div 
                className="text-slate-500 text-xs font-mono mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                [ loading modules... ]
              </motion.div>
            </motion.div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
