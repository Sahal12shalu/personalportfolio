import React from 'react'
import { DraggableCardDemo } from './Draggablecard'

function Hobbies() {
  return (
    <div id='travels' className="scroll-smooth h-auto w-full flex flex-col items-center relative">
        <p className="text-white/70 w-[146px] mt-10 text-xl flex justify-center items-center font-semibold rounded-4xl border-2 shadow-md shadow-white/80 border-white/50 p-2 px-6">Travels</p>
    <DraggableCardDemo />
    <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-b from-transparent to-white">
      </div>
    </div>
  )
}

export default Hobbies