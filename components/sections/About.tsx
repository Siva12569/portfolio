"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Users,
  Zap,
  Award,
  TrendingUp,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Expert",
    description:
      "Deep expertise in React, Node.js, TypeScript, and modern web technologies across the full stack.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "International Experience",
    description:
      "Worked in France with Paris Media One and MSA France, delivering high-quality software on an international stage.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Performance Optimizer",
    description:
      "Proven track record of optimizing applications for speed, scalability, and user experience.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Users,
    title: "Team Leader",
    description:
      "Experienced in mentoring developers, leading sprints, and delivering client-focused solutions.",
    color: "from-green-500 to-emerald-500",
  },
];

const stats = [
  { end: 8, suffix: "+", label: "Years Experience", icon: <Award size={20} /> },
  { end: 20, suffix: "+", label: "Projects Delivered", icon: <Code2 size={20} /> },
  { end: 5, suffix: "", label: "Companies", icon: <Globe size={20} /> },
  { end: 2, suffix: "", label: "Countries", icon: <TrendingUp size={20} /> },
];

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-max">
        <SectionHeading
          badge="About Me"
          title="Passionate about"
          titleHighlight="building great software"
          description="Self-motivated and result-driven engineer with a knack for designing systems that scale."
        />

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <AnimatedCounter
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
                icon={stat.icon}
              />
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Building for impact, one line at a time
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I&apos;m a{" "}
                <span className="text-gray-900 dark:text-white font-semibold">
                  Senior Software Engineer
                </span>{" "}
                with over 8 years of experience designing, developing, and
                optimizing full-stack applications. My passion lies in building
                software that makes a real difference.
              </p>
              <p>
                I specialize in{" "}
                <span className="text-brand-600 dark:text-brand-400 font-medium">
                  React, Node.js, microservices architecture
                </span>
                , and performance optimization. Whether it&apos;s a real-time
                analytics dashboard or a scalable API gateway, I approach every
                problem with precision and craftsmanship.
              </p>
              <p>
                Having worked internationally in{" "}
                <span className="text-accent-600 dark:text-accent-400 font-medium">
                  France
                </span>{" "}
                and across India, I bring a global perspective to engineering
                challenges. I love mentoring developers, leading architectural
                decisions, and continuously evolving my skill set.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "React.js",
                "Node.js",
                "TypeScript",
                "Microservices",
                "API Design",
                "Performance Optimization",
                "Team Leadership",
                "CI/CD",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300 border border-brand-200/50 dark:border-brand-800/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right - Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map(({ icon: Icon, title, description, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card p-5 group cursor-default"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon size={18} className="text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                  {title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
