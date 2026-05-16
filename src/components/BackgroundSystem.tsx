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
      {/* Grainy Filter Definition */}
      <svg className="hidden">
        <filter id="grainy">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      {/* Base background */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#050505] transition-all duration-1000" />

      {/* Animated Grid - Light Mode */}
      <div className="absolute inset-0 dark:hidden opacity-[0.03]" 
           style={{ backgroundImage: "radial-gradient(#4f46e5 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      
      {/* Animated Grid - Dark Mode */}
      <div className="absolute inset-0 hidden dark:block opacity-[0.05]" 
           style={{ backgroundImage: "linear-gradient(#ffffff 0.5px, transparent 0.5px), linear-gradient(90deg, #ffffff 0.5px, transparent 0.5px)", backgroundSize: "50px 50px" }} />

      {/* Animated Mesh Gradients / Blobs */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="absolute inset-[-10%]"
      >
        {/* Light Mode Primary Blob - Purple/Pink */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[0%] left-[0%] w-[80vw] h-[80vw] bg-gradient-to-br from-purple-200/40 via-pink-100/30 to-transparent rounded-full blur-[100px] dark:hidden block"
        />

        {/* Light Mode Secondary Blob - Rose/Amber */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[0%] right-[0%] w-[70vw] h-[70vw] bg-gradient-to-tl from-rose-100/30 via-fuchsia-50/20 to-transparent rounded-full blur-[120px] dark:hidden block"
        />

        {/* Light Mode Center Accent - Cyan/Sky */}
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/3 w-[50vw] h-[50vw] bg-sky-200/20 rounded-full blur-[80px] dark:hidden block"
        />

        {/* Dark Mode Blobs (Existing logic but refined colors if needed) */}
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
          className="absolute top-[10%] left-[10%] w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[120px] dark:block hidden"
        />
        
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
          className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] bg-purple-500/10 rounded-full blur-[140px] dark:block hidden"
        />
      </motion.div>

      {/* Grainy Texture Overlay */}
      <div className="absolute inset-0 grainy pointer-events-none" />

      {/* Floating Sparkles - Light Mode */}
      <div className="absolute inset-0 dark:hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              y: ["0%", "-10%"],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
            className="absolute w-1.5 h-1.5 bg-purple-400/40 rounded-full blur-[1px]"
          />
        ))}
      </div>
    </div>
  );
}
