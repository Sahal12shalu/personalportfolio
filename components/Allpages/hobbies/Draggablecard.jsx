import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../../ui/Drag-card";
import Image from "next/image";
import manali from '../../../public/image/travel/manali.jpg'
import mumbai from '../../../public/image/travel/delhi.jpg'
import punjab from '../../../public/image/travel/goldentemple.jpg'
import ooty from '../../../public/image/travel/ooty.jpg'
import wayanad from '../../../public/image/travel/wayanad.jpg'
import tajmahal from '../../../public/image/travel/tajmahal.jpg'
import delhi from '../../../public/image/travel/redfort.jpg'
import umayunstomb from '../../../public/image/travel/umayuns.jpg'

export function DraggableCardDemo() {
  const items = [
    {
      title: "Wayanad",
      image: wayanad,
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Punjab, Golden Temple",
      image: punjab,
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Agra, Taj Mahal",
      image: tajmahal,
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Ooty, Karnataka",
      image: ooty, 
       className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Umayuns Tomb",
      image: umayunstomb,
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
    {
      title: "Mumbai",
      image: mumbai,
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "New Delhi, Red Fort",
      image: delhi,
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Manali",
      image: manali,
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer
      className="relative flex h-screen w-full items-center justify-center overflow-clip mt-5">
        <div className="absolute top-10 lg:top-20 max-lg:right-0 lg:left-5/6 w-60 h-20 lg:h-52 bg-white/30 rounded-full blur-3xl"></div>
        <div className="absolute top-50 lg:left-1/24 w-96 h-32 bg-white/40 rounded-full blur-3xl"></div>
        <div className="absolute max-md:top-120 lg:top-120 lg:left-25/48 w-62 h-52 bg-white/30 rounded-full blur-3xl"></div>
      <p
        className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        If its your first day at Fight Club, you have to fight.
      </p>
      {items.map((item,id) => (
        <DraggableCardBody key={id} className={item.className}>
          <Image
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover" />
          <h3
            className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
