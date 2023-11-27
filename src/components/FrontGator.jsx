import React from 'react'
import Gator from '../assets/gator.png'

const FrontGator = () => {
  return (
    <div className='hover:scale-125 hover:translate-x-11 hover:rotate-12 translate-x-16 -translate-y-20 transition-all duration-700 delay-200 z-20 BackGator' alt='Gator Image 1'>
        <img src={Gator}/>
    </div>
  )
}

export default FrontGator