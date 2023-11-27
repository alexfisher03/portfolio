import React from 'react'
import Gator from '../assets/gator2.png'

const BackGator = () => {
  return (
    <div className='hover:scale-125 duration-700 hover:translate-x-11 hover:rotate-12 translate-x-16 -translate-y-40 z-0 transition-all BackGator' alt='Gator Image 2'>
        <img src={Gator}/>
    </div>
  )
}

export default BackGator