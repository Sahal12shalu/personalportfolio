"use client";
import React from "react";
import { StickyScroll } from "../../ui/sticky-scroll";
import resturant from '../../../public/image/projects/resturant.png'
import hakeem from '../../../public/image/projects/hakeem.png'
import delivery from '../../../public/image/projects/fooddelivery.png'
import chatapp from '../../../public/image/projects/chat-app.png'
import Image from "next/image";
import {motion} from 'framer-motion'

const content = [
  {
    title: "Resturant Food Order Website",
    description:
      "A full-stack restaurant food ordering web application built using Next.js for server-side rendering and routing, Tailwind CSS for fast and responsive UI design, and MongoDB as the backend database. The platform allows users to browse a dynamic food menu, customize orders, and place real-time food orders. Admins can manage menu items and track orders through a secure dashboard.",
    content: (
      <div
        className=" group flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
      <Image
          src={resturant}
          width={300}
          height={300}
          className="h-full w-full max-lg:px-5 object-fill relative"
          alt="linear board demo" />
          <a href="http://resturantorder.vercel.app" className="hidden absolute group-hover:flex justify-center items-center w-full h-full hover:bg-black/20">
      <button className=" p-4 h-[40px] group-hover:flex justify-center items-center rounded-3xl font-semibold bg-black/80">View Site</button>
      </a>
      </div>
    ),
  },
  {
    title: "Real Time Chat-App",
    description:
      "This is a fully functional real-time chat application built using modern web technologies. The app allows users to join chat rooms and exchange messages instantly. It is designed to provide a seamless and interactive messaging experience, similar to popular messaging platforms.",
    content: (
      <div className="group flex h-full w-full items-center justify-center text-white">
        <Image
          src={chatapp}
          width={300}
          height={300}
          className="h-full w-full max-lg:px-5 object-cover relative"
          alt="linear board demo" />
          <a href="https://chatapp-nbmw.onrender.com" className="hidden absolute group-hover:flex justify-center items-center w-full h-full hover:bg-black/20">
      <button className=" p-4 h-[40px] group-hover:flex justify-center items-center rounded-3xl font-semibold bg-black/80">View Site</button>
      </a></div>
    ),
  },
  {
    title: "Food Order Website",
    description:
      "A full-stack food ordering web application developed using React for the frontend and Express.js for the backend, with MongoDB Atlas as the cloud database. This platform allows users to browse food items, add to cart, create accounts, login, and securely place orders with Razorpay payment gateway. The application features a modern UI, cart management, and order tracking.",
    content: (
      <div
        className=" group flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <Image
          src={delivery}
          width={300}
          height={300}
          className="h-full max-lg:px-5 w-full object-fill relative"
          alt="linear board demo" />
          <a href="https://shalustore22.onrender.com" className="hidden absolute group-hover:flex justify-center items-center w-full h-full hover:bg-black/20">
      <button className="p-4 h-[40px] rounded-3xl group-hover:flex justify-center items-center font-semibold bg-black/80">View Site</button>
      </a></div>
    ),
  },
];
export function StickyScrollReveal() {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
    className="w-full py-4 lg:py-15 max-lg:pb-10">
      <StickyScroll content={content} />
    </motion.div>
  );
}
