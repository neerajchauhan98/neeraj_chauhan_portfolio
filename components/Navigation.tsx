'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Github, Linkedin } from "lucide-react";

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-cyan-500/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold neon-cyan"
        >
          Neeraj Chauhan
        </motion.div>

        <div className="hidden md:flex gap-8">
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="text-lg text-gray-300 hover:text-cyan-400 transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden md:flex gap-4"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-lg glass border border-cyan-500/30 hover:border-cyan-400 hover:text-cyan-400 transition-all"
          >
            < Github size= {20}/>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-lg glass border border-purple-500/30 hover:border-purple-400 hover:text-purple-400 transition-all"
          >
            < Linkedin size= {20}/>
          </a>
        </motion.div>
      </div>
    </motion.nav>
  );
}
