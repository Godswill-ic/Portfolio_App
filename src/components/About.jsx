import React from 'react'

const About = () => {
  return (
    <section id='about'>
        <h2 className='my-10 text-center text-4xl lg:text-7xl'>About Me</h2>
        <div className='flex items-center justify-center text-center'>
            <p className='mx-8 lg:my-4 max-w-6xl text-[20px] text-gray-400 lg:text-2xl'>
              I’m a Front-End Developer passionate about creating clean, responsive, and user-friendly web applications. 
              My core expertise lies in React and Next.js, where I leverage TypeScript for reliability and Tailwind CSS 
              for building elegant, modern interfaces with speed and precision. I have a strong foundation in JavaScript, 
              UI/UX best practices, and performance optimization, enabling me to deliver scalable solutions that look great 
              and perform seamlessly.  

              I’m experienced with Git and GitHub for version control, integrating RESTful and GraphQL APIs, and deploying 
              production-ready applications. Always curious and eager to learn, 
              I enjoy exploring new technologies, improving my workflow, and bringing creativity and detail into every project.
            </p>

        </div>
    </section>
  )
}

export default About