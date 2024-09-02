import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import ThemeSwitcher from './ThemeSwitcher'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="py-20 overflow-hidden">
        <div>
            {/* Spotlights for light mode*/}          
            <Spotlight className='left-52 md:left-80 lg:left-[26rem] xl:left-[32rem] 2xl:left-1/2 top-16 md:top-28 w-[100vw] h-[60vh] sm:w-[90vw] lg:w-[70vw] hidden sm:block dark:hidden' fill='palevioletred'/>
            

            {/* Spotlights for dark mode*/}   
            <Spotlight className='left-52 md:left-80 lg:left-[26rem] xl:left-[32rem] 2xl:left-1/2 top-16 md:top-28 w-[100vw] h-[60vh] sm:w-[90vw] lg:w-[70vw] hidden dark:block' fill='white'/>
            
        </div>

        <div className="h-screen max-h-[36rem] md:max-h-[38rem] lg:max-h-[40rem] w-full dark:bg-black-100 bg-gray-100 dark:bg-grid-white/[0.06] 
        bg-grid-black/[0.05] flex items-center justify-center absolute top-0 left-0">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center 
            dark:bg-black-100 bg-gray-100
            [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">

            </div>

        </div>

        <div className='w-16 h-full fixed z-50 top-5 left-5 sm:top-10 sm:left-10'>
            <ThemeSwitcher />
        </div>

        <div className = "flex justify-center relative my-20 z-10">
            <div className='max-w-[79vw] md:max-w-xl lg:max-w-[50vw] flex flex-col items-center justify-center'>
                
                <h2 className = "uppercase tracking-widest text-xs text-center text-blue-950 dark:text-blue-100 max-w-80">
                    Web and AI Developer
                </h2>

                <TextGenerateEffect 
                    className='text-center text-[40px] md:text-5xl lg:text-6xl mb-4' 
                    words="Hello, I&apos;m Geoffrey">
                </TextGenerateEffect>

                <p className = "mb-8 md:mb-0 uppercase tracking-widest text-xs text-center max-w-[40rem] text-blue-950 dark:text-blue-100">
                    Currently a Loughborough University student on placement year studying <span className='text-cyan-800 dark:text-purple'>Computer Science and AI</span>
                </p>

                <Link href="#Projects">
                    <MagicButton 
                    title="Show my work"
                    icon={<FaLocationArrow />}
                    position = "right"
                    />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero