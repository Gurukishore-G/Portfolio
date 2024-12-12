import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Scene } from '../components/Scene';
import { ArrowDown, Code, Layout, Terminal } from 'lucide-react';
import { Projects } from './Projects';

export function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <>
      <motion.section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity, scale }}
      >
        <div className="absolute inset-0 w-full h-full">
          <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 2]}>
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#9b6cc0] to-[#ff4d5d] bg-clip-text text-transparent drop-shadow-lg"
          >
            Gurukishore G
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#E2E8F0] mb-8 drop-shadow-lg"
          >
            Full Stack Developer & 3D Enthusiast
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-8"
          >
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Code className="w-8 h-8 text-[#9b6cc0] mx-auto mb-2" />
              <p className="text-sm text-[#E2E8F0] font-medium">Clean Code</p>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Layout className="w-8 h-8 text-[#ff4d5d] mx-auto mb-2" />
              <p className="text-sm text-[#E2E8F0] font-medium">Responsive Design</p>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Terminal className="w-8 h-8 text-[#9b6cc0] mx-auto mb-2" />
              <p className="text-sm text-[#E2E8F0] font-medium">Modern Tech</p>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-[#E2E8F0] animate-bounce" />
        </motion.div>
      </motion.section>

      <Projects />
    </>
  );
}