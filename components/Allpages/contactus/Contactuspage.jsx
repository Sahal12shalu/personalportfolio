import React from 'react'
import { SubmitForm } from './Formpage'

function Contactuspage() {
  return (
    <div id='contact' className='h-auto scroll-smooth relative w-full flex flex-col justify-center items-center bg-gradient-to-l from-black/40 to-white/15'>
        <p className="text-white/70 w-[150px] mt-10 text-xl flex justify-center items-center font-semibold rounded-4xl border-2 shadow-md shadow-white/80 border-white/50 p-2 px-6">Hire Me</p>
    <SubmitForm />
    <div className="absolute bottom-0 left-0 w-full h-1.5 blur-sm bg-gradient-to-b  from-transparent to-white">
      </div>
    </div>
  )
}

export default Contactuspage