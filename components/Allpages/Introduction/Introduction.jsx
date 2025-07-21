import React from "react";
import { cn } from "@/app/lib/utils";
import { Spotlight } from "../../ui/introduction";
import { CarouselDemo } from "./Carousel";
import { MdOutlineEmail } from "react-icons/md";

export function Introduction() {
  return (
    <div id="about"
      className="relative scroll-smooth flex h-full lg:h-[105vh] w-full overflow-hidden rounded-md antialiased md:items-center md:justify-center">
      <div className="absolute inset-0 z-10">
        <div className="absolute md:bottom-80 bottom-20 right-0 lg:right-10 w-74 h-64 bg-white/30 rounded-full blur-3xl"></div>
        </div>
      <div
        className={cn(
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )} />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
      <div className="flex flex-col w-full">
        <div className="flex justify-center items-center">
        <p className="text-white/70 mt-10 text-xl font-semibold rounded-4xl border-2 shadow-md shadow-white/80 border-white/50 p-2 px-6">Who i Am</p>
        </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl lg:px-4 pb-4 md:pt-0 lg:flex">
        <div className="lg:w-[50%] w-full text-white flex justify-center items-center pt-10 md:pt-0 flex-col">
             <h1
          className="bg-opacity-50 bg-gradient-to-b underline decoration-1 underline-offset-3 decoration-white/60 from-neutral-50 to-neutral-400 bg-clip-text text-center text-2xl font-bold text-transparent md:text-3xl">
          MUHAMMED SAHAL K.E,
        </h1>
        <div className="max-lg:px-10 text-center">
        <p className="mt-2 text-white/70 font-semibold">Address : S/O ibrahim, sahal mahal house, arafa street PIN:671121</p>
        </div>
        <div className="flex gap-10">
        <p className="mt-2 text-white/70 font-semibold">DOB : 13/01/2003</p>
        <p className="mt-2 text-white/70 font-semibold">Sex : Male</p>
        </div>
        <div className="flex gap-10">
        <p className="mt-2 text-white/70 font-semibold">District : Kasaragod</p>
        <p className="mt-2 text-white/70 font-semibold">State : Kerala</p>
        </div>
        <div className=" flex gap-2 max-lg:justify-center max-lg:items-center ">
        <MdOutlineEmail className="w-[22px] h-[22px] mt-2.5 opacity-80" /><p className="mt-2 text-white/70 font-semibold">Email : sahalshalu806@gmail.com</p>
        </div>
        <div className="flex flex-col">
            <h1
          className="bg-opacity-50 bg-gradient-to-b mt-8 underline underline-offset-3 decoration-1 decoration-white/60 from-neutral-50 to-neutral-400 bg-clip-text text-center text-2xl font-bold text-transparent md:text-3xl">
          WEBSITE DEVOLOPER
        </h1>
        <p className="px-10 text-white/75 text-center pt-3">Passionate MERN Stack developer with a focus on building responsive and user-friendly websites. Skilled in Next.js, React, Node.js, MongoDB, and Tailwind CSS. I love turning ideas into real, working products and always strive to deliver clean and efficient code.</p>
        </div>
        </div>
        <div className="lg:w-[50%] w-full text-white flex justify-center items-center">
            <CarouselDemo />
        </div>
      </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-b from-transparent to-white">
      </div>
    </div>
  );
}
