import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Django from '../assets/django.png'
import JavaScript from '../assets/javascript.png'
import Python from '../assets/python.png'
import ReactIMG from '../assets/react.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#091824] text-gray-400'>
        {/* Container */}
        <div className='max-w-[1000px] font-bold mx-auto p-4 flex flex-col justify-center w-full h-full'>
           <div>
            <p className='text-4xl inline border-b-4 border-blue-200'>Skills</p>
            <p className='py-4'>// These are some of the technologies I've worked with so far</p>
           </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className="w-20 mx-auto" src={HTML} alt='HTML icon' />
                <p className='ny-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className="w-20 mx-auto" src={CSS} alt='CSS icon' />
                <p className='ny-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className="w-20 mx-auto" src={Python} alt='Python icon' />
                <p className='ny-4'>PYTHON</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className="w-20 mx-auto" src={Django} alt='Django icon' />
                <p className='ny-4'>DJANGO</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className="w-20 mx-auto" src={JavaScript} alt='JavaScript icon' />
                <p className='ny-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className="w-20 mx-auto" src={ReactIMG} alt='React icon' />
                <p className='ny-4'>REACT</p>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Skills