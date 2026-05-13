"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-black/20 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-2xl font-bold tracking-tighter group"
        >
          <span className="text-white group-hover:text-primary-neon transition-colors">PV</span>
          <span className="text-primary-neon">.</span>
        </motion.button>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Pratha Varshney. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a href="#skills" className="text-sm text-gray-400 hover:text-primary-neon transition-colors">Skills</a>
          <a href="#projects" className="text-sm text-gray-400 hover:text-primary-neon transition-colors">Projects</a>
          <a href="#certificates" className="text-sm text-gray-400 hover:text-primary-neon transition-colors">Certificates</a>
          <a href="#contact" className="text-sm text-gray-400 hover:text-primary-neon transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
