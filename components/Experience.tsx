
import * as React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    // Fix: Using standard HTML elements with corrected JSX namespace visibility
    <section id="experience" className="py-24 bg-dark-900/50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Professional <span className="text-neon-purple">Journey</span>
          </motion.h2>
          <div className="w-20 h-1 bg-neon-purple rounded-full"></div>
        </div>

        <div className="space-y-12 max-w-4xl">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative pl-12 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-neon-purple before:to-transparent"
            >
              {/* Timeline marker */}
              <div className="absolute left-[-6px] top-0 w-3 h-3 rounded-full bg-neon-purple shadow-[0_0_10px_#a855f7]"></div>
              
              <div className="glass-card p-8 rounded-2xl hover:border-neon-purple/50 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-white group-hover:text-neon-purple transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-neon-purple font-medium mt-1">
                      <Briefcase size={16} />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-1 rounded-full text-sm self-start">
                    <Calendar size={16} />
                    {exp.duration}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-gray-400 group">
                      <CheckCircle2 size={18} className="text-neon-purple shrink-0 mt-1 opacity-60 group-hover:opacity-100" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
