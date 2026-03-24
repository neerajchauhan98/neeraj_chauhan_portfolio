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

        <div className="relative">

  {/* 🔥 TIMELINE LINE */}
  <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-green-500 to-cyan-500 opacity-30 transform -translate-x-1/2" />

  <div className="space-y-12">
    {education.map((item, index) => (
      <motion.div
        key={item.degree}
        variants={itemVariants}
        className={`relative flex items-center ${
          index % 2 === 0 ? 'justify-start' : 'justify-end'
        }`}
      >

        {/* 🔵 CARD */}
        <div className="w-full md:w-[45%]">
          <div className="glass p-6 rounded-xl border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]">

            <div className="flex items-start gap-4">

              {/* ICON */}
              <div className="text-2xl">{item.icon}</div>

              {/* TEXT */}
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {item.degree}
                </h3>

                <p className="text-green-400 text-sm font-medium">
                  {item.field}
                </p>

                <p className="text-gray-400 text-sm mt-1">
                  {item.institution}
                </p>

                <p className="text-gray-500 text-sm mt-2">
                  {item.details}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 🔥 DOT */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.7)]" />

        {/* 📅 YEAR BADGE */}
        <div
          className={`absolute ${
            index % 2 === 0 ? 'right-[55%]' : 'left-[55%]'
          } bg-black/50 border border-cyan-400/30 text-cyan-400 px-3 py-1 rounded-full text-xs`}
        >
          {item.year}
        </div>

      </motion.div>
    ))}
  </div>
</div>
      </motion.div>
    </section>
  );
}
