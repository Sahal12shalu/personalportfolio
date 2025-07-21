"use client";
import React from "react";
import { BackgroundBeams } from "../../../components/ui/bg-beams";
import { TailwindcssButtons } from "./buttons";
import Image from "next/image";
import myimage from '../../../public/image/bg.png'
import {motion} from 'framer-motion'

export function Background() {
  return (
    <div id="Home" className="relative scroll-smooth lg:flex max-lg:h-[97vh] max-lg:justify-center max-lg:items-center max-lg:flex max-lg:flex-col w-[100%] h-[100vh]">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ root : true }}
       className="lg:w-[45%] lg:h-[100vh] w-full flex justify-center items-center md:ml-4 md:mt-5">
        <div className="relative flex justify-center items-center rounded-full xl:w-[60%] xl:h-[60%] lg:h-[60%] z-80 bg-black/40">
        <div className="absolute w-full h-full rounded-full bg-black/10 z-98 "></div>
        <Image src={myimage} alt="myimage" className="w-full h-full lg:pt-10 rounded-full" />
        </div>
      </motion.div>
      <div
        className="lg:h-[100vh] w-full lg:w-[45%] rounded-md relative flex flex-col items-center justify-center antialiased scroll-smooth">
        <div className="max-w-2xl mx-auto p-4 ">
          <motion.p
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 10 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ root : true }}
           className="text-center text-[22px] bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-400 font-semibold">Hi i'm Sahal</motion.p>
          <motion.h1
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 10 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ root : true }}
            className="relative z-10 text-4xl lg:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            MERN STACK DEVOLOPER
          </motion.h1>
          <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ root : true }}
            className="text-neutral-300 max-w-3xl mx-auto my-2 mt-6 text-sm text-center relative z-10">
            I'm a passionate MERN Stack Developer from Kasaragod (KSD), Kerala, with a strong foundation in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I love creating responsive user experiences that solve real-world problems.
            Apart from coding, I'm also a dedicated singer 🎶, with a deep love for melodies and stage performances. Whether it's writing code or composing tunes, I bring creativity, precision, and passion into everything I do.
          </motion.p>
          <div>
            <TailwindcssButtons />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-b from-transparent to-white">
      </div>
      <BackgroundBeams />
    </div>
  );
}
