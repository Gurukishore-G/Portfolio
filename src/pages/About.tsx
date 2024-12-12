import { motion } from 'framer-motion';
import { Code2, Database, Globe2, Laptop } from 'lucide-react';

export function About() {
  const skills = [
    { icon: <Code2 className="w-6 h-6" />, name: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Three.js'] },
    { icon: <Database className="w-6 h-6" />, name: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
    { icon: <Laptop className="w-6 h-6" />, name: 'Tools', items: ['Git', 'Docker', 'AWS', 'Linux'] },
    { icon: <Globe2 className="w-6 h-6" />, name: 'Other', items: ['SEO', 'UI/UX', 'Agile', 'Testing'] },
  ];

  return (
    <div className="min-h-screen pt-16 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-[#F8FAFC] mb-6">About Me</h1>
          <p className="text-xl text-[#E2E8F0] max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a love for creating beautiful, 
            functional, and user-friendly applications. With expertise in modern web 
            technologies and 3D graphics, I bring creative ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#131B2E] p-6 rounded-lg"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-[#9b6cc0]">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-[#F8FAFC]">{skill.name}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-[#E2E8F0]">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}