import React from 'react'
import CSIMG from '../assets/CreditSpotter.png'
import Connect from '../assets/acm_connect.png'

const Projects = () => {
  return (
    <div name="projects" className='w-full text-gray-200 bg-[#111111]'>
      <div className='max-w-[1000px] mx-auto p-4 sm:pt-52 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 pt-8 sm:pt-0'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-200 border-gray-200'>Projects</p>
          <p className='py-6'>// Check out some of my most recent projects</p>
        </div>

        {/* Container with updated grid settings */}
        <div className='grid grid-cols-1 gap-3 sm:grid sm:grid-cols-2 sm:gap-3 sm:space-y-3 text-center py-8'>

          {/* Grid Item for Quantum Vision */}
          <div
          className='qv hover:shadow-lg hover:shadow-red-500 transform transition ease-in-out duration-300 group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 transform transition ease-in-out duration-300'>
              <span className='flex text-xs sm:text-2xl text-gray-200 tracking-wider text-center w-4/5 translate-x-6 sm:translate-x-10'>
              Quantum Vision - Simulation based modern and quantum physics web app, built using Svelte-Kit and TypeScript
              </span>
              <div className='sm:pt-8 text-center'>
                <a href='https://www.qvisionsim.com' target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0d0f11] text-gray-200 font-bold text-lg hover:scale-110 duration-300'>Visit Site</button>
                  </a>
                <a href='https://github.com/alexfisher03/QuantumVision' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0d0f11] text-gray-200 font-bold text-lg hover:scale-110 duration-300'>View Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item for UF-ACM */}
          <div
          className='acm1 hover:shadow-lg hover:shadow-[#bb75af] transform transition ease-in-out duration-300 group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 transform transition ease-in-out duration-300'>
              <span className='flex text-sm sm:text-2xl font-bold text-[#091824] tracking-wider text-center'>
              ACMake Design Team - Redesigned the official UF ACM Website using React, Tailwind, and Firebase
              </span>
              <div className='sm:pt-8 text-center'>
                <a href='https://www.uf-acm.com' target="_blank">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0d0f11] text-gray-200 font-bold text-lg hover:scale-110 duration-300'>Visit Site</button>
                  </a>
                <a href='https://github.com/a1exanderklein/ACM-Website' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0d0f11] text-gray-200 font-bold text-lg hover:scale-110 duration-300'>View Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item for ACM Connect */}
          <div style={{backgroundImage: `url(${Connect})`}}
          className='hover:shadow-lg hover:shadow-[#d9a6d9] transform transition ease-in-out duration-300 group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 bg-white duration-500'>
              <span className='flex text-sm sm:text-2xl font-bold text-[#091824] tracking-wider text-center'>
              ACMake Design Team - ACM Connect Opportunities and Events Discord Bot
              </span>
              <div className='sm:pt-8 text-center'>
                <a href='https://github.com/j10czar/opportunities-discord-bot?tab=readme-ov-file' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0d0f11] text-gray-200 font-bold text-lg hover:scale-110 duration-300'>View Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item for Barbell */}
          <div className='bb hover:shadow-lg hover:shadow-[#7b487c] transform transition ease-in-out duration-300 group container rounded-md flex justify-center items-center mx-auto content-div'>
           {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 transform transition ease-in-out duration-300'>
              <span className='flex text-sm sm:text-2xl font-bold text-[#ffffff] tracking-wider text-center'>
              Barbell - Full Stack Social Media Gym App Powered With Django
              </span>
              <div className='sm:pt-8 text-center'>
                <a href='https://www.socialbarbell.com' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0d0f11] text-gray-200 font-bold text-lg hover:scale-110 duration-300'>Visit App</button>
                </a>
                <a href='https://www.github.com/alexfisher03/barbell' target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0d0f11] text-gray-200 font-bold text-lg hover:scale-110 duration-300'>View Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item for Craiglist */}
          <div className='ccc hover:shadow-lg hover:shadow-[#a6bed9] transform transition ease-in-out duration-300 group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 transform transition ease-in-out duration-300'>
              <span className='flex text-sm sm:text-2xl font-bold text-white tracking-wider text-center'>
              Craigslist CarCache - C++ applet which sorts and provides best deals on real car listings: uses OOP, Hashing, and AVL Trees
              </span>
              <div className='sm:pt-8 text-center'>
                <a href='https://github.com/alexfisher03/COP3530_project3' target="_blank"> 
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0d0f11] text-gray-200 font-bold text-lg hover:scale-110 duration-300'>View Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item for Credit Spotter */}
          <div style={{backgroundImage: `url(${CSIMG})`}}
          className='hover:shadow-lg hover:shadow-[#a6bed9] transform transition ease-in-out duration-300 group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100 bg-[#545454] duration-500'>
              <span className='flex text-sm sm:text-2xl font-bold text-[#091824] tracking-wider text-center'>
              Credit Spotter - Financial Aid AI Chatbot Built With OpenAI's LLM API & React during the SHPE'24 Hackathon
              </span>
              <div className='sm:pt-8 text-center'>
                <a href='https://github.com/alexfisher03/CFC_Hackathon2024' target="_blank"> 
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#0d0f11] text-gray-200 font-bold text-lg hover:scale-110 duration-300'>View Code</button>
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