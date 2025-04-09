import Image from 'next/image';
import { workData, assets } from '@/assets/assets'
import React from 'react'
import tailwindConfig from '@/tailwind.config.js';
import { motion, animate, scroll } from "motion/react";

const Work = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.3}}
        className='text-center mb-2 text-lg font-Ovo'>A Peek Into My Creations</motion.h4>
        <motion.h2 
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.5}}
        className='text-center text-5xl font-Ovo'> Projects</motion.h2>

        <motion.p 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5,delay:0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>A collection of projects where I applied creativity, code, and problem-solving to bring ideas to life</motion.p>

        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6,delay:0.9}}
        className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] my-10 gap-5'>
            {workData.map((project,index)=>(
                <motion.div 
                whileHover={{ scale: 1.05 }}
                key={index}
                className='relative border border-gray-400 rounded-lg aspect-square overflow-hidden group cursor-pointer'>
              
                {/* Background icon – always faint */}
                <Image 
                  src={project.icon} 
                  alt={`${project.title} background`} 
                  fill 
                  className='object-cover opacity-20' 
                />
              
                {/* Content over translucent white box */}
                <div className='absolute inset-0 flex items-end justify-center p-5'>
                  <div className='bg-white/50 backdrop-blur-sm w-full rounded-md py-3 px-5 flex items-center justify-between shadow-lg transition-all duration-300 group-hover:-translate-y-2'>
                    <div>
                      <h1 className='font-semibold text-black'>{project.title}</h1>
                      <p className='text-sm text-gray-800'>{project.description}</p>
                    </div>
                    <a 
                        href={project.link} 
                        target='_blank' 
                        rel='noopener noreferrer'
                        className='border border-black rounded-full w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'
                        >
                        <Image src={assets.send_icon} alt='send icon' className='w-5' />
                        </a>

                  </div>
                </div>
              </motion.div>
              
              
              
            ))}
        </motion.div>

    </motion.div>
  )
}

export default Work