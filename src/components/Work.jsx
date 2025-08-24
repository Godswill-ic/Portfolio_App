import React from 'react'
import { motion } from 'framer-motion';

const Work = () => {

    const EXPERIENCES = [
      {
        company: "Quakely Ltd",
        role: "Website Developer",
        year: "06/2025 - Present",
        description:
          "Leading the development of the company’s website using React, Next.js, TypeScript, and Tailwind CSS. Implementing responsive, modern UI components and optimizing performance for a global audience. Collaborating with stakeholders to ensure the site reflects the company’s brand identity and scales effectively. Deploying and managing production environments on Hostinger for seamless delivery.",
      },
      {
        company: "Syticks Inc",
        role: "Frontend Developer",
        year: "10/2024 - Present",
        description:
          "Building and maintaining dynamic front-end applications with React and TypeScript. Integrating APIs to deliver real-time data-driven features. Working closely with designers to translate wireframes into clean, user-friendly interfaces. Managing version control with Git/GitHub and deploying applications on Hostinger.",
      },
      {
        company: "Daffodil Care",
        role: "Website Developer",
        year: "02/2022 - 04/2022",
        description:
          "Designed and developed the company’s website, focusing on usability and responsive layouts. Delivered a modern interface using HTML, CSS, and JavaScript while ensuring cross-browser compatibility. Worked with the team to align technical solutions with business goals and provided support for content updates and improvements.",
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