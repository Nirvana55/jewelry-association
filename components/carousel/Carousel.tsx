"use client";

import Image from "next/image";
import { Button, Carousel } from "flowbite-react";
import { useTransition, animated } from "@react-spring/web";
import "./styles.css";
import { useState } from "react";
import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";

const imageSlides = ["/1.jpeg", "/2.jpeg", "/3.jpeg"];

const CarouselBar = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselTransitions = useTransition(carouselIndex, {
    keys: carouselIndex,
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
    config: { duration: 3000 },
    onRest: (_a, _b, index) => {
      if (carouselIndex === index) {
        setCarouselIndex((prev) => (prev + 1) % imageSlides.length);
      }
      setIsAnimating(false);
    },
    exitBeforeEnter: true,
  });

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCarouselIndex((prev) => (prev + 1) % imageSlides.length);
    }
  };

  const handlePrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCarouselIndex((prev) =>
        prev === 0 ? imageSlides.length - 1 : prev - 1
      );
    }
  };

  const handleSlideChange = (newSlide: number) => {
    setCarouselIndex(newSlide);
  };

  const renderIndicators = () => {
    return imageSlides.map((item, index) => (
      <div
        key={index}
        className={`indicator ${
          index === carouselIndex ? "borderBottomIndicatorActive" : ""
        } text-white lg:py-5 cursor-pointer borderBottomIndicator mx-5 py-1`}
        onClick={() => handleSlideChange(index)}
      >
        0{index + 1}
      </div>
    ));
  };

  return (
    <div className='relative h-[800px]'>
      <div className='relative w-full h-full'>
        {carouselTransitions((style, index) => (
          <animated.img
            className='h-full'
            style={{
              ...style,
              width: "100%",
              overflow: "hidden",
            }}
            src={imageSlides[index]}
            alt='photos-football'
          />
        ))}
      </div>
      <div className='bg-test bg-opacity-60 w-100% h-[800px] top-0 bottom-0 left-0 right-0 absolute z-10'></div>
      <div
        onClick={handlePrevious}
        className='z-20 absolute left-[20%] right-[50%] bottom-10 lg:left-7 lg:top-[35%] cursor-pointer'
      >
        <IoIosArrowUp className='hidden lg:block text-white arrowFontSize border-spacing-2' />
        <IoIosArrowBack className='block lg:hidden text-white arrowFontSize border-spacing-2' />
      </div>
      <div
        onClick={handleNext}
        className='z-20 absolute right-[20%] bottom-10 border-solid lg:left-7 lg:top-[70%] cursor-pointer'
      >
        <IoIosArrowDown className='hidden lg:block text-white arrowFontSize' />
        <IoIosArrowForward className='block lg:hidden text-white arrowFontSize border-spacing-2' />
      </div>
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 lg:top-[40%] lg:left-10 text-center z-20 flex flex-row lg:flex-col'>
        {renderIndicators()}
      </div>
      <div className='container z-20 mx-auto'>
        <div className='absolute top-[50%] max-[412px]:left-2 max-lg:left-16 max-xl:left-16 z-20 rounded'>
          <p className='text-white font-bold text-[40px] md:text-[50px]'>
            Welcome To Negja
          </p>
          <p className='text-white w-full sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] text-lg sm:text-xl md:text-2xl'>
            Track the latest gold and silver rates with our dynamic graphs and
            make informed decisions.
          </p>
          <Button className='bg-primary-danger mt-5 text-white font-medium py-2 px-4 rounded hover:bg-primary-dark transition duration-300'>
            Explore Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarouselBar;
