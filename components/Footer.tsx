import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-full pt-10 md:pt-20 pb-10 mb-20 md:pb-20' id='Contacts'>
        <div className='flex flex-col items-center'>
            <h1 className='heading max-w-[50vw]'>
                Currently <span className='text-cyan-800 dark:text-purple'>#Open</span>To<span className='text-cyan-800 dark:text-purple'>Work</span>
            </h1>
            <a href='mailto:siegeoffrey@gmail.com' className='mt-5 md:mt-20'>
                <MagicButton 
                    title='Contact Me' 
                    icon={<FaLocationArrow />} 
                    position='right' 
                />
            </a>
        </div>
    </footer>
  )
}

export default Footer