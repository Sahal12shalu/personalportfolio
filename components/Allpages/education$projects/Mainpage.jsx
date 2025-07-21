import React from 'react'
import { StickyScrollReveal } from './stickyscroll'
import { SparklesPreview } from './Sparkles'
import { InfiniteMovingCardsD } from './Movingcards'

function Mainpage() {
  return (
    <div className='text-white w-full h-auto lg:flex lg:flex-wrap relative '>
      <div id="Projects" className='lg:w-[50%] w-[100%] flex flex-col items-center'>
      <p className="text-white/70 scroll-smooth mt-10 text-xl flex items-center justify-center font-semibold rounded-4xl border-2 shadow-md shadow-white/80 border-white/50 p-2 px-6">Projects</p>
      <StickyScrollReveal />
      </div>
      <div className='lg:w-[50%] max-lg:px-5 w-[100%] flex flex-col items-center'>
      <p className="text-white/70 mt-10 text-xl flex items-center justify-center font-semibold rounded-4xl border-2 shadow-md shadow-white/80 border-white/50 p-2 px-6">Education</p>
      <SparklesPreview />
      </div>
      <div className='max-lg:px-5 w-[100%] flex flex-col items-center'>
        <p className="text-white/70 mt-10 text-xl flex items-center justify-center font-semibold rounded-4xl border-2 shadow-md shadow-white/80 border-white/50 p-2 px-6">Blog Spot</p>
        <InfiniteMovingCardsD />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-2  bg-gradient-to-b from-transparent to-white">
      </div>
    </div>
  )
}

export default Mainpage