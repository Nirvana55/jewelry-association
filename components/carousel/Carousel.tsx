"use client";

import Image from "next/image";
import { Carousel } from "flowbite-react";

const images = ["/1.jpeg", "/2.jpeg", "/3.jpeg"];

const CarouselBar = () => {
  return (
    <>
      <Carousel>
        {images.map((item, index) => (
          <div key={index} className='relative h-[800px]'>
            <Image
              loading='lazy'
              object-fit='cover'
              fill
              src={item}
              alt={`images-${item}`}
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselBar;
