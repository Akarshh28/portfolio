"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { ECEBackground } from "@/components/ui/ECEBackground";

export function GlobalBackground() {
  const { scrollY } = useScroll();

  // Fade from 90% opacity at top to 15% opacity after scrolling 800px down
  const opacity = useTransform(scrollY, [0, 800], [0.9, 0.15]);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      {/* Base radial gradient background always visible */}
      <div
        className="absolute inset-0 bg-[#0A0A0A]"
        style={{
          background: 'radial-gradient(circle at top center, #1A1A1D 0%, #050505 100%)'
        }}
      />

      <motion.div
        style={{ opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <img
          src="/profile.png"
          alt="Background Portrait"
          className="w-full h-[80vh] object-cover object-top opacity-30 mix-blend-luminosity"
          style={{
            maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
            filter: 'contrast(1.2)'
          }}
        />
      </motion.div>

      {/* The elegant sweeping curves graphic that fades on scroll */}
      <motion.div style={{ opacity }} className="absolute inset-0 pointer-events-none">
        <ECEBackground isGlobal={true} />
      </motion.div>

      {/* A dark linear gradient to ensure bottom sections are extremely readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A] pointer-events-none" />
    </div>
  );
}
