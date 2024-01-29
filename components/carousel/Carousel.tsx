"use client";

import Image from "next/image";
import { Button, Carousel } from "flowbite-react";
import "./styles.css";

const images = ["/1.jpeg", "/2.jpeg", "/3.jpeg"];

const CarouselBar = () => {
  return (
    <div className='relative'>
      <Carousel className='relative'>
        {images.map((item, index) => (
          <div key={index} className='relative w-full h-[800px]'>
            <Image
              className='w-[100%]'
              fill
              src={item}
              alt={`images-${item}`}
            />
          </div>
        ))}
      </Carousel>
      <div className='bg-test bg-opacity-60 w-100% h-[800px] top-0 bottom-0 left-0 right-0 absolute z-10'></div>
      {/* <div className='absolute left-0 top-[50%] mx-auto carouselTextContainer z-20 rounded'>
        <div className='bg-gray-dark py-3 px-5 lg:w-[70%] xl:w-[60%]'>
          <p className='text-white font-bold welcomeHeaderText text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
            Welcome To Negja
          </p>
          <p className='text-white w-full md:w-[90%] lg:w-[80%] xl:w-[70%]'>
            Nepal&apos;s Jewelry
            Associationasdasdasdasdasdasdasdasdasdasdasdasdasdas
          </p>
          <Button className='bg-primary-danger mt-5'>Explore Now</Button>
        </div>
      </div> */}
    </div>
  );
};

export default CarouselBar;
