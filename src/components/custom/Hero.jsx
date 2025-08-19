import React from 'react'
import { Button } from '../ui/button'
function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h2 className='font-extrabold text-[44px] text-center mt-16'>
        <span className='text-[#f56551]'>Discover Your Next Adventure with AI:</span><br></br>Personalized Itineraries at Your Fingertips</h2>
    <p className='text-xl text-gray-500 text-center'>Your personal trip planner and trip curator, creating custom iteneraries tailored to your intertests and budget.</p>
    <div>
      <Button>Get Started, It's Free</Button>
    </div>
    </div>
  )
}

export default Hero