"use client";

import { Button } from "flowbite-react";
import Image from "next/image";
import "./styles.css";

const TopicsBar = () => {
  return (
    <div className='container my-10 mx-auto max-[390px]:max-w-[360px] max-sm:max-w-[400px] max-lg:max-w-[980px] mx-h-[600px] h-auto max-lg:px-2'>
      <h5 className='titleFont text-center font-semibold tracking-tight text-gray-900 dark:text-white'>
        Message From President
      </h5>
      <div className='grid xs:grid-cols-1 lg:grid-cols-2 md:text-center lg:text-left gap-10 py-16 items-center content-center'>
        <div className='md:justify-self-center relative md:w-[500px] lg:w-[450px] xl:w-[600px] h-[300px]'>
          <Image fill src='/1.jpeg' alt={`images`} />
        </div>
        <div className='lg:self-start lg:w-[90%] xl:w-[80%]'>
          <p className='sub-titleFont font-semibold'>
            Namaste All Respected Viewers, <br /> <br />
          </p>
          <p className='flow-root font-normal text-gray-700  dark:text-gray-400'>
            I feel much honored to welcome you in this website as the president
            of Nepal Gem and Jewellery Association. I believe this website can
            provide various information about our association including gem and
            jewellery products of Nepal.
          </p>
          <Button className='max-lg:hidden bg-primary-danger mt-5'>
            Read more
            <svg
              className='-mr-1 ml-2 h-4 w-4'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopicsBar;
