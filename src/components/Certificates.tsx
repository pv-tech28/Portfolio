"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Award } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  tags: string[];
  image: string;
  credentialUrl: string;
}

const certificates: Certificate[] = [
  {
    id: "1",
    title: "Java Programming",
    issuer: "Oracle",
    date: "2024",
    tags: ["Java", "Backend"],
    image: "/certificates/java.jpeg",
    credentialUrl: "#"
  },
  {
    id: "2",
    title: "Data Structures & Algorithms",
    issuer: "Coursera",
    date: "2024",
    tags: ["DSA", "Problem Solving"],
    image: "/certificates/dsa.jpeg",      
    credentialUrl: "#"
  },
  {
    id: "3",
    title: "Oracle Certified",
    issuer: "Oracle",
    date: "2024",
    tags: ["SQL", "Database"],
    image: "/certificates/oracle.jpeg",
    credentialUrl: "#"
  },
  {
    id: "4",
    title: "NPTEL Certification",
    issuer: "NPTEL",
    date: "2024",
    tags: ["Engineering", "Academic"],
    image: "/certificates/nptel.jpeg",
    credentialUrl: "#"
  },
  {
    id: "5",
    title: "C Programming",
    issuer: "IIT",
    date: "2023",
    tags: ["C", "Fundamentals"],
    image: "/certificates/c.jpeg",
    credentialUrl: "#"
  },
  {
    id: "6",
    title: "Hackfest Runner-up",
    issuer: "IEEE",
    date: "2024",
    tags: ["Hackathon", "Innovation"],
    image: "/certificates/hackfest.jpeg",
    credentialUrl: "#"
  },
  {
    id: "7",
    title: "Object Oriented Programming",
    issuer: "University",
    date: "2024",
    tags: ["OOP", "Design Patterns"],
    image: "/certificates/oops.jpeg",
    credentialUrl: "#"
  },
  {
    id: "8",
    title: "WIE Leadership",
    issuer: "IEEE WIE",
    date: "2024",
    tags: ["Leadership", "Community"],
    image: "/certificates/wie.jpeg",
    credentialUrl: "#"
  },
  {
    id: "9",
    title: "Computational Thinking",
    issuer: "Guvi",
    date: "2024",
    tags: ["Leadership", "Community"],
    image: "/certificates/computational.jpeg",
    credentialUrl: "#"
  },
  {
    id: "10",
    title: "Servelets and JSP",
    issuer: "Guvi",
    date: "2024",
    tags: ["Leadership", "Community"],
    image: "/certificates/jsp.jpeg",
    credentialUrl: "#"
  },
  {
    id: "11",
    title: "Java Beginners",
    issuer: "Guvi",
    date: "2024",
    tags: ["Leadership", "Community"],
    image: "/certificates/java1.jpeg",
    credentialUrl: "#"
  }

];

export default function Certificates() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [angles, setAngles] = useState<number[]>(certificates.map((_, i) => (i * 360) / certificates.length));
  const requestRef = useRef<number>(0);
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const [radius, setRadius] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 768 ? 150 : 300);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const animate = (time: number) => {
    if (!isHovered && isOpen) {
      setAngles(prev => prev.map(a => (a + 0.2) % 360));
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isOpen, isHovered]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <section className="py-24 relative z-10 flex flex-col items-center justify-center transition-colors duration-1000">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
          Knowledge <span className="text-purple-600 dark:text-primary-neon">Core</span>
        </h2>
        <div className="h-1.5 w-20 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-primary dark:to-primary-neon mx-auto rounded-full" />
      </div>

      {/* The Core Orb */}
      {!isOpen && (
        <motion.div
          onClick={() => setIsOpen(true)}
          className="relative group cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Pulsing rings */}
          {[1, 1.5, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: i + 0.5, opacity: 0 }}
              transition={{ duration: 3, repeat: Infinity, delay: (i - 1) }}
              className="absolute inset-0 rounded-full border border-purple-600/30 dark:border-primary-neon/30"
            />
          ))}
          
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-rose-500 dark:from-primary dark:via-primary-neon dark:to-blue-600 flex items-center justify-center relative z-10 shadow-[0_10px_40px_rgba(168,85,247,0.3)] dark:shadow-[0_0_50px_rgba(0,242,255,0.4)]">
            <Award className="w-12 h-12 text-white" />
            
            {/* Animated label lines */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-primary-neon animate-pulse">
                Unlock Achievements
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Expanded Galaxy */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/95 backdrop-blur-2xl overflow-hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-4 rounded-full bg-white/20 hover:bg-white/30 border border-white/30 backdrop-blur-md transition-all duration-300 z-[160] group shadow-xl"
              aria-label="Close achievements"
            >
              <X className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
            </button>
            {/* Galaxy Background Particles */}
            <div className="absolute inset-0 pointer-events-none">
               {/* Simplified particles for performance */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1),transparent_70%)]" />
            </div>

            {/* Central Sun */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 15 }}
              className="w-24 h-24 rounded-full bg-primary-neon shadow-[0_0_100px_rgba(0,242,255,0.6)] flex items-center justify-center z-10"
            >
              <Award className="w-10 h-10 text-black" />
            </motion.div>

            {/* Orbiting Cards */}
            {certificates.map((cert, i) => {
              const angle = (angles[i] * Math.PI) / 180;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: radius < 200 ? 0.6 : 1,
                    x, 
                    y,
                    zIndex: Math.sin(angle) > 0 ? 20 : 5
                  }}
                  onMouseEnter={() => setIsHovered(cert.id)}
                  onMouseLeave={() => setIsHovered(null)}
                  onClick={() => setSelectedCert(cert)}
                  className={cn(
                    "absolute w-48 md:w-64 p-3 md:p-4 rounded-xl glass cursor-pointer transition-all duration-300",
                    isHovered === cert.id 
                      ? "scale-110 border-primary-neon shadow-[0_0_30px_rgba(0,242,255,0.3)]" 
                      : "scale-100 border-gray-200 dark:border-white/10"
                  )}
                  style={{
                    filter: `brightness(${Math.sin(angle) > 0 ? 1 : 0.5})`,
                  }}
                >
                  <div className="relative h-32 w-full rounded-lg overflow-hidden mb-4 bg-gray-100 dark:bg-white/5">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const placeholder = parent.querySelector('.cert-placeholder');
                          if (placeholder) (placeholder as HTMLElement).style.display = 'flex';
                        }
                      }}
                    />
                    {/* Placeholder for cert image */}
                    <div className="cert-placeholder absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-neon/20 flex items-center justify-center hidden">
                      <Award className="w-12 h-12 text-primary-neon/50" />
                    </div>
                  </div>
                  <h3 className="font-bold text-sm mb-1 truncate text-gray-900 dark:text-white">{cert.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{cert.issuer}</p>
                  <div className="flex flex-wrap gap-1">
                    {cert.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[8px] uppercase tracking-tighter bg-primary/10 text-primary-neon px-1.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full glass rounded-3xl overflow-hidden shadow-2xl relative my-auto max-h-[90vh] flex flex-col"
            >
              <div className="relative flex-1 bg-gray-900 flex items-center justify-center group/img overflow-hidden min-h-[300px]">
                 <img
                   src={selectedCert.image}
                   alt={selectedCert.title}
                   className="max-w-full max-h-full object-contain"
                   onError={(e) => {
                     e.currentTarget.style.display = 'none';
                   }}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity pointer-events-none" />
                 
                 <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 border border-white/20 backdrop-blur-md transition-all z-[1100] group shadow-xl"
                >
                  <X className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
              </div>
              <div className="p-6 md:p-8 bg-white dark:bg-[#0a0a0a] shrink-0">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-6 mb-6">
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-slate-900 dark:text-white leading-tight">{selectedCert.title}</h2>
                    <p className="text-slate-500 dark:text-gray-400 text-base md:text-lg">{selectedCert.issuer} • Issued {selectedCert.date}</p>
                  </div>
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-purple-600 text-white rounded-xl font-bold hover:scale-105 transition-all shadow-lg hover:shadow-purple-500/25 shrink-0"
                  >
                    View Credential
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs md:text-sm font-medium text-slate-600 dark:text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
