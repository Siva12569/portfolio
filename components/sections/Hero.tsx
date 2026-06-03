"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  Download,
  Mail,
  ArrowDown,
  Github,
  Linkedin,
  Briefcase,
  MapPin,
} from "lucide-react";

const floatingTechIcons = [
  { label: "React", color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20", x: "-5%", y: "20%", delay: 0 },
  { label: "Node.js", color: "bg-green-500/10 text-green-500 border-green-500/20", x: "88%", y: "15%", delay: 0.3 },
  { label: "TypeScript", color: "bg-blue-500/10 text-blue-500 border-blue-500/20", x: "-8%", y: "60%", delay: 0.6 },
  { label: "Python", color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20", x: "90%", y: "55%", delay: 0.9 },
  { label: "MongoDB", color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20", x: "5%", y: "85%", delay: 1.2 },
  { label: "Docker", color: "bg-sky-500/10 text-sky-500 border-sky-500/20", x: "80%", y: "82%", delay: 1.5 },
];

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-500/5 dark:bg-brand-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-accent-500/5 dark:bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-brand-500/5 to-accent-500/5 dark:from-brand-500/10 dark:to-accent-500/10 rounded-full blur-3xl" />
      </div>

      {/* Floating tech badges */}
      {floatingTechIcons.map(({ label, color, x, y, delay }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 1, duration: 0.5 }}
          style={{ left: x, top: y }}
          className={`absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm ${color}`}
          animate-continuous={{}}
        >
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut",
            }}
          >
            {label}
          </motion.span>
        </motion.div>
      ))}

      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800/50 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Shiva Mottu</span>
        </motion.h1>

        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6 h-10"
        >
          <TypeAnimation
            sequence={[
              "Senior Software Engineer",
              2000,
              "Full Stack Developer",
              2000,
              "React & Node.js Expert",
              2000,
              "Microservices Architect",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-brand-600 dark:text-brand-400"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-4"
        >
          Building scalable web applications, microservices, and modern user
          experiences for over 8 years.
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-2 text-sm text-gray-400 dark:text-gray-500 mb-10"
        >
          <MapPin size={14} />
          <span>Telangana, India</span>
          <span>·</span>
          <Briefcase size={14} />
          <span>8+ Years Experience</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="/resume.pdf"
            download
            className="btn-primary w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} />
            Download Resume
          </motion.a>
          <motion.button
            onClick={() => scrollTo("#contact")}
            className="btn-secondary w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={18} />
            Contact Me
          </motion.button>
          <motion.button
            onClick={() => scrollTo("#projects")}
            className="btn-secondary w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          {[
            { icon: Github, href: "https://github.com/shivamottu", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/shivamottu", label: "LinkedIn" },
            { icon: Mail, href: "mailto:shivamottu@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-xl glass-card text-gray-500 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollTo("#about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600 hover:text-brand-500 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs font-medium uppercase tracking-widest">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.button>
      </div>

      {/* Developer illustration - code window */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block"
      >
        <div className="w-80 glass-card p-4 shadow-2xl">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-2 text-xs text-gray-400 font-mono">portfolio.tsx</span>
          </div>
          <div className="font-mono text-xs space-y-1.5 text-left">
            <p><span className="text-accent-400">const</span> <span className="text-blue-400">engineer</span> = {"{"}</p>
            <p className="pl-4"><span className="text-green-400">name</span>: <span className="text-yellow-400">&quot;Shiva Mottu&quot;</span>,</p>
            <p className="pl-4"><span className="text-green-400">role</span>: <span className="text-yellow-400">&quot;Senior SWE&quot;</span>,</p>
            <p className="pl-4"><span className="text-green-400">experience</span>: <span className="text-orange-400">8</span>,</p>
            <p className="pl-4"><span className="text-green-400">skills</span>: [</p>
            <p className="pl-8"><span className="text-yellow-400">&quot;React&quot;</span>, <span className="text-yellow-400">&quot;Node.js&quot;</span>,</p>
            <p className="pl-8"><span className="text-yellow-400">&quot;TypeScript&quot;</span>, <span className="text-yellow-400">&quot;AWS&quot;</span></p>
            <p className="pl-4">],</p>
            <p className="pl-4"><span className="text-green-400">available</span>: <span className="text-green-400">true</span></p>
            <p>{"}"}</p>
            <motion.p
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-brand-400"
            >
              ▋
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
