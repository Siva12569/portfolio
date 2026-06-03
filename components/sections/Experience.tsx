"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  tags: string[];
  current?: boolean;
  international?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    id: "soulax",
    company: "Soulax Software Pvt Ltd",
    role: "Senior Software Engineer",
    period: "June 2025 – Present",
    location: "Hyderabad, India",
    type: "Full-time",
    current: true,
    highlights: [
      "Leading end-to-end application development for enterprise clients",
      "Architecting and optimizing React-based front-end systems for performance",
      "Delivering client-focused solutions with measurable business impact",
      "Driving performance optimization initiatives across the stack",
    ],
    tags: ["React", "Node.js", "TypeScript", "Microservices"],
  },
  {
    id: "citridot",
    company: "Citridot Solutions",
    role: "Senior Software Engineer",
    period: "June 2024 – June 2025",
    location: "India",
    type: "Full-time",
    highlights: [
      "Designed and built scalable full-stack applications for clients",
      "Implemented RESTful APIs and microservices architecture",
      "Mentored junior developers and conducted technical reviews",
      "Improved CI/CD pipelines reducing deployment time by 40%",
    ],
    tags: ["React", "Node.js", "REST APIs", "CI/CD"],
  },
  {
    id: "coforge",
    company: "Coforge",
    role: "Senior Software Engineer",
    period: "June 2022 – January 2024",
    location: "India",
    type: "Full-time",
    highlights: [
      "Built and maintained large-scale enterprise applications",
      "Collaborated with cross-functional teams across multiple time zones",
      "Developed reusable component libraries using React and TypeScript",
      "Optimized database queries resulting in 60% performance improvement",
    ],
    tags: ["React", "TypeScript", "MySQL", "MongoDB", "Node.js"],
  },
  {
    id: "paris-media",
    company: "Paris Media One",
    role: "Senior Full Stack Engineer",
    period: "May 2021 – May 2022",
    location: "France",
    type: "Full-time",
    international: true,
    highlights: [
      "Built interactive React dashboards for media analytics platforms",
      "Integrated Machine Learning APIs for content recommendation engines",
      "Developed scalable Node.js microservices handling millions of events",
      "Worked with MySQL and MongoDB for data persistence and analytics",
    ],
    tags: ["React", "Node.js", "ML APIs", "MySQL", "MongoDB", "Microservices"],
  },
  {
    id: "msa-france",
    company: "MSA France",
    role: "Full Stack Engineer",
    period: "April 2020 – September 2020",
    location: "France",
    type: "Full-time",
    international: true,
    highlights: [
      "Developed analytics dashboards using React and D3.js",
      "Built Node.js backend services for data processing pipelines",
      "Created interactive data visualizations for agricultural analytics",
      "Collaborated with French engineering teams on agile projects",
    ],
    tags: ["React", "Node.js", "D3.js", "Analytics"],
  },
  {
    id: "axelta",
    company: "Axelta Systems",
    role: "Software Web Developer",
    period: "June 2016 – July 2019",
    location: "India",
    type: "Full-time",
    highlights: [
      "Developed IoT monitoring systems and data pipeline solutions",
      "Built React dashboards for real-time sensor data visualization",
      "Created data pipelines for IoT device telemetry processing",
      "Mentored junior developers and established coding best practices",
    ],
    tags: ["React", "IoT", "Data Pipelines", "JavaScript", "Node.js"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-max">
        <SectionHeading
          badge="Work History"
          title="My Professional"
          titleHighlight="Journey"
          description="8+ years across startups, enterprises, and international companies in India and France."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px hidden sm:block">
            <div className="h-full timeline-line opacity-30" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-[26px] top-6 hidden sm:flex">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      exp.current
                        ? "bg-brand-500 border-brand-500 shadow-lg shadow-brand-500/30"
                        : "bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-600"
                    }`}
                  >
                    {exp.current && (
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    )}
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -2, scale: 1.01 }}
                  className="glass-card p-6 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                          {exp.company}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800/50">
                            Current
                          </span>
                        )}
                        {exp.international && (
                          <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-accent-100 dark:bg-accent-950/50 text-accent-700 dark:text-accent-400 border border-accent-200 dark:border-accent-800/50">
                            🌍 International
                          </span>
                        )}
                      </div>
                      <p className="text-brand-600 dark:text-brand-400 font-semibold mt-0.5">
                        {exp.role}
                      </p>
                    </div>
                    <div className="text-right text-sm text-gray-500 dark:text-gray-400 space-y-1 shrink-0">
                      <div className="flex items-center gap-1 justify-end">
                        <Calendar size={13} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 justify-end">
                        <MapPin size={13} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.05 }}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0" />
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
