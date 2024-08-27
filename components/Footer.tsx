import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Image from 'next/image'
import { Switch } from '@nextui-org/react'

const Footer = () => {
  return (
    <footer className='w-full mb-[100px] md:mb-[50px] pb-10' id='contact'>
        <div className='flex flex-col items-center'>
            <Switch defaultSelected>
                Automatic updates
            </Switch>
            <h1 className='heading lg:max-w-[36vw]'>
                Always <span className='text-cyan-800 dark:text-purple'>Improving</span>, Always <span className='text-cyan-800 dark:text-purple'>Doing My Best</span>
            </h1>
            <a href='mailto:contact@siegeoffrey@gmail.com'>
                <MagicButton 
                    title='Contact Me' 
                    icon={<FaLocationArrow />} 
                    position='right' 
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Geoffrey</p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <Image src={profile.img} alt={`${profile.id}`} width={20} height={20}/>
                    </div>
                ))}

            </div>
        </div>
    </footer>
  )
}

export default Footer