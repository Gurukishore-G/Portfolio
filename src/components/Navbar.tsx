import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1C]/80 backdrop-blur-sm border-b border-[#131B2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink 
            to="/" 
            className="text-xl font-bold bg-gradient-to-r from-[#9b6cc0] to-[#ff4d5d] bg-clip-text text-transparent"
          >
            Portfolio
          </NavLink>
          
          <div className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) =>
                `text-[#E2E8F0] hover:text-[#9b6cc0] transition-colors ${isActive ? 'text-[#9b6cc0]' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) =>
                `text-[#E2E8F0] hover:text-[#9b6cc0] transition-colors ${isActive ? 'text-[#9b6cc0]' : ''}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) =>
                `text-[#E2E8F0] hover:text-[#9b6cc0] transition-colors ${isActive ? 'text-[#9b6cc0]' : ''}`
              }
            >
              Projects
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) =>
                `text-[#E2E8F0] hover:text-[#9b6cc0] transition-colors ${isActive ? 'text-[#9b6cc0]' : ''}`
              }
            >
              Contact
            </NavLink>
          </div>

          <div className="flex space-x-4">
            <a href="https://github.com" className="text-[#E2E8F0] hover:text-[#9b6cc0] transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" className="text-[#E2E8F0] hover:text-[#ff4d5d] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:contact@example.com" className="text-[#E2E8F0] hover:text-[#9b6cc0] transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}