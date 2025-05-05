'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import AnimatedSection from '@/components/AnimatedSection';
import { fadeInUpVariants, scaleInVariants } from '@/utils/animations';
import { useMemo } from 'react';

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  // Reduced number of background elements and optimized animation
  const backgroundElements = useMemo(() => {
    return [...Array(2)].map((_, i) => ({
      id: i,
      left: `${30 + (i * 20)}%`,
      top: `${35 + (i * 15)}%`,
      size: 320 + (i * 80),
      duration: 8 + (i * 3),
    }));
  }, []);

  return (
    <AnimatedSection className="flex flex-col items-center justify-between min-h-[100vh] py-20 relative" id="hero">
      {/* Background Animation Elements - Optimized */}
      <motion.div 
        className="absolute inset-0 opacity-20 dark:opacity-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      >
        {backgroundElements.map((elem) => (
          <motion.div
            key={elem.id}
            className="absolute bg-blue-500/20 rounded-full blur-2xl"
            style={{
              width: elem.size,
              height: elem.size,
              left: elem.left,
              top: elem.top,
              willChange: 'transform',
            }}
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.05, 1],
              x: [0, 10, 0],
              y: [0, 5, 0],
            }}
            transition={{
              duration: elem.duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          variants={scaleInVariants}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
            Hi, I'm{' '}
            <span className="text-blue-600 dark:text-blue-500">
              <TypeAnimation
                sequence={[
                  'Lokesh Kumawat',
                  2000,
                  'a Software Developer',
                  1500,
                  'a Full Stack Developer',
                  1500,
                  'a Problem Solver',
                  1500,
                ]}
                wrapper="span"
                speed={35}
                repeat={Infinity}
                cursor={false}
              />
            </span>
          </h1>
        </motion.div>
        
        <motion.p
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ 
            delay: 0.2,
            type: "spring",
            damping: 25,
            stiffness: 200
          }}
          className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl px-4"
        >
          Building robust web applications with modern technologies
        </motion.p>
        
        <motion.div
          variants={scaleInVariants}
          initial="hidden"
          animate="visible"
          transition={{ 
            delay: 0.4,
            type: "spring",
            damping: 25,
            stiffness: 200
          }}
        >
          <motion.a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium inline-flex items-center space-x-2 hover:shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25
            }}
          >
            <span>Get in Touch</span>
            <motion.svg 
              className="w-5 h-5 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={shouldReduceMotion ? {} : { x: [0, 2, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ willChange: 'transform' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator - Fixed at bottom */}
      <motion.div 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            whileHover={{ scale: 1.05 }}
            aria-label="Scroll to About section"
          >
            <span className="text-sm font-medium uppercase tracking-wider opacity-80 group-hover:opacity-100">
              Scroll
            </span>
            <svg
              className="w-6 h-6 group-hover:translate-y-1 transition-transform"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
}