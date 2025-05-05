'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export default function AnimatedSection({ children, className = '', delay = 0.2, id }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-10%", // Adjusted margin for better mobile detection
    amount: 0.1 // Adjusted amount for better mobile detection
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.7,
        delay,
        ease: [0.21, 0.45, 0.27, 0.9] // Custom easing function for smoother animation
      }}
      className={`section-padding transition-colors duration-200 ${className}`}
    >
      {children}
    </motion.section>
  );
}