import React from 'react'
import {
    FaXTwitter,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaDiscord,
    FaInstagram,
  } from "react-icons/fa6";

const Contact = () => {

    const CONTACT = {
        text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine our skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
        email: "gchukwueke01@gmail.com",
        phone: "+(234 9019852863)",
      };

      const SOCIAL_MEDIA_LINKS = [
        {
          href: "https://x.com/",
          icon: <FaFacebook fontSize={26} className="hover:opacity-80" />,
        },
        {
          href: "https://x.com/",
          icon: <FaDiscord fontSize={26} className="hover:opacity-80" />,
        },
        {
          href: "https://x.com/",
          icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
        },
        {
          href: "https://x.com/",
          icon: <FaXTwitter fontSize={26} className="hover:opacity-80" />,
        },
        {
          href: "https://github.com/",
          icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
        },
        {
          href: "https://www.linkedin.com/",
          icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
        },
      ];

  return (
    <section id='contact'>
        <div className='mx-auto max-w-6xl'>
            <p className='my-10 text-center text-3xl lg:text-7xl'>Interested In Working Together?</p>
            <p className='p-4 text-center text-xl'>{CONTACT.text}</p>
            <p className='my-4 text-center text-2xl font-medium text-lime-300 lg:pt-6 lg:text-4xl'>{CONTACT.email}</p>
            <p className='my-4 text-center text-2xl font-medium text-lime-300 lg:pb-6 lg:text-4xl'>{CONTACT.phone}</p>
        </div>

        <div className='mt-20 flex items-center justify-center gap-5'>
            {SOCIAL_MEDIA_LINKS.map((link, index) => (
                <a key={index} href={link.href} target='_blank' rel='noopener noreferrer'>{link.icon}</a>
            ))}
        </div>

        <p className='my-8 text-center text-gray-400'>&copy; godswill-ic. All rights reserved.</p>
    </section>
  )
}

export default Contact