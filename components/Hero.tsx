import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import ThemeSwitcher from './ThemeSwitcher'

const Hero = () => {
  return (
    <div className="py-20">
        <div>
            {/* Spotlights for light mode*/}          
            <Spotlight className='-top-40 -left-10 
            md:-left-32 md:-top-20 h-screen dark:hidden' fill='cyan'/>
            <Spotlight className='top-10 left-full 
            h-[80vh] w-[50vw] dark:hidden' fill='DarkCyan'/>
            <Spotlight className='top-28 left-80
            h-[90vh] w-[80vw] dark:hidden' fill='Purple'/>

            {/* Spotlights for dark mode*/}   
            <Spotlight className='-top-40 -left-10 
            md:-left-32 md:-top-20 h-screen hidden dark:block' fill='white'/>
            <Spotlight className='top-10 left-full 
            h-[80vh] w-[50vw] hidden dark:block' fill='purple'/>
            <Spotlight className='top-28 left-80
            h-[80vh] w-[50vw] hidden dark:block' fill='blue'/>
        </div>

        <div className="h-screen max-h-[36rem] md:max-h-[42rem] w-full dark:bg-black-100 bg-gray-100 dark:bg-grid-white/[0.06] 
        bg-grid-black/[0.05] flex items-center justify-center absolute top-0 left-0">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center 
            dark:bg-black-100 bg-gray-100
            [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">

            </div>

        </div>

        <div className='w-16 h-full fixed z-50 top-5 left-5 sm:top-10  sm:left-10'>
            <ThemeSwitcher />
        </div>

        <div className = "flex justify-center relative my-20 z-10">
            <div className='max-w-[79vw] md:max-w-xl lg:max-w-[50vw] flex flex-col items-center justify-center'>
                
                <h2 className = "uppercase tracking-widest text-xs text-center text-blue-950 dark:text-blue-100 max-w-80">
                    Hello, I&apos;m Geoffrey
                </h2>
                <TextGenerateEffect 
                    className='text-center text-[40px] md:text-5xl lg:text-6xl mb-4' 
                    words='Web and AI/ML Developer using Modern Solutions'>

                </TextGenerateEffect>

                <p className = "uppercase tracking-widest text-xs text-center max-w-90 text-blue-950 dark:text-blue-100">
                    Currently a Loughborough University student on placement year studying Computer Science and AI
                </p>

                <a href="#about">
                    <MagicButton 
                    title="Show my work"
                    icon={<FaLocationArrow />}
                    position = "right"
                    />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero