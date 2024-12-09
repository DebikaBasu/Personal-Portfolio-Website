import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const fadeInUp = {
  initial: { opacity: 0, y: -100 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const slideInFromLeft = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1 },
};

const slideInFromRight = {
  initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1 },
};

const Projects = () => {
  return (
    <div className='pb-4'>
      <motion.h2
        {...fadeInUp}
        className='my-20 text-center text-4xl'
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className='mb-8 flex flex-wrap lg:justify-center items-start'
          >
            <motion.div
              {...slideInFromLeft}
              className='w-full lg:w-1/4'
            >
              <img
                src={project.image || '/placeholder.png'}
                width={250}
                height={250}
                alt={project.title || 'Project Image'}
                className='mb-6 rounded'
                loading='lazy'
              />
            </motion.div>
            <motion.div
              {...slideInFromRight}
              className='w-full max-w-xl lg:w-3/4'
            >
              <h3 className='mb-2 font-semibold text-2xl'>
                {project.title || 'Untitled Project'}
              </h3>
              <p className='mb-4 text-stone-400 break-words leading-relaxed'>
                {project.description || 'No description available.'}
              </p>
              <div className='flex flex-wrap'>
                {project.technologies?.length > 0 ? (
                  project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'
                    >
                      {tech}
                    </span>
                  ))
                ) : (
                  <span className='text-stone-400'>No technologies listed.</span>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
