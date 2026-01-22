
import * as React from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';
import Background3D from './Background3D';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, Icosahedron, Float, OrbitControls } from '@react-three/drei';

const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;

const HeroShape = () => {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
      <group>
        {/* Core Icosahedron with glass-like distortion */}
        <Icosahedron args={[1, 15]} scale={1.8}>
          <MeshDistortMaterial
            color="#22d3ee"
            attach="material"
            distort={0.35}
            speed={4}
            roughness={0}
            metalness={1}
            emissive="#22d3ee"
            emissiveIntensity={0.6}
            transparent
            opacity={0.9}
          />
        </Icosahedron>
        
        {/* Outer Tech Shell (Wireframe) */}
        <Icosahedron args={[1, 1]} scale={2.2}>
          <meshBasicMaterial 
            color="#a855f7" 
            wireframe 
            transparent 
            opacity={0.15} 
          />
        </Icosahedron>

        {/* Floating geometric particles effect around the shape */}
        <Icosahedron args={[1, 0]} scale={2.5}>
          <meshBasicMaterial 
            color="#ffffff" 
            wireframe 
            transparent 
            opacity={0.05} 
          />
        </Icosahedron>
      </group>
    </Float>
  );
};

const Hero: React.FC = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = PERSONAL_DETAILS.resumeUrl;
    link.download = "M_Uday_Raja_Sekhar_Reddy_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <React.Suspense fallback={<div className="min-h-screen bg-dark-950" />}>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <Background3D />
        
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block py-1 px-4 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan text-xs font-semibold uppercase tracking-widest mb-6"
            >
              System Architect
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-neon-purple">
                {PERSONAL_DETAILS.name}
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
              {PERSONAL_DETAILS.role}
            </p>

            <p className="text-gray-500 mb-10 max-w-xl italic">
              "{PERSONAL_DETAILS.objective}"
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-neon-cyan text-dark-950 rounded-full font-bold flex items-center gap-2 hover:bg-white transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] cursor-pointer"
              >
                View Projects <ArrowRight size={20} />
              </motion.a>
              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ 
                  scale: 1.08, 
                  backgroundColor: "rgba(34, 211, 238, 0.15)",
                  borderColor: "rgba(34, 211, 238, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold transition-all flex items-center gap-2 cursor-pointer hover:text-neon-cyan"
              >
                Download CV <Download size={20} />
              </motion.button>
            </div>

            <div className="mt-12 flex items-center gap-6">
               <a 
                 href={PERSONAL_DETAILS.github} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-neon-cyan transition-all transform hover:scale-110"
               >
                 <Github size={28} />
               </a>
               <a 
                 href={PERSONAL_DETAILS.linkedin} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-neon-cyan transition-all transform hover:scale-110"
               >
                 <Linkedin size={28} />
               </a>
               <div className="h-[1px] w-20 bg-gradient-to-r from-white/20 to-transparent"></div>
               <span className="text-gray-500 text-sm tracking-widest uppercase">Based in India</span>
            </div>
          </motion.div>

          <div className="relative h-[600px] hidden lg:block cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
              <React.Suspense fallback={null}>
                <AmbientLight intensity={0.5} />
                <PointLight position={[10, 10, 10]} intensity={2.5} color="#22d3ee" />
                <PointLight position={[-10, -10, -10]} intensity={2.5} color="#a855f7" />
                <HeroShape />
                <OrbitControls 
                  enableZoom={false} 
                  enablePan={false} 
                  autoRotate 
                  autoRotateSpeed={0.8}
                  minPolarAngle={Math.PI / 2.5}
                  maxPolarAngle={Math.PI / 1.5}
                />
              </React.Suspense>
            </Canvas>
            
            <motion.div 
              animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-10 right-10 p-4 glass-card rounded-2xl border-neon-cyan/20 z-20 pointer-events-none"
            >
              <div className="text-neon-cyan font-bold">8.3 CGPA</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">Performance</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-20 left-10 p-4 glass-card rounded-2xl border-neon-purple/20 z-20 pointer-events-none"
            >
              <div className="text-neon-purple font-bold">6+ Apps</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">Built & Deployed</div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-neon-cyan to-transparent"></div>
        </motion.div>
      </section>
    </React.Suspense>
  );
};

export default Hero;
