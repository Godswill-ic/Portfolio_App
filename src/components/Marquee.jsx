import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {

    const tech = [
        "HTML5, ",
        "CSS3, ",
        "JavaScript, ",
        "Tailwind, ",
        "Bootstrap, ",
        "React.js, ",
        "Next.js, ",
        "Node, ",
        "Cypress, ",
        "RESTful APIs, ",
        "Typescript, "
    ];

  return (
    <div className='mt-4 w-full bg-lime-300 text-black lg:py-6'>
        <div className='flex overflow-hidden whitespace-nowrap bg-lime-300'>
            {[...Array(2)].map((_, i) => (
                <motion.h1
                    className='py-2 text-3xl font-bold leading-none tracking-tighter  lg:text-6xl bg-transparent mr-4'
                    key={i}
                    initial={{x: "-100%"}}
                    animate={{x: "0"}}
                    transition={{repeat: Infinity, ease: "linear", duration: 20}}
                >
                    {tech}
                </motion.h1>
            ))}
        </div>
    </div>
  )
}

export default Marquee