import React from 'react'
import { ThreeDCard } from './Cardcomponent'
import { ExpandableCard } from './Learningpath'

function Aboutweb() {
  return (
    <div className='h-auto relative'>
        <div className="absolute top-70 lg:left-0/2 w-96 h-32 bg-white/40 rounded-full blur-3xl"></div>
        <div className="absolute max-md:top-120 lg:top-120 lg:left-40/48 w-62 h-52 bg-white/30 rounded-full blur-3xl"></div>
      <div className='w-full h-[13%] flex justify-center items-center'>
      <p className="text-white/70 w-[166px] mt-10 text-xl font-semibold flex justify-center items-center rounded-4xl border-2 shadow-md shadow-white/80 border-white/50 p-2 px-6">Tech Stack</p>
    </div>
    <div className='w-full h-[87%]'>
    <div className='h-auto '>
      <ThreeDCard />
    </div>
    <div className='h-auto '>
      <p className="text-white/80 text-2xl text-center font-semibold max-lg:mt-4 underline underline-offset-4 decoration-1">Learning Path</p>
      <ExpandableCard />
    </div>
    </div>
    <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-b from-transparent  to-white">
      </div>
    </div>
  )
}

export default Aboutweb