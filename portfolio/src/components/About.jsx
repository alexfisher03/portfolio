import React from 'react'
import Gator from '../assets/gator.png'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#091824] text-gray-400'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#8892b0]'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-3xl font-bold'>
                    <p>Hi, I'm Alex - Welcome to my portfolio website!</p>
                </div>
                <div>
                    <p>I built this website using Nodejs, React, and Tailwind CSS. I'm currently studying Computer Science at the University of Florida, actively seeking opportunities to expand my professional horizons.</p>
                </div>
                <div className='sm:text-right pb-8 pl-4 py-3'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#8892b0]'>My Education</p>
                </div>
                <div></div>
                <div className='sm:text-right -translate-y-6'>
                    <p className='text-[#003087] text-4xl text-bold'>University of Florida</p>
                    <p className='py-1 text-xl'>B.S. in Computer Science - Expected May 2026</p>
                </div>
                <div className='lg:inline hidden hover:scale-125 duration-700 hover:translate-x-11 hover:rotate-12 translate-x-16 -translate-y-20 z-0'>
                    <a href='https://www.ufl.edu/' target='_blank'><img src={Gator} alt='Gator Image'/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About