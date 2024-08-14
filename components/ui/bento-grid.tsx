"use client";

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import Lottie from "react-lottie";
import  MagicButton  from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("siegeoffrey@gmail.com")
    setCopied(true)
  }

  return (
    <div
      className={cn(
        " row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col",
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(120,120,162,1) 100%)',
      }}
    >
      <div className={`${id===6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          <img
          src={img}
          alt={img}
          className={cn(imgClassName, 'object-cover object-center')}
          />
        </div>
        <div className={`absolute right-0 -bottom-5 ${id===5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full">

            </img>
          )}
        </div>
        {id===6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">

            </div>
          </BackgroundGradientAnimation>
        )}
      </div>

      <div className={
        cn(
          titleClassName, 
          'group-hover/bento:translate-x-2 transition duration-200 relative md:full min-h-40 flex flex-col pr-5 pl-5 pb-5'
        )
      }>
        <div className="font-sans font-extralight md:max-w-64 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
          {description}
        </div>

        <div className="font-sans font-bold text-lg lg:text-xl">
          {title}
        </div>

        {id===3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 ">
            <div className="mt-6 flex flex-col gap-3">
              {['React.js', 'Next.js', 'TypeScript'].map ((item) => (
                <span key = {item} className="p-2 text-xs lg:text-sm opacity-75 rounded-lg text-center bg-[#10132E]">
                  {item}
                </span>
              ))}
              <span className="lg:py-3 lg:px-2 py-2 px-2  rounded-lg text-center bg-[#10132E]"></span>
            </div>

            <div className="flex flex-col gap-3">
              <span className="lg:py-3 lg:px-2 py-2 px-2  rounded-lg text-center bg-[#10132E]"></span>
              {['MongoDB', 'Node.js', 'Express.js'].map ((item) => (
                <span key = {item} className="p-2 text-xs lg:text-sm opacity-75 rounded-lg text-center bg-[#10132E]">
                  {item}
                </span>
              ))}
              
            </div>
          </div>
        )}

        {id===6 && (
          <div className="flex flex-row justify-center">
            <div className={`absolute w-full h-full pointer-events-none`}>
              <Lottie options={{
                loop: copied,
                autoplay: copied,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice"
                }
              }} />
            </div>

            <MagicButton
              title={copied ? "Copied!" : "Copy my email"}
              icon={<IoCopyOutline/>}
              position="left"
              otherClasses="!bg-[#161a31]"
              handleClick={handleCopy}
            />
          </div>
        )}

      </div>
    </div>
  );
};
