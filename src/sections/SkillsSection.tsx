'use client';

import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import { containerVariants, cardVariants } from '@/utils/animations';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['C#', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS']
  },
  {
    title: 'Frameworks',
    skills: ['.NET Core', 'ASP.NET MVC', 'React', 'Next.js', 'Entity Framework']
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MSSQL', 'MongoDB', 'Redis']
  },
  {
    title: 'Tools',
    skills: ['Visual Studio', 'VS Code', 'Git', 'Azure DevOps', 'Docker']
  },
  {
    title: 'Other',
    skills: ['Microservices', 'REST APIs', 'CI/CD', 'Agile', 'Full-Stack Development']
  }
];

export default function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="bg-gray-100/30 dark:bg-gray-800/30">
      <h2 className="heading">Skills</h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="card hover:border-blue-600/50 dark:hover:border-blue-500/50 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
}