'use client';
import { useState } from 'react';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';

export function Certificates() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const certificates = [
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      date: '2025',
      credentialId: 'NPTEL-2025',
      file: '/certificates/cloud.jpg'
    },
    {
      title: 'ChatGPT-4 Prompt Engineering',
      issuer: 'Infosys Springboard',
      date: '2025',
      credentialId: 'Infosys Springboard-2025',
      file: '/certificates/prompt.jpg'
    },
    {
      title: 'Computer Communication',
      issuer: 'Coursera',
      date: '2024',
      credentialId: 'COURSERA-2024',
      file: '/certificates/communication.jpg'
    },
    {
      title: 'Build Generative AI Apps',
      issuer: 'Infosys Springboard',
      date: '2025',
      credentialId: 'INFOSYS-2025',
      file: '/certificates/Ai_app.jpg'
    },
  ];

  const achievements = [
    {
      title: '3rd Position - NextGen Innovation Hackathon',
      issuer: 'Hackathon Achievement',
      date: '2026',
      credentialId: 'HACKATHON-2024',
    },
  ];

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
    <section id="certificates" ref={ref} className="min-h-screen flex items-center justify-center px-6 py-20">
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
            <span className="neon-purple">Certifications</span> & Awards
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mt-4 rounded" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Certificates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.credentialId}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all group"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                      <Award className="h-6 w-6 text-purple-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
                    <div className="flex justify-between items-center mt-4">
  <span className="text-xs text-gray-500">{cert.date}</span>

  {/* 🔥 VIEW BUTTON */}
  <button
    onClick={() => setSelectedCert(cert.file)}
    className="px-3 py-1 text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-md hover:bg-cyan-500/20 transition"
  >
    View Certificate→
  </button>
</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 0.4 }}>
          <h3 className="text-2xl font-bold text-white mb-6">Achievements</h3>
          <div className="grid grid-cols-1 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.credentialId}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all group"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-colors">
                      <Award className="h-6 w-6 text-cyan-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">{achievement.issuer}</p>
                    <div className="flex justify-between items-end mt-4">
                      <span className="text-xs text-gray-500">{achievement.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      {selectedCert && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
    
    {/* Close Button */}
    <button
      onClick={() => setSelectedCert(null)}
      className="absolute top-6 right-6 text-white text-3xl"
    >
      ✕
    </button>

    {/* Certificate */}
    <img
      src={selectedCert}
      alt="Certificate"
      className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
    />
  </div>
)}
    </section>
  );
}
