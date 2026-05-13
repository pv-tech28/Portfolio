"use client";

import { motion } from "framer-motion";

export default function FloatingPV() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      onClick={scrollToBottom}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 0 30px rgba(0, 242, 255, 0.4)",
        borderColor: "rgba(0, 242, 255, 0.6)"
      }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 left-8 z-[90] w-14 h-14 rounded-full glass border border-gray-200 dark:border-white/10 flex items-center justify-center group transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
    >
      <div className="flex items-center gap-0.5 text-base font-bold tracking-tighter">
        <span className="text-gray-900 dark:text-white group-hover:text-primary-neon transition-colors">PV</span>
        <span className="text-primary-neon">.</span>
      </div>
      
      {/* Subtle Glow Ring */}
      <div className="absolute inset-0 rounded-full border border-primary-neon/10 animate-pulse-slow" />
      <div className="absolute -inset-1 rounded-full border border-primary-neon/5 blur-sm" />
    </motion.button>
  );
}
