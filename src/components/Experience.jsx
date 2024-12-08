import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience = () => {
  return (
    <div className='pb-4'>
      <h2 className='my-20 text-center text-4xl'>Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-start'>
            
            {/* Year on the left, aligned vertically to the project image */}
            <div className='w-full lg:w-1/4 flex items-center justify-center'>
              <p className='text-sm text-stone-400'>{experience.year}</p>
            </div>
            
            {/* Experience details */}
            <div className='w-full max-w-full lg:w-3/4'>
              <h3 className='mb-2 font-semibold'>
                {experience.role} ={" "}
                <span className='text-sm text-stone-500'>{experience.company}</span>
              </h3>
              <p className='mb-4 text-stone-400'>
                {experience.description}
              </p>
              <div className='flex flex-wrap gap-2'>
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    className='rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300'
                    key={techIndex}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
