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
  Sparkles,
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-brand-500/30 via-transparent to-transparent dark:from-brand-500/15 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-accent-500/30 via-transparent to-transparent dark:from-accent-500/15 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating tech badges with enhanced styling */}
      {floatingTechIcons.map(({ label, color, x, y, delay }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 1, duration: 0.5 }}
          style={{ left: x, top: y }}
          className={`absolute hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border backdrop-blur-md hover:scale-110 transition-transform duration-300 cursor-default ${color}`}
        >
          <motion.span
            animate={{ y: [0, -10, 0] }}
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
        {/* Status Badge with pulse */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-green-50/80 to-emerald-50/80 dark:from-green-950/50 dark:to-emerald-950/50 text-green-700 dark:text-green-300 border border-green-200/50 dark:border-green-800/50 backdrop-blur-sm hover:scale-105 transition-transform mb-6"
        >
          <motion.span
            className="w-2.5 h-2.5 rounded-full bg-green-500"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Available for opportunities
        </motion.div>

        {/* Name with gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-6"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
            Hi, I&apos;m{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 blur-lg bg-gradient-to-r from-brand-500 via-purple-500 to-pink-500 opacity-30"></span>
              <span className="relative gradient-text">Shiva Mottu</span>
            </span>
          </h1>
        </motion.div>

        {/* Animated title with better styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6 h-12 flex items-center justify-center"
        >
          <span className="px-6 py-2 rounded-xl bg-gradient-to-r from-brand-500/10 to-accent-500/10 dark:from-brand-500/5 dark:to-accent-500/5 border border-brand-500/20 dark:border-brand-500/10">
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
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Building scalable web applications, microservices, and modern user experiences for over 8 years.
        </motion.p>

        {/* Location info with icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-10"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <MapPin size={14} className="text-brand-500" />
            <span>Telangana, India</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <Briefcase size={14} className="text-accent-500" />
            <span>8+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <Sparkles size={14} className="text-amber-500" />
            <span>Always Learning</span>
          </div>
        </motion.div>

        {/* CTA Buttons with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 flex-wrap"
        >
          <motion.a
            href="/resume.pdf"
            download
            className="group relative px-8 py-4 text-base font-semibold rounded-xl text-white overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-700 group-hover:from-brand-700 group-hover:to-brand-800 transition-all duration-300" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-brand-400 to-accent-400 blur transition-opacity duration-300" />
            <div className="relative flex items-center gap-2 justify-center">
              <Download size={18} />
              Download Resume
            </div>
          </motion.a>

          <motion.button
            onClick={() => scrollTo("#contact")}
            className="group relative px-8 py-4 text-base font-semibold rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white overflow-hidden bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white dark:via-gray-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-2">
              <Mail size={18} />
              Contact Me
            </div>
          </motion.button>

          <motion.button
            onClick={() => scrollTo("#projects")}
            className="group relative px-8 py-4 text-base font-semibold rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white overflow-hidden bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white dark:via-gray-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-2">
              View Projects
            </div>
          </motion.button>
        </motion.div>

        {/* Social links with enhanced styling */}
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
              className="group relative w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 dark:from-gray-800 to-gray-200 dark:to-gray-900 group-hover:from-brand-500/20 dark:group-hover:from-brand-500/10 transition-colors duration-300" />
              <div className="absolute inset-0 border border-gray-200 dark:border-gray-700 group-hover:border-brand-500/50 dark:group-hover:border-brand-500/30 transition-colors duration-300 rounded-xl" />
              <Icon size={20} className="relative text-gray-600 dark:text-gray-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollTo("#about")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.button>
      </div>

      {/* Developer code window - Enhanced */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-500/20 to-accent-500/20 blur-2xl rounded-2xl" />
          <div className="relative w-80 glass-card p-5 shadow-2xl border border-white/20 dark:border-gray-700/50">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="ml-auto text-xs text-gray-400 font-mono">portfolio.tsx</span>
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
        </div>
      </motion.div>
    </section>
  );
}
