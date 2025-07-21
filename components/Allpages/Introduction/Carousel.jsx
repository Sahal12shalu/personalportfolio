"use client";

import { Carousel } from "../../ui/carousel";
import image1 from '../../../public/image/image1.jpg'
import image2 from '../../../public/image/image2.jpg'
import image3 from '../../../public/image/image3.jpg'
import image4 from '../../../public/image/image4.jpg'
export function CarouselDemo() {
  const slideData = [
    {
      title: "Mirror Selfie",
      src: image2,
    },
    {
      title: "Happy face",
      src: image1,
      },
    {
      title: "As Wellness Coach",
      src: image3,
      },
    {
      title: "Eid Dress",
      src: image4,
     },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20 ">
      <Carousel slides={slideData} />
    </div>
  );
}
