"use client";

import Image from "next/image";
import { Carousel } from "flowbite-react";

const images = ["/1.jpeg", "/2.jpeg", "/3.jpeg"];

const CarouselBar = () => {
  return (
    <>
      <Carousel>
        {images.map((item, index) => (
          <div key={index} className='relative w-full h-[800px]'>
            <Image
              className='w-[100%]'
              objectFit='cover'
              quality={100}
              unoptimized
              layout='fill'
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
