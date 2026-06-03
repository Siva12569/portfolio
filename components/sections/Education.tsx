"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const education = [
  {
    id: "masters",
    degree: "Master of Science",
    field: "Computer Science",
    institution: "University of Côte d'Azur",
    location: "Nice, France",
    period: "2020 – 2021",
    flag: "🇫🇷",
    description:
      "Pursued advanced studies in software engineering and distributed systems in the heart of the French Riviera.",
    highlights: ["Distributed Systems", "Machine Learning", "Software Architecture"],
    color: "from-blue-500 to-purple-500",
  },
  {
    id: "bachelors",
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "Jawaharlal Nehru Technological University",
    location: "Hyderabad, India",
    period: "2012 – 2016",
    flag: "🇮🇳",
    description:
      "Foundation in computer science fundamentals, algorithms, data structures, and software development practices.",
    highlights: ["Algorithms & Data Structures", "Database Systems", "Web Technologies"],
    color: "from-orange-500 to-red-500",
  },
];

const certifications = [
  {
    title: "Python Certification",
    issuer: "HackerRank",
    icon: "🐍",
    color: "from-green-500 to-emerald-500",
    url: "#",
  },
  {
    title: "JavaScript Certification",
    issuer: "edX",
    icon: "⚡",
    color: "from-yellow-400 to-orange-500",
    url: "#",
  },
];

export function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="container-max">
        <SectionHeading
          badge="Education & Certs"
          title="Academic"
          titleHighlight="Background"
          description="Formal education backed by continuous learning and industry certifications."
        />

        {/* Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 group"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200`}
                >
                  <GraduationCap size={22} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-lg" aria-hidden="true">{edu.flag}</span>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-brand-600 dark:text-brand-400 font-medium text-sm mb-1">
                    {edu.field}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                    {edu.institution} · {edu.location}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
                    {edu.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-2.5 py-1 text-xs rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-medium"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Certifications
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            {certifications.map((cert, i) => (
              <motion.a
                key={cert.title}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex-1 glass-card p-5 group flex items-center gap-4"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-200`}
                >
                  {cert.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <Award size={14} className="text-amber-500 shrink-0" />
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm truncate">
                      {cert.title}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {cert.issuer}
                  </p>
                </div>
                <ExternalLink
                  size={14}
                  className="text-gray-400 dark:text-gray-600 group-hover:text-brand-500 transition-colors shrink-0"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
