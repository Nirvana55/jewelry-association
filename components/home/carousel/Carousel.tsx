"use client";

import Image from "next/image";
import "./styles.css";
import { useEffect, useRef, useState } from "react";
import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowBack,
} from "react-icons/io";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ImageHighlight } from "../../../types/carousel";
import { builder } from "../../../utils/sanity/client";
import CustomButton from "../../ui/button/CustomButton";

type CarouselProps = {
  data: ImageHighlight[];
};

const CarouselBar = (props: CarouselProps) => {
  const { data } = props;
  const ref = useRef(null);

  const imageSlides = data.map((item) => {
    const imagePath = builder.image(item.imageRef).url();
    return imagePath;
  });

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [direction, setDirection] = useState("left");

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((current) => (current + 1) % imageSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    hiddenRight: {
      y: "10",
      opacity: 0,
    },
    hiddenLeft: {
      y: "-10",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 4,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 4,
      },
    },
  };
  const handleNext = () => {
    setDirection("right");
    setCarouselIndex((prev) => (prev + 1) % imageSlides.length);
  };

  const handlePrevious = () => {
    setDirection("left");
    setCarouselIndex((prev) =>
      prev === 0 ? imageSlides.length - 1 : prev - 1
    );
  };

  const handleSlideChange = (newSlide: number) => {
    setDirection(newSlide > carouselIndex ? "down" : "up");
    setCarouselIndex(newSlide);
  };

  // const handleAnimationComplete = () => {
  //   setDirection("down");
  //   setCarouselIndex((current) => (current + 1) % imageSlides.length);
  // };

  const renderIndicators = () => {
    return data.map((item, index) => (
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
    <div
      ref={ref}
      className='relative h-[780px] md:h-[820px] animate-fade-right animate-ease-in'
    >
      <AnimatePresence>
        <motion.div
          initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
          animate='visible'
          exit='exit'
          className='relative h-full'
          variants={slideVariants}
        >
          <Image
            src={imageSlides[carouselIndex]}
            loading='lazy'
            alt='carouselImages'
            fill
            quality={100}
            sizes='100vw'
          />
        </motion.div>
      </AnimatePresence>

      <div className='bg-test bg-opacity-70 w-full h-[780px] md:h-[820px] top-0 bottom-0 left-0 right-0 absolute z-10'></div>

      <div
        onClick={handlePrevious}
        className='z-10 absolute left-[20%] right-[50%] w-0 bottom-10 w- lg:left-7 lg:top-[35%] cursor-pointer'
      >
        <IoIosArrowUp className='hidden lg:block text-white arrowFontSize border-spacing-2' />
        <IoIosArrowBack className='block lg:hidden text-white arrowFontSize border-spacing-2' />
      </div>

      <div
        onClick={handleNext}
        className='z-10 absolute right-[20%] w-0  bottom-10 border-solid lg:left-7 lg:top-[70%] cursor-pointer'
      >
        <IoIosArrowDown className='hidden lg:block text-white arrowFontSize' />
        <IoIosArrowForward className='block lg:hidden text-white arrowFontSize border-spacing-2' />
      </div>

      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 lg:h-0 lg:top-[40%] lg:left-10 text-center z-20 flex flex-row lg:flex-col'>
        {renderIndicators()}
      </div>

      <div className='z-20 mx-auto'>
        <div className='absolute top-[50%] max-[412px]:left-2 max-lg:left-16 max-xl:left-16 left-40 z-20 rounded'>
          <p className='text-white font-bold text-5xl uppercase md:text-6xl'>
            Welcome To Negja
          </p>
          <p className='text-white w-full sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] sm:text-xl text-base md:text-lg'>
            Track the latest gold and silver rates with our dynamic graphs and
            make informed decisions.
          </p>
          <CustomButton buttonText='Explore Now' classStyle='mt-5' />
        </div>
      </div>
    </div>
  );
};

export default CarouselBar;
