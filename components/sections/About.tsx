"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Users,
  Zap,
  Award,
  TrendingUp,
  Lightbulb,
  Target,
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
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "Creative approach to solving complex technical challenges with elegant, maintainable solutions.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description:
      "Focused on delivering measurable business value and exceeding stakeholder expectations.",
    color: "from-rose-500 to-pink-500",
  },
];

const stats = [
  { end: 8, suffix: "+", label: "Years Experience", icon: <Award size={20} /> },
  { end: 20, suffix: "+", label: "Projects Delivered", icon: <Code2 size={20} /> },
  { end: 5, suffix: "", label: "Companies", icon: <Globe size={20} /> },
  { end: 2, suffix: "", label: "Countries", icon: <TrendingUp size={20} /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function About() {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-500/10 dark:bg-brand-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent-500/10 dark:bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative">
        <SectionHeading
          badge="About Me"
          title="Passionate about"
          titleHighlight="building great software"
          description="Self-motivated and result-driven engineer with a knack for designing systems that scale."
        />

        {/* Stats Grid - Enhanced */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <AnimatedCounter
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
                icon={stat.icon}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-500/5 to-accent-500/5 dark:from-brand-500/3 dark:to-accent-500/3 rounded-2xl blur-xl" />
            <div className="relative">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-2"
              >
                {[
                  "React.js",
                  "Node.js",
                  "TypeScript",
                  "Microservices",
                  "API Design",
                  "Performance Optimization",
                  "Team Leadership",
                  "CI/CD",
                ].map((tag, idx) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-brand-50 to-accent-50 dark:from-brand-950/50 dark:to-accent-950/50 text-brand-700 dark:text-brand-300 border border-brand-200/50 dark:border-brand-800/50 cursor-default hover:shadow-lg transition-all"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Highlight cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {highlights.map(({ icon: Icon, title, description, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative glass-card p-6 cursor-default overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 dark:to-gray-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-white/10 to-white/0 dark:from-gray-700/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-${color}/20`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-sm">
                    {title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
