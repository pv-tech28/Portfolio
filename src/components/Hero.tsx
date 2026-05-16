"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Download } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [mounted, setMounted] = useState(false);

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Side: Content */}
        <motion.div
          style={{ y: y1, opacity }}
          className="text-left order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold text-purple-600 dark:text-primary-neon tracking-wider uppercase bg-purple-50 dark:bg-primary/10 border border-purple-200 dark:border-primary-neon/50 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.2)] dark:shadow-[0_0_15px_rgba(0,242,255,0.3)] animate-pulse">
              AVAILABLE FOR INTERNSHIP
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-gray-100 dark:to-gray-400 transition-all duration-700">
                Pratha
              </span>{" "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 dark:from-primary dark:via-primary-neon dark:to-blue-500">
                Varshney
              </span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-2 md:gap-4 mb-8 text-lg md:text-xl font-light tracking-widest text-slate-500 dark:text-gray-400 uppercase transition-colors duration-700"
            >
              <span className="text-slate-600 dark:text-gray-400">Developer</span>
              <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-primary-neon" />
              <span className="text-slate-600 dark:text-gray-400">Problem Solver</span>
              <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-primary-neon" />
              <span className="text-slate-600 dark:text-gray-400">AI Enthusiast</span>
            </motion.div>

            <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-xl mb-12 leading-relaxed transition-colors duration-700">
              Passionate developer focused on building innovative, <span className="text-slate-900 dark:text-white font-semibold transition-colors duration-700 underline decoration-purple-500/30 decoration-4 underline-offset-4">AI-powered</span>, and impactful digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="/Pratha_Varshney_Resume.pdf"
                download="Pratha_Varshney_Resume.pdf"
                className="w-full sm:w-auto group relative px-8 py-4 bg-purple-600 dark:bg-primary text-white rounded-xl font-semibold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_10px_20px_-10px_rgba(147,51,234,0.5)] dark:shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_20px_30px_-10px_rgba(147,51,234,0.7)] flex items-center justify-center gap-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-white/50 dark:bg-transparent border-2 border-slate-200 dark:border-white/10 hover:border-purple-500 dark:hover:border-primary-neon/50 rounded-xl font-semibold transition-all hover:bg-white dark:hover:bg-white/5 flex items-center justify-center text-slate-700 dark:text-gray-300"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative order-1 lg:order-2 flex justify-center"
        >
          {/* Futuristic Frame Decorations */}
          <div className="absolute inset-0 -z-10 animate-spin-slow">
             <div className="absolute top-0 left-0 w-full h-full border-[1px] border-dashed border-purple-500/30 dark:border-primary-neon/30 rounded-full" />
          </div>
          <div className="absolute -inset-4 -z-10 animate-pulse-slow">
             <div className="absolute top-0 left-0 w-full h-full border-[1px] border-purple-500/20 dark:border-primary/20 rounded-full blur-sm" />
          </div>

          {/* Image Container */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 dark:from-primary/20 dark:to-purple-500/20 rounded-[2rem] md:rounded-[3rem] rotate-6 blur-2xl opacity-50" />
            
            <div className="relative w-full h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/20 dark:border-white/10 glass shadow-2xl">
              <img
                src="/prathaV_image.jpeg"
                alt="Pratha Varshney"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=Pratha+Varshney&background=9333ea&color=fff&size=512";
                }}
              />
              
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 dark:from-primary/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Accents */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-12 h-12 md:w-16 md:h-16 glass rounded-2xl flex items-center justify-center border border-purple-500/30 dark:border-primary-neon/30 shadow-[0_0_20px_rgba(168,85,247,0.2)] dark:shadow-[0_0_20px_rgba(0,242,255,0.2)]"
            >
              <div className="w-2 h-2 rounded-full bg-purple-500 dark:bg-primary-neon animate-pulse" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
