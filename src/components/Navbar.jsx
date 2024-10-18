// import { div } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    };

    useEffect(()=>{
        if(isOpen){
            document.body.style.overflow = "hidden"
        } else{
            document.body.style.overflow = "auto"
        }
    }, [isOpen]);

    const containerVariants = {
        hidden: {
            opacity: 0,
            y: "-100%"
        },
        visible: {
            opacity: 1,
            y: 0,
            transition :{
                staggerChildren: 0.3,
            }
        }
    }

    const linkVariants = {
        hidden: {
            opacity: 0,
            y: "-50%"
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 500, 
                damping: 10, 
              }
        }
    }


  return (
    <>
        <nav className='fixed right-0 top-0 z-30 p-4 bg-transparent'>
            <button onClick={toggleMenu} className='rounded-md p-2 bg-transparent'>
                {isOpen ? (
                    <FaTimes className='h-6 w-6 bg-transparent'/>
                ) : (
                    <FaBars className='h-6 w-6 bg-transparent'/>
                )}
            </button>
        </nav>

        <AnimatePresence>
        {isOpen && (
            <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className='fixed inset-0 z-20 flex flex-col items-center justify-center bg-black text-white'>
                <ul className='space-y-6 text-3xl text-center'>
                    <motion.li variants={linkVariants}><a href="#projects" className='text-5xl font-semibold tracking-wide hover:text-lime-300 lg:text-7xl' onClick={toggleMenu}>Projects</a></motion.li>
                    <motion.li variants={linkVariants}><a href="#about" className='text-5xl font-semibold tracking-wide hover:text-lime-300 lg:text-7xl' onClick={toggleMenu}>About</a></motion.li>
                    <motion.li variants={linkVariants}><a href="#experience" className='text-5xl font-semibold tracking-wide hover:text-lime-300 lg:text-7xl' onClick={toggleMenu}>Experience</a></motion.li>
                    <motion.li variants={linkVariants}><a href="#contact" className='text-5xl font-semibold tracking-wide hover:text-lime-300 lg:text-7xl' onClick={toggleMenu}>Contact</a></motion.li>
                </ul>
            </motion.div>
        )}
        </AnimatePresence>
    </>
  )
}

export default Navbar