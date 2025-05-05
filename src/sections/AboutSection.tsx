'use client';

import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import { containerVariants, cardVariants } from '@/utils/animations';

export default function AboutSection() {
  return (
    <AnimatedSection id="about" className="bg-gray-100/30 dark:bg-gray-800/30">
      <h2 className="heading">About Me</h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Dynamic software developer with 3 years of experience in ASP.Net and ASP.Net Core, proficient in Web APIs, MVC, and familiar with React. Recently expanded into front-end development with Next.js and TypeScript, as showcased by this portfolio.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }
              }}
            >
              I'm passionate about creating efficient, scalable solutions and constantly learning new technologies to stay at the forefront of web development.
            </motion.p>
            <motion.div 
              className="pt-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: 0.4 } }
              }}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.97 }}
              >
                Let's work together
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          viewport={{ once: true }}
          className="card"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Quick Facts</h3>
          <motion.ul 
            className="space-y-3 text-gray-700 dark:text-gray-300"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.li 
              className="flex items-center"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 mr-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              3 years of professional experience
            </motion.li>
            <motion.li 
              className="flex items-center"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { delay: 0.1 } }
              }}
            >
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 mr-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </span>
              Full-Stack Developer
            </motion.li>
            <motion.li 
              className="flex items-center"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { delay: 0.2 } }
              }}
            >
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 mr-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              ASP.NET Core Expert
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
}