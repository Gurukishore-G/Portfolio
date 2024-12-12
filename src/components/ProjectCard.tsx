import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    image: string;
    github: string;
    live: string;
    color: string;
  };
  index: number;
}

const ProjectSphere = ({ color }: { color: string }) => (
  <Float speed={2} rotationIntensity={2} floatIntensity={1}>
    <Sphere args={[1, 64, 64]} scale={1.5}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.3}
        metalness={0.6}
      />
    </Sphere>
  </Float>
);

export function ProjectCard({ project, index }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-[#0A0F1C] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-105"
    >
      <div className="relative h-48">
        <div className="absolute inset-0 opacity-50">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1.2} />
            <ProjectSphere color={project.color} />
          </Canvas>
        </div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-90" 
        />
      </div>
      <div className="p-6 backdrop-blur-sm bg-[#0A0F1C]/90">
        <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">{project.title}</h3>
        <p className="text-[#E2E8F0] mb-4">{project.description}</p>
        <div className="flex space-x-4">
          <a 
            href={project.github}
            className="flex items-center text-[#E2E8F0] hover:text-[#9b6cc0] transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            <span>Code</span>
          </a>
          <a 
            href={project.live}
            className="flex items-center text-[#E2E8F0] hover:text-[#ff4d5d] transition-colors"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            <span>Live</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}