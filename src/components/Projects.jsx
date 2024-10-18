import React from 'react'
import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import project7 from "../assets/project7.webp";
import project8 from "../assets/project8.webp";
import project9 from "../assets/project9.webp";
import { motion } from 'framer-motion';

const Projects = () => {

    const PROJECTS = [
        {
          id: 1,
          title: "E-commerce Website",
          description:
            "A full-featured e-commerce website built with React and Node.js.",
          imgSrc: project1,
          link: "https://example.com/ecommerce-website",
        },
        {
          id: 2,
          title: "Social Media App",
          description:
            "A social media application with real-time chat and notifications.",
          imgSrc: project2,
          link: "https://example.com/social-media-app",
        },
        {
          id: 3,
          title: "Portfolio Website",
          description:
            "A personal portfolio website to showcase projects and skills.",
          imgSrc: project3,
          link: "https://example.com/portfolio-website",
        },
        {
          id: 4,
          title: "Blog Platform",
          description:
            "A blogging platform with user authentication and content management.",
          imgSrc: project4,
          link: "https://example.com/blog-platform",
        },
        {
          id: 5,
          title: "Task Management Tool",
          description: "A task management tool to organize and prioritize work.",
          imgSrc: project5,
          link: "https://example.com/task-management-tool",
        },
        {
          id: 6,
          title: "Online Learning Platform",
          description:
            "An online learning platform offering various courses and resources.",
          imgSrc: project6,
          link: "https://example.com/online-learning-platform",
        },
        {
          id: 7,
          title: "Fitness Tracker",
          description: "A mobile application to track fitness activities and goals.",
          imgSrc: project7,
          link: "https://example.com/fitness-tracker",
        },
        {
          id: 8,
          title: "Recipe App",
          description: "An app for browsing and saving various cooking recipes.",
          imgSrc: project8,
          link: "https://example.com/recipe-app",
        },
        {
          id: 9,
          title: "Weather Dashboard",
          description:
            "A weather dashboard providing current weather data and forecasts.",
          imgSrc: project9,
          link: "https://example.com/weather-dashboard",
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
                        <div className='absolute bottom-0 left-0 right-0 m-5 p-5 text-white backdrop-blur-md bg-transparent' id='project-desc'>
                            <h3 className='text-3xl bg-transparent'>{project.title}</h3>
                            <p className='max-w-xs text-lg bg-transparent'>{project.description}</p>
                        </div>
                    </motion.div>
                </a>
            ))}
        </div>
    </section>
  )
}

export default Projects