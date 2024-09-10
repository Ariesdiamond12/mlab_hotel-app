import React from 'react'
import Santorini from '../assets/santorini.jpg'

function Hero() {
  return (
    <div className='w-full h-screen relative'>
      <img className='w-full h-full object-cover' src={Santorini} alt="" />
    </div>
  )
}

export default Hero