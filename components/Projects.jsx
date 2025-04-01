import Image from 'next/image';
import { assets, serviceData } from '@/assets/assets'
import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>my projects blah blah</h4>
        <h2 className='text-center text-5xl font-Ovo'> My projects</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ducimus delectus unde amet labore. Iusto, mollitia eos id exercitationem provident dolor?</p>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10'>
            {serviceData.map(({icon,title,description,link},index)=>(
                <div key={index}
                className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
                    <Image src={icon} alt="" className="w-10"/>
                    <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5'>
                        {description}
                    </p>
                    <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                        Read more <Image alt="" src={assets.right_arrow} className='w-4'/>
                    </a>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Projects