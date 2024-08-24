import React from 'react'
import { projects } from '@/data/index'
import { PinContainer } from '@/components/ui/3d-pin'
import Image from 'next/image'
import { FaLocationArrow } from 'react-icons/fa'

const Projects = () => {
  return (
    <div className='py-20 flex flex-col justify-center items-center'>
        <h1 className='heading'>
            My Projects
        </h1>

        <div className='flex flex-wrap items-center justify-center p-4 mt-10 gap-x-32 gap-y-4'>
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className='lg:h-[40rem] h-[30rem] flex items-center justify-center sm:w-[26rem] w-[80vw]'>
                    <PinContainer title={link} href={link}>
                        <div className='relative flex items-center justify-center sm:w-96 md:w-[30rem] w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-4'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                <Image 
                                    src='/bg.png' 
                                    alt='bg-img'
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <Image
                                src={img} 
                                alt={title} 
                                className='z-10 absolute bottom-0'
                                width={100}
                                height={100}
                            />
                            
                        </div>
                        <h1 className='text-gray-200 font-bold md:text-xl line-clamp-1 mb-2'>
                            {title}
                        </h1>
                        <p className='text-gray-200 lg:text-base font-light text-sm line-clamp-3'>
                            {des}
                        </p>
                        <div className='flex items-center justify-between mt-7'>
                            <div className='flex items-center'>
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={{transform: `translateX(-${10 * index}px)`}}>      
                                        <Image 
                                            src={icon} 
                                            alt={icon} 
                                            width={36}
                                            height={36}
                                            className='p-2'
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-center items-center'>
                                <p className='flex md:text-sm text-xs'>Open Github</p>
                                <FaLocationArrow className='text-purple ms-3'/>
                            </div>

                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects