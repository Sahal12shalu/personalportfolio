"use client";
import React from "react";
import { ButtonsCard } from "../../../components/ui/button";
import { motion } from 'framer-motion'

export function TailwindcssButtons() {

  return (

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ root: true }}
      className="flex gap-5 justify-center items-center">
      {buttons.map((button, idx) => (
        <ButtonsCard key={idx} >
          {button.component}
        </ButtonsCard>
      ))}
    </motion.div>
  );
}
export const buttons = [
  {
    name: "Lit up borders",
    description: "Gradient button with perfect corners",
    component: (
      <button className="p-[2px] relative">
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/10 rounded-lg" />
        <a href="/resume/resume.pdf" download="Sahal.pdf"><div
          className="lg:px-8 lg:py-2 px-6 py-2 hover:bg-black/10 rounded-[6px] shadow-md shadow-white/40 relative group transition duration-200 text-white max-md:bg-transparent bg-transparent">
          Download 
        </div></a>
      </button>
    ),
  },
  {
    name: "Lit up borders",
    description: "Gradient button with perfect corners",
    component: (
      <button className="p-[2px] relative">
        <div
          className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/90 rounded-lg " />
          <a href="#contact">
        <div
          className="lg:px-8 lg:py-2 px-6 py-2  hover:bg-white/30 rounded-[6px] shadow-md text-black shadow-white/30 relative group transition duration-200 max-md:bg-transparent bg-transparent">
          Contact
        </div></a>
      </button>
    ),
  },

];
