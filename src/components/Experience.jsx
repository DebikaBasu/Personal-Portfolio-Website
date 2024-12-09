import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className='pb-4'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className='mb-8 flex flex-wrap lg:flex-nowrap items-center'
          >
            {/* Year Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-1/4 flex items-center justify-center lg:h-[250px] lg:pl-10'
            >
              <div className='flex items-center h-full'>
                <p className='text-sm text-stone-400'>{experience.year}</p>
              </div>
            </motion.div>

            {/* Experience Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-3/4'
            >
              <h3 className='mb-2 font-semibold'>
                {experience.role}{' '}
                <span className='text-sm text-stone-500'>at {experience.company}</span>
              </h3>
              <p className='mb-4 text-stone-400 break-words leading-relaxed'>
                {experience.description}
              </p>
              <div className='flex flex-wrap gap-2'>
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
