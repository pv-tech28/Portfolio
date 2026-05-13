"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Globe, 
  Terminal, 
  Layers, 
  Wrench,
  Cpu
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: any;
  skills: string[];
  color: string;
  lightColor: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: Code2,
    color: "from-blue-500/20 to-cyan-500/20",
    lightColor: "from-sky-100 to-cyan-50",
    skills: ["Python", "Java", "C", "SQL", "C++"]
  },
  {
    title: "Data Science & AI",
    icon: Cpu,
    color: "from-purple-500/20 to-pink-500/20",
    lightColor: "from-violet-100 to-fuchsia-50",
    skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-Learn", "TensorFlow"]
  },
  {
    title: "Web & App Dev",
    icon: Globe,
    color: "from-emerald-500/20 to-teal-500/20",
    lightColor: "from-emerald-100 to-teal-50",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"]
  },
  {
    title: "Database Management",
    icon: Database,
    color: "from-orange-500/20 to-red-500/20",
    lightColor: "from-orange-100 to-red-50",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Firebase"]
  },
  {
    title: "Core Concepts",
    icon: Layers,
    color: "from-indigo-500/20 to-blue-500/20",
    lightColor: "from-indigo-100 to-blue-50",
    skills: ["DSA", "OOP", "DBMS", "OS", "Computer Networks"]
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "from-yellow-500/20 to-orange-500/20",
    lightColor: "from-amber-100 to-orange-50",
    skills: ["Git", "Docker", "AWS", "VS Code", "Postman"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

export default function Skills() {
  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary-neon text-sm font-bold uppercase tracking-[0.3em] mb-4 block"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-neon to-blue-500">Expertise</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            className="h-1 bg-gradient-to-r from-primary to-primary-neon mx-auto rounded-full" 
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* Card Background with Glow - Light/Dark Adaptive */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.lightColor} dark:${category.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 dark:group-hover:opacity-40 transition-opacity duration-500`} />
              
              <div className="relative h-full glass p-8 rounded-3xl border border-gray-200 dark:border-white/10 group-hover:border-primary-neon/30 transition-all duration-500 flex flex-col">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-primary-neon group-hover:scale-110 transition-transform duration-500">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-primary-neon transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-primary-neon/30 hover:text-gray-900 dark:hover:text-white hover:bg-primary-neon/5 dark:hover:bg-primary-neon/5 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Terminal className="w-4 h-4 text-primary-neon/30 dark:text-primary-neon/50" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
