
import * as React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../constants';
import { Award, ShieldCheck, Trophy } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    // Fix: Using standard HTML elements with corrected JSX namespace visibility
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <Award className="text-neon-cyan" size={32} />
              <h2 className="text-3xl font-heading font-bold">Certifications</h2>
            </div>
            
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl hover:bg-white/5 transition-colors border-l-2 border-l-neon-cyan"
                >
                  <ShieldCheck size={20} className="text-neon-cyan shrink-0" />
                  <span className="text-gray-300 text-sm">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <Trophy className="text-neon-purple" size={32} />
              <h2 className="text-3xl font-heading font-bold">Achievements</h2>
            </div>
            
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/10 rounded-full blur-3xl group-hover:bg-neon-purple/20 transition-colors"></div>
                <h3 className="text-2xl font-heading font-bold mb-2 text-neon-purple">2x Hackathon Winner</h3>
                <p className="text-gray-400">
                  Secured top positions in university-level hackathons by building innovative 
                  AI/ML and web solutions within tight deadlines.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-8 rounded-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/10 rounded-full blur-3xl group-hover:bg-neon-cyan/20 transition-colors"></div>
                <h3 className="text-2xl font-heading font-bold mb-2 text-neon-cyan">Project Excellence</h3>
                <p className="text-gray-400">
                  Successfully deployed 6+ multi-disciplinary projects covering computer vision, 
                  sentiment analysis, and full-stack development.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
