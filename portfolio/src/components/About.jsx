import React from 'react'

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
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Alex and welcome to my portfolio website!</p>
                </div>
                <div>
                    <p>I'm currently studying Computer Science at the University of Florida, actively seeking opportunities to expand my professional horizons in diverse fields.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About