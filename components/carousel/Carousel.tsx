"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

const images = ["/1.jpeg", "/2.jpeg", "/3.jpeg"];

const Carousel = () => {
  return (
    <>
      <>
        <Swiper
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          allowTouchMove
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='relative h-[800px]'>
                <Image
                  loading='lazy'
                  object-fit='cover'
                  fill
                  src={item}
                  alt={`images-${item}`}
                />
              </div>
            </SwiperSlide>
          ))}
          ...
        </Swiper>
      </>
    </>
  );
};

export default Carousel;
