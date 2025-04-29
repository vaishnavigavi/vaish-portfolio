import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion, animate, scroll } from "motion/react";


const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div 
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{duration:0.8,type:'spring',stiffness:100}}> 
            <Image src={assets.profile_img} alt='' className='rounded-full w-32 mt-50'/>
            
        </motion.div>
        <motion.h3 
        initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.6,delay:0.3}}

        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Vaishnavi Gavi <Image src={assets.hand_icon} alt='' className='w-6'/></motion.h3>
        <motion.h1 
        initial={{y:-30,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.8,delay:0.5}}
        className='text-3xl sm:text-6l lg:text-[66px] font-Ovo'>Data Science Engineer based in Bangalore, India</motion.h1>
        <motion.p
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6,delay:0.7}}
        className='max-w-2xl mx-auto font-Ovo'>
        I'm a passionate Data Science Engineer and Software Developer with a BE in Electronics Engineering from India. I transform complex data into actionable insights by building scalable, real-time applications and automating processes—turning challenges into creative, efficient solutions. Welcome to my portfolio!
        </motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a 
            initial={{y:30,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.6,delay:1}}
            href="#contact"
            className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'
            >contact me<Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.a>
            <motion.a 
            initial={{y:30,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.6,delay:1.2}}
            href="/_vaishnavi_gavi_resume_.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>my resume<Image src={assets.download_icon} alt='' className='w-4'/></motion.a>
        </div>
    </div>
  )
}

export default Header
