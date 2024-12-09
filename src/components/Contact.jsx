import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className='border-t border-stone-900 pb-20'>
      <motion.h2
       whileInView={{ opacity: 1, y: 0 }}
       initial={{ opacity: 0, y: -100 }}
       transition={{ duration: 0.5 }}
      className='text-center text-4xl font-semibold  my-10'>
        Get in Touch
      </motion.h2>
      <div className='text-center tracking-tight'>
        <motion.p 
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: -100 }}
         transition={{ duration: 1 }}
        className='my-4 text-lg text-stone-600'>
          {CONTACT.address}
        </motion.p>
        <a
          href={`mailto:${CONTACT.email}`}
          className='text-lg hover:text-cyan-500 border-b-2 border-cyan-500 hover:border-cyan-500 transition duration-300'
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
