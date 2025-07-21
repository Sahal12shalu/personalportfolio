import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

function Footer() {
  return (
    <div className='w-full max-md:flex-col flex justify-center items-center h-auto py-15 bg-gradient-to-b from-black/40 to-white/25 text-white'> 
    <div className='xl:w-[23%] max-2xl:w-[33%] max-md:w-full flex justify-center items-center h-full flex-col'>
      <h1 className='text-[20px] font-semibold'>Contact For Enquiry</h1>
      <div className='flex flex-wrap gap-2'>
      <MdOutlineEmail className='w-[22px] h-[22px] mt-2.5 opacity-80' /><p className='text-white/80 mt-2'>Email : Sahalshalu806@gmail.com</p>
      </div>
      <div className='flex flex-wrap gap-2'>
      <IoIosCall className='w-[22px] h-[22px] mt-2.5 opacity-80' /><p className='text-white/80 pt-2'>Mobile : 9633802786</p>
      </div>
      <a href='https://www.instagram.com/sahal__shalu_?igsh=aWQzNDB2aGwzOWNl&utm_source=qr'>
      <p className='text-white/80 pt-2 font-bold underline underline-offset-2 decoration-1'>© 2025 Shalu-webDevoloper</p></a>
    </div>
    <div className='xl:w-[23%] max-2xl:w-[33%] flex max-md:w-full max-md:pt-5 flex-col gap-4 justify-center items-center'>
      <p className='font-semibold text-white/80 '>Follow Us</p>
      <div className='flex gap-5 '>
      <a href='https://www.instagram.com/sahal__shalu_?igsh=aWQzNDB2aGwzOWNl&utm_source=qr'><FaInstagram className='w-[40px] h-[40px] text-red-400 hover:text-red-400/80' /></a>
      <a href='https://github.com/Sahal12shalu'><FaGithub className='w-[40px] h-[40px] ' /></a>
      <a href='https://wa.me/919633802786' target="_blank"><FaWhatsapp className='w-[40px] h-[40px] text-green-400 hover:text-green-400/80' /></a>
      <a href='https://www.linkedin.com/in/muhammed-sahal-678173332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><FaLinkedin className='w-[40px] h-[40px] text-blue-700 hover:text-blue-700/80' /></a>
      </div>
      <div>
        <p className='text-white/80 font-semibold underline underline-offset-2 decoration-1'>All Rights Reserved</p>
      </div>
    </div>
    <div className='xl:w-[23%] max-md:hidden max-2xl:w-[33%] flex gap-3 flex-col justify-center items-center'>
      <div className='flex gap-10 w-full justify-center items-center'>
        <a href='#Home' className='text-[16px] text-white/80 font-semibold'>• Home</a>
        <a href='#about' className='text-[16px] text-white/80 font-semibold'>• About</a>
      </div>
      <div className='flex gap-10 w-full justify-center items-center'>
        <a href='#contact' className='text-[16px] text-white/80 font-semibold'>• Contact</a>
        <a href='#' className='text-[16px] text-white/80 font-semibold'>• Cookies</a>
      </div>
      <div>
        <a href='https://www.instagram.com/web3design_hub?igsh=MWVnMXp2NGY5Z2ZocA==' className='text-white/80 font-bold'>@Web3design_hub</a>
      </div>
    </div>
    </div>
  )
}

export default Footer