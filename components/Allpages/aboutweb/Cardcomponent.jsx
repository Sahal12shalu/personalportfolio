"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../../ui/3dcard";
import Image from "next/image";
import mongodb from '../../../public/image/mern/mongodb.jpg'
import express from '../../../public/image/mern/express.jpeg'
import react from '../../../public/image/mern/react.jpg'
import nodejs from '../../../public/image/mern/nodejs.jpg'
import { motion } from 'framer-motion'

export function ThreeDCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 20 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      viewport={{ root: true }}
      className="flex justify-center items-center flex-wrap max-sm:gap-2 sm:gap-4 lg:gap-6">
      <CardContainer className="inter-var">
        <CardBody
          className="bg-green-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[14rem] lg:w-[17rem] h-[18rem] lg:h-[22rem] rounded-xl p-5 border  ">
          <CardItem translateZ="100" className="w-full">
            <Image
              src={mongodb}
              height="1000"
              width="1000"
              className="lg:h-50 w-full h-36 object-fill rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail" />
          </CardItem>
          <CardItem
            translateZ="50"
            className="lg:text-xl text-[16px] w-full text-center font-bold text-neutral-600 mt-2 lg:mt-4">
            Mongo DB
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-1 lg:mt-2 text-center dark:text-neutral-300">
            NoSQL database used for storing documents
          </CardItem>
        </CardBody>
      </CardContainer>


      <CardContainer className="inter-var">
        <CardBody
          className="bg-white/90 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[14rem] lg:w-[17rem] h-[18rem] lg:h-[22rem] rounded-xl p-5 border  ">
          <CardItem translateZ="100" className="w-full ">
            <Image
              src={express}
              height="1000"
              width="1000"
              className="lg:h-50 w-full h-36 object-fill rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail" />
          </CardItem>
          <CardItem
            translateZ="50"
            className="lg:text-xl text-[16px] w-full text-center font-bold text-neutral-600 mt-2 lg:mt-4">
            Express JS
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-1 lg:mt-2 text-center dark:text-neutral-300">
            minimal and flexible node is web application frameworks
          </CardItem>
        </CardBody>
      </CardContainer>

      <CardContainer className="inter-var">
        <CardBody
          className="bg-blue-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[14rem] lg:w-[17rem] h-[18rem] lg:h-[22rem] rounded-xl p-5 border  ">
          <CardItem translateZ="100" className="w-full ">
            <Image
              src={react}
              height="1000"
              width="1000"
              className="lg:h-50 w-full h-36 object-fill rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail" />
          </CardItem>
          <CardItem
            translateZ="50"
            className="lg:text-xl text-[16px] w-full text-center font-bold text-neutral-600 mt-2 lg:mt-4">
            React JS
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm text-center max-w-sm mt-1 lg:mt-2 dark:text-neutral-300">
            javascript library for building user inerface
          </CardItem>
        </CardBody>
      </CardContainer>

      <CardContainer className="inter-var">
        <CardBody
          className="bg-gray-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[14rem] lg:w-[17rem] h-[18rem] lg:h-[22rem] rounded-xl p-5 border  ">
          <CardItem translateZ="100" className="w-full ">
            <Image
              src={nodejs}
              height="1000"
              width="1000"
              className="lg:h-50 w-full h-36 object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail" />
          </CardItem>
          <CardItem
            translateZ="50"
            className="lg:text-xl w-full text-center text-[16px] font-bold text-neutral-600 mt-2 lg:mt-4">
            Node JS
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm text-center max-w-sm mt-1 lg:2 dark:text-neutral-300 ">
            javascript runtime for building server-side app
          </CardItem>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}
