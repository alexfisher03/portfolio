import React from 'react'
import BBIMG from '../assets/barbell.png'

const Projects = () => {
  return (
    <div name="projects" className='w-full md:h-screen text-gray-400 bg-[#091824]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-400 border-blue-200'>Projects</p>
          <p className='py-6'>// Check out some of my most recent projects</p>
        </div>

        {/* Container -- ADD GRID TO CLASSNAME FOR THIS DIV IF ADDING MORE ITEMS */}
        <div className='sm:grid-cols-2 md:grid-cols-3 gap-4'>

        {/* Grid Item - append once more projects to display */}
          <div style={{backgroundImage: `url(${BBIMG})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
           
           {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 duration-300'>
              <p className='text-2xl font-bold text-gray-300 tracking-wider text-center'>
              Barbell - A Full Stack Web Application
              </p>
                <div className='pt-8 text-center'>
                  <a href='https://www.socialbarbell.com' target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-gray-700 font-bold text-lg hover:scale-110 duration-300'>Visit App</button>
                  </a>
                  <a href='https://www.github.com/alexfisher03/barbell' target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-400 text-gray-700 font-bold text-lg hover:scale-110 duration-300'>View Code</button>
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