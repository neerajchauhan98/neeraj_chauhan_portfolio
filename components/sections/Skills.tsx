'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Skills() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const skillCategories = [
  {
    category: 'Programming',
    color: 'cyan',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C++', level: 80 },
      { name: 'SQL', level: 85 },
      { name: 'JavaScript', level: 75 },
    ],
  },
  {
    category: 'AI & Data',
    color: 'purple',
    skills: [
      { name: 'Machine Learning', level: 85 },
      { name: 'Data Analysis', level: 90 },
      { name: 'Scikit-learn', level: 80 },
      { name: 'Pandas', level: 88 },
      { name: 'NumPy', level: 85 },
    ],
  },
  {
    category: 'Tools',
    color: 'green',
    skills: [
      { name: 'Power BI', level: 85 },
      { name: 'Excel', level: 90 },
      { name: 'Git & GitHub', level: 80 },
      { name: 'VS Code', level: 95 },
    ],
  },
];
const colorMap = {
  cyan: 'bg-cyan-500',
  purple: 'bg-purple-500',
  green: 'bg-green-500',
};


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20">
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
            My <span className="neon-purple">Skills</span>
          </h2>
          <div className="w-30 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 rounded" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="glass p-8 rounded-xl border border-white/10 hover:border-cyan-500/40 hover:scale-[1.03] transition-all duration-300"
            >
              <h3 className={`text-2xl font-bold mb-6 neon-${category.color}`}>
                {category.category}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="space-y-3"
              >
                {category.skills.map((skill, skillIndex) => (
  <motion.div
    key={skill.name}
    variants={{
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { delay: skillIndex * 0.1 },
      },
    }}
    className="space-y-2"
  >
    {/* 🔹 Skill Name + % */}
    <div className="flex justify-between text-sm text-gray-300">
      <span>{skill.name}</span>
      <span>{skill.level}%</span>
    </div>

    {/* 🔥 Progress Bar */}
    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
        transition={{ duration: 1, delay: skillIndex * 0.1 }}
        className={`h-full bg-${category.color}-500 rounded-full`}
      />
    </div>
  </motion.div>
))}
              </motion.div>
            </motion.div>
          ))}
        </div>


      </motion.div>
    </section>
  );
}
