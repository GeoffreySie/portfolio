import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-full pt-10 md:pt-20 pb-10 md:pb-20' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='heading max-w-[50vw]'>
                Always <span className='text-cyan-800 dark:text-purple'>Improving</span>, Always <span className='text-cyan-800 dark:text-purple'>Doing My Best</span>
            </h1>
            <a href='mailto:contact@siegeoffrey@gmail.com' className='mt-5 md:mt-0'>
                <MagicButton 
                    title='Contact Me' 
                    icon={<FaLocationArrow />} 
                    position='right' 
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Geoffrey</p>
            <div className='flex items-center md:gap-3 gap-6 mt-5 md:mt-0'>
                {socialMedia.map((profile) => (
                    <a 
                    key={profile.id} 
                    className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
                    href={profile.href}>    
                        <Image src={profile.img} alt={`${profile.id}`} width={20} height={20}/>
                    </a>
                ))}

            </div>
        </div>
    </footer>
  )
}

export default Footer