"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import { Box, Button, Typography } from "@mui/material";

const images = ["/1.jpeg", "/2.jpeg", "/3.jpeg"];

const Carousel = () => {
  return (
    <Box>
      <Box>
        <Swiper
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          allowTouchMove
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                loading='lazy'
                height={800}
                width={1000}
                src={item}
                alt={`images-${item}`}
              />
            </SwiperSlide>
          ))}
          ...
        </Swiper>
      </Box>
      <Box>
        <Typography>Participate in the Jewelry Process</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          dolores ex quam eveniet, necessitatibus, dolor totam cum nobis
          reprehenderit deleniti sed odit rerum porro veritatis obcaecati
          laborum illum consectetur eligendi?
        </Typography>
        <Button>Contact the Association</Button>
      </Box>
    </Box>
  );
};

export default Carousel;
