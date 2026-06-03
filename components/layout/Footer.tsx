"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Heart, Code2 } from "lucide-react";

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/shivamottu",
    label: "LinkedIn",
    color: "hover:text-blue-500",
  },
  {
    icon: Github,
    href: "https://github.com/shivamottu",
    label: "GitHub",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    icon: Mail,
    href: "mailto:shivamottu@gmail.com",
    label: "Email",
    color: "hover:text-red-500",
  },
];

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent" />

      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-accent-500 rounded-lg flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-lg gradient-text">Shiva Mottu</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
              Senior Software Engineer building scalable applications and modern
              user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["About", "Skills", "Experience", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollTo(`#${item.toLowerCase()}`)}
                      className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact & Download */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wider">
              Get In Touch
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              shivamottu@gmail.com
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Telangana, India
            </p>
            <a
              href="/resume.pdf"
              download
              className="btn-secondary !py-2 !px-4 !text-sm inline-flex"
            >
              <Download size={14} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
            © 2026 Shiva Mottu. Made with{" "}
            <Heart size={14} className="text-red-500 fill-red-500" />
            All Rights Reserved.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 ${color} transition-all duration-200`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
