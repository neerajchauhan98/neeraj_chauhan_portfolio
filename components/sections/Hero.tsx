'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Download, FileText } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Left side - Text */}
        <motion.div variants={itemVariants} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="text-lg font-mono text-cyan-200">Hi, my name is</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            <span className="neon-cyan">Neeraj</span>
            <br />
            Chauhan
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-300 font-semibold"
          >
            AI & Data Enthusiast | Aspiring Tech Innovator | Problem Solver
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-lg leading-relaxed"
          >
            Passionate about transforming data into insights and building AI-driven systems that solve real-world challenges.
          </motion.p>

    

<motion.div
  variants={itemVariants}
  className="flex gap-4 flex-wrap pt-4"
>

  {/* 🔍 VIEW CV */}
  <motion.a
    href="/neeraj-chauhan-cv.pdf"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
  >
    <FileText size={18} />
    CV/Resume
  </motion.a>

  {/* ⬇️ DOWNLOAD CV */}
  <motion.a
    href="/neeraj-chauhan-cv.pdf"
    download
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition-all duration-300 glow-pulse"
  >
    <Download size={18} />
    Download CV
  </motion.a>

</motion.div>
          <motion.div
            variants={itemVariants}
            className="flex gap-4 flex-wrap pt-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition-all duration-300 glow-pulse"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg transition-all duration-300 glow-pulse"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right side - Image */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative w-80 h-80 md:w-96 md:h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse" />
            <Image
              src="/images/profile.jpg"
              alt="Neeraj Chauhan"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-full border-2 border-cyan-500 relative z-10"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
