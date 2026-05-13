"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function BackgroundSystem() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 40;
      const y = (clientY / innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base background that transitions with theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-sky-50 dark:from-[#050505] dark:via-[#0a0a0a] dark:to-[#050510] transition-all duration-1000" />

      {/* Animated Mesh Gradients / Blobs - Light Mode Elegant */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="absolute inset-[-10%]"
      >
        {/* Light Mode Primary Blob - Soft Sky Blue */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[5%] left-[5%] w-[70vw] h-[70vw] bg-gradient-to-br from-sky-200/60 via-sky-100/40 to-cyan-100/30 rounded-full blur-[100px] hidden dark:hidden"
        />

        {/* Light Mode Secondary Blob - Soft Purple */}
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -25, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[10%] right-[5%] w-[60vw] h-[60vw] bg-gradient-to-tl from-violet-200/50 via-purple-100/30 to-fuchsia-100/20 rounded-full blur-[120px] hidden dark:hidden"
        />

        {/* Light Mode Tertiary Blob - Warm Accent */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[40%] right-[20%] w-[40vw] h-[40vw] bg-gradient-to-r from-amber-100/40 to-orange-100/30 rounded-full blur-[80px] hidden dark:hidden"
        />

        {/* Dark Mode Primary Blob */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[10%] left-[10%] w-[60vw] h-[60vw] bg-primary/20 rounded-full blur-[120px] dark:block hidden"
        />

        {/* Dark Mode Accent Blob */}
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] bg-purple-500/15 rounded-full blur-[140px] dark:block hidden"
        />

        {/* Dark Mode Center Glow */}
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] bg-primary-neon/10 rounded-full blur-[160px] dark:block hidden"
        />
      </motion.div>

      {/* Floating Particles - Light Mode */}
      <div className="absolute inset-0 hidden dark:block">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.2 + 0.1,
            }}
            animate={{
              y: ["-5%", "105%"],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear",
            }}
            className="absolute w-1 h-1 bg-primary-neon/30 rounded-full"
          />
        ))}
      </div>

      {/* Light Mode Sparkles - Elegant alternative to particles */}
      <div className="absolute inset-0 dark:hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 bg-gradient-to-br from-sky-300 to-cyan-300 rounded-full blur-[1px]"
          />
        ))}
      </div>
    </div>
  );
}
