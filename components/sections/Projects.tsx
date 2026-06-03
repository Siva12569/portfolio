"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Zap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  gradient: string;
  icon: string;
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "ai-voice-chat",
    title: "AI Voice Chat Platform",
    description: "Real-time conversational AI platform supporting voice and text interactions.",
    longDescription:
      "A full-featured real-time AI conversational platform with voice and text support. Built with WebSockets for low-latency communication, audio streaming for seamless voice, and an intuitive React frontend.",
    tech: ["React", "WebSockets", "Node.js", "Audio Streaming", "TypeScript"],
    gradient: "from-violet-500 via-purple-500 to-pink-500",
    icon: "🤖",
    githubUrl: "https://github.com/shivamottu",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "enterprise-analytics",
    title: "Enterprise Analytics Dashboard",
    description: "Business intelligence platform with real-time analytics and interactive visualizations.",
    longDescription:
      "A comprehensive BI platform delivering real-time analytics with D3.js-powered charts. Supports multi-tenant data, role-based access, and interactive drill-down reports backed by MongoDB.",
    tech: ["React", "D3.js", "Node.js", "MongoDB", "TypeScript", "Redis"],
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    icon: "📊",
    githubUrl: "https://github.com/shivamottu",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "iot-monitoring",
    title: "IoT Monitoring Platform",
    description: "Industrial monitoring solution with anomaly detection and real-time alerting.",
    longDescription:
      "Industrial-grade IoT platform monitoring thousands of sensors in real time. Features anomaly detection algorithms, historical trend analysis, and automated alerting via React dashboards.",
    tech: ["React", "Node.js", "MySQL", "WebSockets", "Chart.js"],
    gradient: "from-emerald-500 via-green-500 to-lime-500",
    icon: "🏭",
    githubUrl: "https://github.com/shivamottu",
    liveUrl: "#",
  },
  {
    id: "api-gateway",
    title: "Microservices API Gateway",
    description: "Scalable API architecture for enterprise applications with rate limiting and auth.",
    longDescription:
      "A production-ready API gateway handling routing, authentication, rate limiting, and load balancing for a microservices ecosystem. Containerized with Docker for easy orchestration.",
    tech: ["Node.js", "Express", "Docker", "Redis", "JWT"],
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    icon: "⚡",
    githubUrl: "https://github.com/shivamottu",
    liveUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-padding relative bg-gray-50/50 dark:bg-gray-900/30">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-accent-500/5 dark:bg-accent-500/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-0 w-[400px] h-[400px] bg-brand-500/5 dark:bg-brand-500/8 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative">
        <SectionHeading
          badge="Featured Work"
          title="Projects I've"
          titleHighlight="Built"
          description="A selection of projects showcasing my expertise across the full stack."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card overflow-hidden group"
            >
              {/* Gradient header */}
              <div
                className={`h-32 bg-gradient-to-br ${project.gradient} p-6 flex items-end relative overflow-hidden`}
              >
                <div className="absolute top-4 right-4 text-4xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 select-none">
                  {project.icon}
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                <div className="relative">
                  {project.featured && (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold mb-2 w-fit">
                      <Zap size={11} />
                      Featured
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {project.longDescription}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-gray-900 dark:bg-gray-800 text-white hover:bg-gray-700 dark:hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={14} />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-brand-600 text-white hover:bg-brand-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/shivamottu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
