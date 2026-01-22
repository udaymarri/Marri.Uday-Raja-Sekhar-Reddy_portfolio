
import * as React from 'react';
import { Mail, Phone, Github, Linkedin, MessageSquare } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    // Fix: Using standard HTML elements with corrected JSX namespace visibility
    <footer className="pt-24 pb-12 bg-dark-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-heading font-bold mb-6 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Uday.Dev
            </h2>
            <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
              Available for internship opportunities and full-time SDE roles. 
              Let's connect and build something extraordinary together.
            </p>
            <div className="flex gap-4">
              <a href={PERSONAL_DETAILS.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-900 border border-white/10 rounded-xl hover:text-neon-cyan transition-colors">
                <Github size={20} />
              </a>
              <a href={PERSONAL_DETAILS.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-dark-900 border border-white/10 rounded-xl hover:text-neon-cyan transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${PERSONAL_DETAILS.email}`} className="p-3 bg-dark-900 border border-white/10 rounded-xl hover:text-neon-cyan transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail size={18} className="text-neon-cyan" />
                <span>{PERSONAL_DETAILS.email}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone size={18} className="text-neon-cyan" />
                <span>+91 {PERSONAL_DETAILS.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <MessageSquare size={18} className="text-neon-cyan" />
                <span>India</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-neon-cyan transition-colors">Home</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-neon-cyan transition-colors">Experience</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-neon-cyan transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-neon-cyan transition-colors">Projects</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} M. Uday Raja Sekhar Reddy. All rights reserved.</p>
          <p>Designed & Developed with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
