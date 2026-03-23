'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Education() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science Engineering',
      institution: 'Lovely Professional University, Phagwara, Punjab',
      year: '6th Semester',
      details: 'CGPA: 8.06',
      icon: '🎓',
    },
    {
      degree: 'Senior Secondary',
      field: '12th Grade',
      institution: 'Sant Kabir Inter College, Mau (UP)',
      year: '2022',
      details: 'Percentage: 88.6%',
      icon: '📚',
    },
    {
      degree: 'Secondary',
      field: '10th Grade',
      institution: 'Sant Kabir Inter College, Mau (UP)',
      year: '2020',
      details: 'Percentage: 90.8%',
      icon: '✏️',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20">
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
            <span className="neon-green">Education</span> & Learning
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mt-4 rounded" />
        </motion.div>

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              variants={itemVariants}
              className="glass p-8 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-all group"
            >
              <div className="flex gap-6">
                <div className="text-4xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-green-400 font-semibold">{item.field}</p>
                    </div>
                    <span className="text-sm text-cyan-400 font-mono whitespace-nowrap">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-3">{item.institution}</p>
                  <p className="text-gray-500 text-sm">{item.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
