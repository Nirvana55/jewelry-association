import React from "react";
import ContactForm from "./ContactForm";
import CustomResponsiveContainer from "../../../components/Container";

const Gallery = () => {
  return (
    <CustomResponsiveContainer className='max-lg:px-2 py-10 cursor animate-fade-right animate-ease-in'>
      <div className='max-w-screen-sm'>
        <h2 className='text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white'>
          Contact Page
        </h2>
        <p className='font-light text-gray-500 sm:text-xl dark:text-gray-400'>
          Words that Sparkle, Ideas that Shine: Each article is a gem,
          meticulously crafted to illuminate, educate, and inspire the world of
          jewelry.
        </p>
      </div>
      <div className='pt-[42px] md:pt-[80px]'>
        <ContactForm />
      </div>
    </CustomResponsiveContainer>
  );
};

export default Gallery;
