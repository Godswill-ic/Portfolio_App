import React from 'react'
import { motion } from 'framer-motion';

const Work = () => {

    const EXPERIENCES = [
        {
          company: "Google",
          role: "Software Engineer",
          year: "12/2023 - Present",
          description:
            "Developing and maintaining scalable web applications using modern technologies. Collaborating with cross-functional teams to design and implement new features. Enhancing application performance and ensuring high-quality code through rigorous testing and code reviews. Contributing to the continuous improvement of development processes and best practices.",
        },
        {
          company: "Facebook",
          role: "Frontend Developer",
          year: "01/2021 - 11/2023",
          description:
            "Implemented user interfaces for web applications using React and Redux. Worked closely with designers to ensure seamless user experiences. Optimized components for maximum performance across a vast array of web-capable devices and browsers. Participated in code reviews and provided feedback to maintain high code quality.",
        },
      ];


  return (
    <section id='experience'>
        <h2 className='my-10 text-center text-3xl lg:text-7xl'>Work Experience</h2>
        <div className='mx-auto max-w-6xl overflow-x-hidden'>
            {EXPERIENCES.map((experience, id) => (
                <motion.div 
                key={id} 
                className='mx-4 mb-20'
                initial={{ x: id % 2 === 0 ? '-100%' : '100%', opacity: 0 }}  // Start hidden off-screen to the left/right
                whileInView={{ x: 0, opacity: 1 }}  // Move into view with opacity transition
                transition={{ type: 'spring', stiffness: 50, damping: 20 }}  // Add smooth spring transition
                viewport={{ once: false, amount: 0 }}>
                    <h2 className='font-medium lg:text-2xl'>{experience.company}</h2>
                    <div className='flex justify-between'>
                        <p className='py-4 tracking-wide lg:text-xl'>{experience.role}</p>
                        <p className='py-4 lg:text-xl'>{experience.year}</p>
                    </div>
                    <p className='font-sans text-gray-400'>{experience.description}</p>
                </motion.div>
            ))}
        </div>
    </section>
  )
}

export default Work