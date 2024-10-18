import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { LuImport } from 'react-icons/lu';
import profileImage from '../assets/benson.webp'

const Hero = () => {

    const firstName = "Godswill";
    const lastName = "Chukwueke";

     // Ref to observe the h1 element
    const ref = useRef(null);

    // Detect if the element is in view
    const isInView = useInView(ref, { triggerOnce: false, threshold: 0.1 });
    
    // Animation variants
    const letterAnimation = {
      hidden: { opacity: 0, y: 50 },
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1 + 0.5,  // Adjust delay here
          duration: 0.75,
        },
      }),
    };


  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='mt-16 overflow-hidden'>
            <motion.h1 className='text-[12vw] font-semibold  leading-none overflow-hidden lg:text-[9vw]' ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                {firstName.split("").map((letter, index) => (
                <motion.span 
                    key={`first-${index}`}
                    custom={index}
                    variants={letterAnimation}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {letter}
                </motion.span>
                ))}
                <br /> {/* This is the break between Godswill and Chukwueke */}
                {lastName.split("").map((letter, index) => (
                <motion.span 
                    key={`last-${index}`}
                    custom={index + firstName.length} // Continue indexing for delay
                    variants={letterAnimation}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {letter}
                </motion.span>
                ))}
            </motion.h1>
        </div>

        <div className='mt-8'>
            <a href="/Chukwueke-Godswill.pdf"
                target='_blank'
                rel='noopener noreferrer'
                download
                className='flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-600'>
                    <span className='bg-transparent'>Resume.pdf</span>
                    <LuImport className='ml-2 bg-transparent' />

            </a>
        </div>

        <div className='w-full'>
            <img src={profileImage} alt="Godswill Chukwueke" className='mt-8 h-96 w-full object-cover' />
        </div>
    </div>
  )
}

export default Hero