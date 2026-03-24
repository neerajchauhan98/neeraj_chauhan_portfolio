'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl w-full"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="neon-cyan">Me</span>
          </h2>
          <div className="w-35 h-3 bg-gradient-to-r from-cyan-500 to-purple-500 mt-4 rounded" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={itemVariants}
            className="space-y-4 text-gray-300 leading-relaxed text-lg"
          >
              <p>
    I'm a B.Tech Computer Science student with a strong interest in Data Science, Artificial Intelligence, and Machine Learning.
  </p>

  <p>
    I enjoy building data-driven applications, working with real-world datasets, and continuously improving my problem-solving skills through hands-on projects.
  </p>

  <p>
    As a data science aspirant, I'm focused on learning core concepts, applying them practically, and growing into a skilled AI engineer.
  </p>

  <p>
    Alongside this, I have a growing interest in entrepreneurship and aspire to build innovative tech products that solve real-world problems.
  </p>

          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass p-8 rounded-lg border border-cyan-500/20 space-y-4"
          >
            <h3 className="text-2xl font-bold text-cyan-400">Highlights</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3 pb-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span>Data Science focused</span>
              </div>
              <div className="flex items-start gap-3 pb-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span>AI & Machine Learning</span>
              </div>
              <div className="flex items-start gap-3 pb-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span>Entrepreneurial mindset</span>
              </div>
              <div className="flex items-start gap-3 pb-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span>Building AI assistants</span>
              </div>
              <div className="flex items-start gap-3 pb-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span>Creating data dashboards</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">•</span>
                <span>Experimenting with innovative tech products</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
