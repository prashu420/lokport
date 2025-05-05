'use client';

import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import { containerVariants, cardVariants } from '@/utils/animations';

const projects = [
  {
    title: 'TimeLabs HRMS',
    description: 'A comprehensive HR Management System with attendance tracking, leave management, and payroll processing capabilities.',
    technologies: ['ASP.NET Core', 'SQL Server', 'React', 'Azure'],
    demoLink: '#',
    githubLink: '#'
  },
  {
    title: 'Rajasthan Grievances System',
    description: 'Government portal for citizens to submit and track grievances with real-time status updates and automated routing.',
    technologies: ['ASP.NET MVC', 'Web API', 'MySQL', 'jQuery'],
    demoLink: '#',
    githubLink: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'Modern portfolio website built with Next.js and TypeScript, featuring smooth animations and responsive design.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    demoLink: '#',
    githubLink: '#'
  }
];

export default function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="bg-gray-100/30 dark:bg-gray-800/30">
      <h2 className="heading">Projects</h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="card group hover:border-blue-600/50 dark:hover:border-blue-500/50 transition-all"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <motion.div 
              className="flex flex-wrap gap-2 mb-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              {project.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.97 }}
                href={project.demoLink}
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
              >
                <span className="mr-1">Demo</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.97 }}
                href={project.githubLink}
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
              >
                <span className="mr-1">GitHub</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
}