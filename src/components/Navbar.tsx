"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4",
        isScrolled 
          ? "bg-white/70 dark:bg-black/50 backdrop-blur-xl border-b border-gray-200 dark:border-white/10" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        {/* PV Branding */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-2xl font-bold tracking-tighter group flex items-center gap-1"
        >
          <span className="text-gray-900 dark:text-white group-hover:text-primary-neon transition-colors">PV</span>
          <span className="text-primary-neon">.</span>
        </motion.button>

        {/* Navigation Links & Toggle */}
        <div className="flex items-center gap-4 md:gap-6">
          <a href="#skills" className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-primary-neon transition-colors">Skills</a>
          <a href="#projects" className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-primary-neon transition-colors">Projects</a>
          <a href="#certificates" className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-primary-neon transition-colors">Certificates</a>
          <a href="#contact" className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-primary-neon transition-colors">Contact</a>
          
          <div className="h-4 w-px bg-gray-200 dark:bg-white/10 mx-2" />

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-primary-neon hover:border-primary-neon/50 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
