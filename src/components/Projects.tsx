import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: "Project One",
    description: "A revolutionary web application built with React and Three.js",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=90",
    github: "https://github.com",
    live: "https://example.com",
    color: "#9b6cc0"
  },
  {
    title: "Project Two",
    description: "An innovative mobile-first design system",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=90",
    github: "https://github.com",
    live: "https://example.com",
    color: "#ff4d5d"
  },
  {
    title: "Project Three",
    description: "AI-powered data visualization platform",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=90",
    github: "https://github.com",
    live: "https://example.com",
    color: "#9b6cc0"
  }
];

export function Projects() {
  return (
    <section className="py-20 bg-[#131B2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#F8FAFC] mb-4">Featured Projects</h2>
          <p className="text-lg text-[#E2E8F0]">Some of my recent work that showcases my skills and passion</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}