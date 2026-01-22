
import * as React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../constants';
import { GraduationCap, Award, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  return (
    // Fix: Using standard HTML elements with corrected JSX namespace visibility
    <section id="education" className="py-24 bg-dark-900/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Academic <span className="text-white">Foundation</span>
          </motion.h2>
          <div className="w-20 h-1 bg-white rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl relative border-t-4 border-t-neon-cyan"
            >
              <div className="absolute -top-6 left-8 w-12 h-12 bg-neon-cyan text-dark-950 rounded-xl flex items-center justify-center shadow-lg shadow-neon-cyan/30">
                <GraduationCap size={24} />
              </div>
              
              <div className="mt-6">
                <span className="text-xs font-bold text-neon-cyan uppercase tracking-widest">{edu.level}</span>
                <h3 className="text-xl font-heading font-bold text-white mt-1 mb-3">
                  {edu.institution}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                  <Award size={16} className="text-neon-cyan" />
                  <span className="font-bold text-white">{edu.score}</span>
                </div>

                {edu.year && (
                  <div className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded inline-block">
                    {edu.year}
                  </div>
                )}
                
                {edu.details && (
                  <p className="mt-4 text-sm text-gray-400 italic">
                    {edu.details}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
