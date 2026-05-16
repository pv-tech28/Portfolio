"use client";

import { motion, Variants } from "framer-motion";
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
    lightColor: "text-purple-600",
    skills: ["Python", "Java", "C", "SQL", "C++"]
  },
  {
    title: "Data Science & AI",
    icon: Cpu,
    color: "from-purple-500/20 to-pink-500/20",
    lightColor: "text-cyan-500",
    skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-Learn", "TensorFlow"]
  },
  {
    title: "Web & App Dev",
    icon: Globe,
    color: "from-emerald-500/20 to-teal-500/20",
    lightColor: "text-sky-500",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"]
  },
  {
    title: "Database Management",
    icon: Database,
    color: "from-orange-500/20 to-red-500/20",
    lightColor: "text-teal-600",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Firebase"]
  },
  {
    title: "Core Concepts",
    icon: Layers,
    color: "from-indigo-500/20 to-blue-500/20",
    lightColor: "text-cyan-400",
    skills: ["DSA", "OOP", "DBMS", "OS", "Computer Networks"]
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "from-yellow-500/20 to-orange-500/20",
    lightColor: "text-cyan-500",
    skills: ["Git", "Docker", "AWS", "VS Code", "Postman"]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants: Variants = {
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
    <section id="skills" className="py-24 px-6 relative z-10 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-indigo-500/5 dark:bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-purple-600 dark:text-primary-neon text-sm font-bold uppercase tracking-[0.3em] mb-4 block"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 dark:from-primary dark:via-primary-neon dark:to-blue-500">Expertise</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            className="h-1.5 bg-gradient-to-r from-purple-600 to-rose-500 dark:from-primary dark:to-primary-neon mx-auto rounded-full" 
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
              <div className={`absolute inset-0 bg-gradient-to-br from-purple-100/50 to-white dark:${category.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
              
              <div className="relative h-full bg-[#fdfaff] dark:bg-white/5 p-8 rounded-3xl border border-slate-100 dark:border-white/10 group-hover:border-purple-300 dark:group-hover:border-primary-neon/30 transition-all duration-500 flex flex-col shadow-[0_10px_30px_-15px_rgba(168,85,247,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.15)] group-hover:shadow-md">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 ${category.lightColor} dark:text-primary-neon group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-purple-600 dark:text-white group-hover:text-purple-700 dark:group-hover:text-primary-neon transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 text-slate-700 dark:text-gray-300 text-sm font-medium hover:border-purple-300 dark:hover:border-primary-neon/30 hover:text-purple-600 dark:hover:text-white hover:bg-purple-50 dark:hover:bg-primary-neon/5 transition-all duration-300 cursor-default shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Terminal className="w-4 h-4 text-purple-300 dark:text-primary-neon/50" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
