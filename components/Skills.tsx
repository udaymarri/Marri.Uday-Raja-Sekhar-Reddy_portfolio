
import * as React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Code, Globe, Database, Terminal, BookOpen } from 'lucide-react';

const SkillIconMap: Record<string, React.ReactNode> = {
  "Programming Languages": <Terminal className="text-neon-cyan" />,
  "Web Technologies": <Globe className="text-neon-purple" />,
  "Databases": <Database className="text-neon-pink" />,
  "Tools & Platforms": <Code className="text-white" />,
  "Core Subjects": <BookOpen className="text-orange-400" />
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Technical <span className="text-neon-cyan">Arsenal</span>
          </motion.h2>
          <div className="w-20 h-1 bg-neon-cyan rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl">
            My diverse skill set spans from core backend engineering to modern frontend magic 
            and data-driven insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-2xl relative group overflow-hidden"
            >
              <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-neon-cyan/5 rounded-full blur-3xl group-hover:bg-neon-cyan/10 transition-colors"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-xl">
                  {SkillIconMap[category.name] || <Code />}
                </div>
                <h3 className="text-xl font-heading font-bold">{category.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-dark-800/50 border border-white/10 rounded-lg text-sm text-gray-300 hover:text-white hover:border-neon-cyan/50 hover:bg-neon-cyan/5 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
