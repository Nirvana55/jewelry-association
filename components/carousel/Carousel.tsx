"use client";

import Image from "next/image";
import { Button, Carousel } from "flowbite-react";
import { useTransition, animated } from "@react-spring/web";
import "./styles.css";
import { useState } from "react";
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

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
        } text-white py-5 cursor-pointer borderBottomIndicator`}
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
      <div className='bg-test bg-opacity-45 w-100% h-[800px] top-0 bottom-0 left-0 right-0 absolute z-10'></div>
      <div
        onClick={handlePrevious}
        className='z-20 absolute left-7 top-[35%] cursor-pointer'
      >
        <IoIosArrowUp className='text-white arrowFontSize border-spacing-2' />
      </div>
      <div
        onClick={handleNext}
        className='z-20 absolute border-solid left-7 top-[70%] cursor-pointer'
      >
        <IoIosArrowDown className='text-white arrowFontSize' />
      </div>
      <div className='absolute top-[40%] left-8 text-center z-20 w-[15px]'>
        {renderIndicators()}
      </div>
      <div className='container z-20 mx-auto'>
        <div className='absolute bottom-20 max-lg:left-16 max-xl:left-16  z-20 rounded'>
          <div className=' py-3 px-5 lg:w-[70%] xl:w-[100%]'>
            <p className='text-white font-bold welcomeHeaderText text-xl sm:text-2xl md:text-3xl lg:titleHeader xl:titleHeader'>
              Welcome To Negja
            </p>
            <p className='text-white w-full md:w-[90%] lg:w-[80%] xl:w-[100%]'>
              Nepal&apos;s Jewelry Association
            </p>
            <Button className='bg-primary-danger mt-5'>Explore Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselBar;
