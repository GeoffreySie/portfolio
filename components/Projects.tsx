import React from 'react'
import { projects } from '@/data/index'
import { PinContainer } from '@/components/ui/3d-pin'
import Image from 'next/image'
import { FaLocationArrow } from 'react-icons/fa'
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'

const Projects = () => {
  return (
    <div className='py-20 flex flex-col justify-center items-center' id='Projects'>
        <h1 className='heading'>
            My <span className='text-cyan-800 dark:text-purple'>Projects</span>
        </h1>

        <div className='flex flex-wrap items-center justify-center p-4 mt-10 gap-x-16 gap-y-20 lg:gap-y-4'>
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div 
                    key={id} 
                    className='flex items-center justify-center w-[23rem] sm:w-[25rem] h-[25rem] lg:h-[32.5rem] transition-transform duration-300 hover:-translate-y-3' // Added transition classes
                >
                    <Link href={link} className='cursor-pointer relative'>
                        <div className='p-4 flex flex-col rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-neutral-100 dark:bg-gray-900 border border-white/[0.2] overflow-hidden'>
                            <div className='relative flex items-center justify-center w-[23rem] sm:w-[25rem] h-[15.5rem] lg:h-[17.5rem] mb-4 overflow-hidden'>
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-gray-300 dark:bg-[#13162d]'>
                                    <Image 
                                        src='/bg.png' 
                                        alt='bg-img'
                                        width={400}
                                        height={280}
                                        className='w-full h-full object-cover' 
                                    />
                                </div>
                                <Image
                                    src={img} 
                                    alt={title} 
                                    width={400}
                                    height={280}
                                    className='absolute rounded items-center justify-center object-cover'
                                />
                            </div>
                            <h1 className='text-gray-900 dark:text-gray-100 font-bold md:text-xl line-clamp-1 mb-2'>
                                {title}
                            </h1>
                            <p className='text-gray-800 dark:text-blue-100 lg:text-base font-light text-sm line-clamp-3'>
                                {des}
                            </p>
                            <div className='flex items-center justify-between mt-4'>
                                <div className='flex flex-row items-center'>
                                    <AnimatedTooltip items={iconLists} />
                                </div>
                                <div className='flex justify-center items-center pr-4'>
                                    <p className='flex md:text-sm text-xs'>Visit</p>
                                    <FaLocationArrow className='text-purple ms-3'/>
                                </div>

                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects
