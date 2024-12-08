import React from 'react';
import { CONTACT } from '../constants';

const Contact = () => {
  return (
    <div className='border-t border-stone-900 pb-20'>
      <h2 className='text-center text-4xl font-semibold  my-10'>
        Get in Touch
      </h2>
      <div className='text-center tracking-tight'>
        <p className='my-4 text-lg text-stone-600'>
          {CONTACT.address}
        </p>
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
