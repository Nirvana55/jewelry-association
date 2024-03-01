import React from "react";
import ContactForm from "./ContactForm";

const Gallery = () => {
  return (
    <div className=' container mx-auto max-sm:max-w-[400px] max-[390px]:max-w-[360px] max-lg:max-w-[980px] max-lg:px-2 py-10 cursor animate-fade-right animate-ease-in'>
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
    </div>
  );
};

export default Gallery;
