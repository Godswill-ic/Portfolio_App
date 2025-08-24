import React from 'react'
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";
import project8 from "../assets/project8.png";
import project9 from "../assets/project9.png";
import { motion } from 'framer-motion';

const Projects = () => {

    const PROJECTS = [
        {
          id: 1,
          title: "Quakely Ltd",
          imgSrc: project1,
          link: "https://quakely.co.uk/",
        },
        {
          id: 2,
          title: "PayWave",
          imgSrc: project2,
          link: "https://pay-wave-ten.vercel.app/",
        },
        {
          id: 3,
          title: "Numbers Memory Game",
          imgSrc: project3,
          link: "https://numbers-memory-game-kohl.vercel.app/",
        },
        {
          id: 4,
          title: "Syticks Inc",
          imgSrc: project4,
          link: "https://syticks.com/",
        },
        {
          id: 5,
          title: "15 Puzzle",
          imgSrc: project5,
          link: "https://15-puzzle-seven.vercel.app/",
        },
        {
          id: 6,
          title: "Kliq Inc",
          imgSrc: project6,
          link: "https://kliq-lac.vercel.app/",
        },
        {
          id: 7,
          title: "Cryptoplace",
          imgSrc: project7,
          link: "https://cryptoplace-one-nu.vercel.app/",
        },
        {
          id: 8,
          title: "Weather Dashboard",
          imgSrc: project8,
          link: "https://weather-app-pi-pink-28.vercel.app/",
        },
        {
          id: 9,
          title: "To Do App",
          imgSrc: project9,
          link: "https://godswill-ic.github.io/To-do_Web_App/",
        },
      ];


  return (
    <section className='p-8' id='projects'>
        <h2 className='my-10 text-center text-3xl lg:text-7xl'>My Work</h2>
        <div className='columns-1 gap-4 md:columns-2 lg:columns-3'>
            {PROJECTS.map((project) => (
                <a key={project.id} href={project.link} target='_blank' rel='noopener noreferrer' className='block'>
                    <motion.div 
                    className='relative mb-4 overflow-hidden rounded-lg bg-white shadow-lg'
                    whileHover={{ scale: 1.05 }}  // Hover animation
                    initial={{ y: 100, opacity: 0 }}  // Start off-screen at the bottom and fully transparent
                    whileInView={{ y: 0, opacity: 1 }}  // Move to original position and fade in
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}  // Smooth spring-like transition
                    viewport={{ once: false, amount: 0.2 }}>
                        <img src={project.imgSrc} alt={project.title} className='h-auto w-full object-cover' />
                        <div className='absolute bottom-0 left-0 right-0 m-5 p-2 text-lime-300 backdrop-blur-md bg-transparent w-[250px] ml-auto mr-auto' id='project-desc'>
                            <p className='text-xl bg-transparent text-center'>{project.title}</p>
                        </div>
                    </motion.div>
                </a>
            ))}
        </div>
    </section>
  )
}

export default Projects