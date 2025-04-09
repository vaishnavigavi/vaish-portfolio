import Image from 'next/image';
import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import { motion, animate, scroll } from "motion/react";

const Projects = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.3}}
        
        className='text-center mb-2 text-lg font-Ovo'>Journey So Far</motion.h4>
        <motion.h2 
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.5}} 
        className='text-center text-5xl font-Ovo'> Experience</motion.h2>

        <motion.p 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5,delay:0.7}} 
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Real-world experience that sharpened my skills and fueled my passion for tech</motion.p>

        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6,delay:0.9}} 
        className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10'>
            {serviceData.map(({icon,title,timeline,description,link},index)=>(
                <motion.div 
                whileHover={{scale:1.05}} 
                transition={{duration:0.3}}
                key={index}
                className='border border-gray-400 rounded-lg px-8 py-8 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
                    <Image src={icon} alt="" className="w-10 h-5"/>
                    <h3 className='text-lg mt-4 text-gray-700'>{title}</h3>
                    <h6 className="text-sm mb-4 text-gray-600">{timeline}</h6>
                    <p className='text-sm text-gray-600 leading-5'>
                        {description}
                    </p>
                    {/* <motion.a 
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:0.5,delay:1.1}} 
                    href={link} className='flex items-center gap-2 text-sm mt-5'>
                        Read more <Image alt="" src={assets.right_arrow} className='w-4'/>
                    </motion.a> */}
                </motion.div>
            ))}
        </motion.div>

    </motion.div>
  )
}

export default Projects