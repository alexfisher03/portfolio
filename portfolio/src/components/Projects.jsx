import React from 'react'
import BBIMG from '../assets/barbell.png'
import CSIMG from '../assets/CreditSpotter.png'

const Projects = () => {
  return (
    <div name="projects" className='w-full md:h-screen text-gray-400 bg-[#091824]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-400 border-blue-200'>Projects</p>
          <p className='py-6'>// Check out some of my most recent projects</p>
        </div>

        {/* Container with updated grid settings */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-96'>

          {/* Grid Item for Barbell */}
          <div style={{backgroundImage: `url(${BBIMG})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
           
           {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 duration-500'>
              <span className='flex text-sm sm:text-2xl font-bold text-[#091824] tracking-wider text-center'>
              Barbell - Full Stack Social Media Gym App Powered With Django
              </span>
              <div className='sm:pt-8 text-center'>
                <a href='https://www.socialbarbell.com' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-[#091824] font-bold text-lg hover:scale-110 duration-300'>Visit App</button>
                </a>
                <a href='https://www.github.com/alexfisher03/barbell' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-[#091824] font-bold text-lg hover:scale-110 duration-300'>View Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item for CreditSpotter */}
          <div style={{backgroundImage: `url(${CSIMG})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
           
           {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 bg-[#545454] duration-500'>
              <span className='flex text-sm sm:text-2xl font-bold text-[#091824] tracking-wider text-center'>
              CreditSpotter - Financial Aid AI Chatbot Built With OpenAI's LLM API
              </span>
              <div className='sm:pt-8 text-center'>
                <a href='https://github.com/alexfisher03/CFC_Hackathon2024' target="_blank"> {/* Change these URLs to your project links */}
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-[#091824] font-bold text-lg hover:scale-110 duration-300'>View Code</button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects