import React from 'react'
import ExperienceList from './ExperienceList'

const Experience = () => {
  return (
    <div className='py-20' id='Experience'>
        <h1 className='heading mb-8'>
            My <span className='text-cyan-800 dark:text-purple'>Experience</span>
        </h1>
        <ExperienceList />
    </div>
  )
}

export default Experience