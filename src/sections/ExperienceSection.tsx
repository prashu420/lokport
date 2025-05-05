'use client';

import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import { containerVariants } from '@/utils/animations';

const experiences = [
  {
    company: 'Cynosure Technologies',
    role: 'Senior Software Developer',
    date: 'Jan 2024 - Present',
    responsibilities: [
      'Lead development of enterprise-level ASP.NET Core applications',
      'Implemented microservices architecture for scalable solutions',
      'Mentored junior developers and conducted code reviews',
    ]
  },
  {
    company: 'E Connect Solutions',
    role: 'Software Developer',
    date: 'Jun 2022 - Dec 2023',
    responsibilities: [
      'Developed and maintained ASP.NET MVC applications',
      'Created RESTful APIs for client-server communication',
      'Optimized database queries and improved application performance',
    ]
  },
  {
    company: 'Tech Innovators',
    role: 'Junior Developer',
    date: 'May 2021 - May 2022',
    responsibilities: [
      'Assisted in developing web applications using ASP.NET',
      'Worked on front-end development using jQuery and Bootstrap',
      'Participated in agile development processes',
    ]
  }
];

export default function ExperienceSection() {
  const timelineVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1,
      height: "100%",
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <AnimatedSection id="experience" className="bg-gray-100/30 dark:bg-gray-800/30">
      <h2 className="heading">Experience</h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-4xl mx-auto"
      >
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card relative pl-8"
            >
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600/50 dark:bg-blue-500/50"
                variants={timelineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.company}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1 mb-4">
                <span className="text-blue-600 dark:text-blue-400">{exp.role}</span>
                <span className="hidden sm:block text-gray-400 dark:text-gray-500">•</span>
                <span className="text-gray-500 dark:text-gray-400">{exp.date}</span>
              </div>
              <motion.ul 
                className="space-y-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
              >
                {exp.responsibilities.map((resp, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-gray-600 dark:text-gray-300 flex items-start"
                  >
                    <span className="text-blue-600 dark:text-blue-400 mr-2">›</span>
                    {resp}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatedSection>
  );
}