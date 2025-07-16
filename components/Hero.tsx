import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import ThemeSwitcher from './ThemeSwitcher'
import Link from 'next/link'
import { socialMedia } from '@/data'
import Image from 'next/image'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";


const Hero = () => {
  return (
    <div className="py-20 overflow-hidden h-screen flex justify-center items-center">

        <div className='w-16 h-full fixed z-50 top-5 left-5 sm:top-10 sm:left-10'>
            <ThemeSwitcher />
        </div>

        <BackgroundBeamsWithCollision>

        <div className = "flex flex-col justify-center items-center my-20 w-full h-full">
            <div className='max-w-[79vw] md:max-w-xl lg:max-w-[50vw] flex flex-col items-center'>

                <TextGenerateEffect 
                    className='text-center text-[40px] md:text-5xl lg:text-6xl mb-8 lg:mb-20 lg:mt-20' 
                    words="Hello, World">
                </TextGenerateEffect>

                <p className = "mb-8 md:mb-0 uppercase tracking-widest text-sm md:text-medium text-center max-w-[40rem] text-blue-950 dark:text-blue-100">
                    I&apos;m Geoffrey, a 3rd year Loughborough University student studying <span className='text-cyan-800 dark:text-purple font-bold'>Computer Science and AI</span>
                </p>

                <div className='flex mt-16 md:flex-row flex-col justify-center items-center'>
                    <div className='flex items-center gap-6 mt-8 md:mt-0'>
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
                
                <div className='sm:mt-8 md:mt-20 lg:mt-32 lg:pb-20'>
                    <Link href="#Projects">
                        <MagicButton 
                        title="View My Work"
                        />
                    </Link>
                </div>
            </div>

        </div>

        </BackgroundBeamsWithCollision>
    </div>
  )
}

export default Hero