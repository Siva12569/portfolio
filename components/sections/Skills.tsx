"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  emoji: string;
  gradient: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    emoji: "🎨",
    gradient: "from-cyan-500 to-blue-500",
    skills: [
      { name: "React.js", level: 95, color: "from-cyan-500 to-blue-500" },
      { name: "TypeScript", level: 90, color: "from-blue-500 to-indigo-500" },
      { name: "JavaScript", level: 95, color: "from-yellow-400 to-orange-500" },
      { name: "Redux", level: 85, color: "from-purple-500 to-violet-500" },
      { name: "HTML5 / CSS3", level: 92, color: "from-orange-500 to-red-500" },
    ],
  },
  {
    title: "Backend",
    emoji: "⚙️",
    gradient: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 93, color: "from-green-500 to-emerald-500" },
      { name: "Express.js", level: 90, color: "from-gray-500 to-gray-600" },
      { name: "REST APIs", level: 95, color: "from-blue-500 to-cyan-500" },
      { name: "Microservices", level: 88, color: "from-indigo-500 to-purple-500" },
      { name: "Python", level: 75, color: "from-yellow-500 to-blue-500" },
    ],
  },
  {
    title: "Database",
    emoji: "🗄️",
    gradient: "from-orange-500 to-amber-500",
    skills: [
      { name: "MySQL", level: 88, color: "from-orange-500 to-amber-500" },
      { name: "MongoDB", level: 85, color: "from-green-500 to-emerald-500" },
    ],
  },
  {
    title: "DevOps & Tools",
    emoji: "🚀",
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "Git / GitHub", level: 92, color: "from-gray-700 to-gray-900" },
      { name: "CI/CD", level: 82, color: "from-blue-500 to-cyan-500" },
      { name: "Docker", level: 78, color: "from-sky-500 to-blue-500" },
      { name: "Jest / Testing", level: 85, color: "from-red-500 to-rose-500" },
      { name: "Performance Opt.", level: 90, color: "from-purple-500 to-pink-500" },
    ],
  },
];

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-padding relative bg-gray-50/50 dark:bg-gray-900/50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-brand-500/3 to-accent-500/3 dark:from-brand-500/5 dark:to-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative">
        <SectionHeading
          badge="Technical Skills"
          title="My"
          titleHighlight="Tech Stack"
          description="Expertise across the full stack — from pixel-perfect UIs to scalable backend systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.15, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-200`}
                >
                  {category.emoji}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider font-medium">
            Also experienced with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "D3.js",
              "WebSockets",
              "Redis",
              "AWS",
              "Nginx",
              "GraphQL",
              "Webpack",
              "Vite",
              "Tailwind CSS",
              "Next.js",
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 text-xs font-medium rounded-full glass-card text-gray-600 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
