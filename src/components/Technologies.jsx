import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { FaJs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// Floating animation variants
const floatingVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0], // Moving slightly up and down
    transition: {
      duration: duration, // Slow movement
      ease: "easeInOut", // Smooth easing
      repeat: Infinity, // Infinite looping
    },
  },
});

const Technologies = () => {
  return (
    <div className='pb-24'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'>
        Technologies
      </motion.h2>
      
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-8'
      >
        {/* React Icon */}
        <motion.div
          variants={floatingVariants(3)}
          initial="initial"
          animate="animate"
          className='p-4'>
          <RiReactjsLine className="text-7xl text-cyan-400 fill-current" />
        </motion.div>
        
        {/* JavaScript Icon */}
        <motion.div
          variants={floatingVariants(3.5)}
          initial="initial"
          animate="animate"
          className='p-4'>
          <FaJs color='yellow' className='text-7xl' />
        </motion.div>

        {/* Tailwind CSS Icon */}
        <motion.div
          variants={floatingVariants(4)}
          initial="initial"
          animate="animate"
          className='p-4'>
          <RiTailwindCssFill color='#2b6ea3' className='text-7xl' />
        </motion.div>

        {/* Node.js Icon */}
        <motion.div
          variants={floatingVariants(3)}
          initial="initial"
          animate="animate"
          className='p-4'>
          <FaNodeJs color='green' className='text-7xl' />
        </motion.div>

        {/* MySQL Icon */}
        <motion.div
          variants={floatingVariants(4.5)}
          initial="initial"
          animate="animate"
          className='p-4'>
          <SiMysql color='#2b6ea3' className='text-7xl' />
        </motion.div>

        {/* Java Icon */}
        <motion.div
          variants={floatingVariants(3.5)}
          initial="initial"
          animate="animate"
          className='p-4'>
          <FaJava color='orange' className='text-7xl' />
        </motion.div>

        {/* .NET Icon */}
        <motion.div
          variants={floatingVariants(3.5)}
          initial="initial"
          animate="animate"
          className='p-4'>
          <SiDotnet color='#512bd4' className='text-7xl' />
        </motion.div>

        {/* Express Icon */}
        <motion.div
          variants={floatingVariants(4)}
          initial="initial"
          animate="animate"
          className='p-4'>
          <SiExpress className='text-7xl' />
        </motion.div>

        {/* Git Icon */}
        <motion.div
          variants={floatingVariants(3.5)}
          initial="initial"
          animate="animate"
          className='p-4'>
          <FaGitAlt color='#f14e32' className='text-7xl' />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
