
import * as React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const ProjectCard = ({ project, idx }: { project: any, idx: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="glass-card rounded-2xl overflow-hidden group border border-white/5 hover:border-neon-pink/50 transition-colors duration-500 h-full flex flex-col"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="relative aspect-video overflow-hidden"
      >
        <img 
          src={`https://picsum.photos/seed/${project.title}/600/400`} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="p-2 bg-dark-950/80 rounded-lg border border-white/10 text-white">
            <Code2 size={20} />
          </span>
        </div>
      </div>

      <div 
        style={{ transform: "translateZ(30px)" }}
        className="p-8 flex-1 flex flex-col"
      >
        <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-neon-pink transition-colors">
          {project.title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map(t => (
            <span key={t} className="text-[10px] uppercase font-bold tracking-wider text-neon-pink bg-neon-pink/10 px-2 py-0.5 rounded">
              {t}
            </span>
          ))}
        </div>

        <p className="text-gray-400 text-sm mb-6 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-auto flex items-center gap-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-dark-800 border border-white/10 rounded-xl hover:bg-white/5 transition-colors text-sm font-medium"
          >
            <Github size={18} /> Code
          </a>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-neon-pink text-dark-950 rounded-xl hover:bg-white transition-all transform hover:rotate-12"
            title="View Demo"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background 3D subtle grid */}
      <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(236,72,153,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(236,72,153,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Featured <span className="text-neon-pink">Creations</span>
          </motion.h2>
          <div className="w-20 h-1 bg-neon-pink rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl">
            Selected projects that demonstrate my ability to solve real-world problems 
            through elegant code and 3D-inspired design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
