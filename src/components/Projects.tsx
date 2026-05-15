"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";
import React from "react";

const projects = [
  {
    title: "AI Interview Coach",
    description: "An AI-powered interview preparation platform that provides mock interviews, real-time feedback, and performance analysis to help users improve their interview skills.",
    image: "/projects/project1.jpg",
    tags: ["React", "Solidity", "Three.js"],
    github: "https://github.com/pv-tech28/AI-Interview-Coach.git",
    
  },
  {
    title: "Neural Mesh",
    description: "AI-powered collaborative workspace for neural network design and training.",
    image: "/projects/project2.jpg",
    tags: ["Next.js", "Python", "TensorFlow"],
    github: "#",
    live: "#"
  },
  {
    title: "Nebula OS",
    description: "A browser-based operating system built for developers and creators.",
    image: "/projects/project3.jpg",
    tags: ["TypeScript", "WebAssembly", "Rust"],
    github: "#",
    live: "#"
  }
];

function ProjectCard({ project, index }: { project: any, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group h-[450px] w-full rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 overflow-hidden"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 rounded-xl glass p-6 flex flex-col justify-end"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-20 group-hover:opacity-40 transition-opacity">
          <div className="w-full h-full bg-gradient-to-br from-primary/40 to-primary-neon/40" />
        </div>

        <div className="relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string) => (
              <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-primary-neon px-2 py-1 rounded bg-primary/10 border border-primary/20">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-neon transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">
            {project.description}
          </p>
          <div className="flex items-center gap-4">
            <a href={project.github} className="p-2 rounded-full bg-gray-200 dark:bg-white/5 hover:bg-gray-300 dark:hover:bg-white/10 text-gray-700 dark:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            <a href={project.live} className="p-2 rounded-full bg-gray-200 dark:bg-white/5 hover:bg-gray-300 dark:hover:bg-white/10 text-gray-700 dark:text-white transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured <span className="text-primary-neon">Creations</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
