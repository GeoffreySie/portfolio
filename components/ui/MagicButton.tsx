import React from 'react'

const MagicButton = ({
    title, handleClick, otherClasses
}: {
    title: string;
    icon?: React.ReactNode;
    position?: string;
    handleClick?: () => void;
    otherClasses?: string;
 }) => {
  return (

    <button 
    className={`shadow-[0_0_0_3px_#000000_inset] w-full px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 ${otherClasses}`} 
    onClick={handleClick}>
        {title}
    </button>
  )
}

export default MagicButton 