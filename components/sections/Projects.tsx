'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

export function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const projects = [
    {
      title: 'Credit Card Fraud Detection System',
      description: 'ML model for detecting fraudulent transactions using Logistic Regression, Random Forest, and XGBoost (focused on imbalanced data).',
      image: '/images/project1.jpg',
      tags: ['Python', 'Scikit-learn', 'Pandas'],
      link: '#',
      github: 'https://github.com/neerajchauhan98/Credit-Card-Fraud-Detection',
    },
    {
      title: 'Global Meteorite Landings Dashboard',
      description: 'Interactive Power BI dashboard analyzing meteorite data (1900–2020) with insights on trends and risk categories.',
      image: '/images/project2.jpg',
      tags: ['Power BI', 'DAX'],
      link: '#',
      github: '#',
    },
    {
      title: 'Offline Voice Chatbot Assistant',
      description: 'Voice-based AI assistant with online/offline modes and command-based interaction.',
      image: '/images/project3.jpg',
      tags: ['Python', 'Vosk', 'APIs'],
      link: '#',
      github: '#',
    },
    {
      title: 'Project Bachpan',
      description: 'AR-based EdTech concept combining a smart learning bag with gamified and interactive tools for children.',
      image: '/images/project4.jpg',
      tags: ['AR Concepts', 'Product Design'],
      link: '#',
      github: '#',
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured <span className="neon-cyan">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mt-4 rounded" />
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group glass border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <motion.div
                  className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                </motion.div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 text-sm font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-full"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-2 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all"
                    >
                      <Github size={20} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
