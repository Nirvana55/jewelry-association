"use client";

import { Blockquote, Button } from "flowbite-react";
import Image from "next/image";
import "./styles.css";
import { useRef } from "react";
import { useInView } from "framer-motion";

const MessageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className='bg-white animate-fade-left animate-ease-in'>
      <div
        id='sad'
        className={`container mx-auto max-sm:max-w-[400px] max-[390px]:max-w-[360px] max-lg:max-w-[980px] max-lg:px-2 py-[64px] md:py-[112px] sad ${
          isInView ? "animate-fade-right animate-ease-in" : ""
        }`}
      >
        {" "}
        <div className='grid xs:grid-cols-1 lg:grid-cols-2 md:text-center lg:text-left gap-10 items-center'>
          <div className='lg:self-center lg:w-[90%] xl:w-[80%]'>
            <h2 className='text-[36px] md:text-[42px] font-bold tracking-normal text-gray-900 dark:text-white'>
              Message From President
            </h2>
            <div className='py-[24px]'>
              <Blockquote className='sm:text-lg md:text-[20px] dark:text-gray-400'>
                &quot; Namaste All Respected Viewers &quot; <br />
              </Blockquote>
              <p className='mt-6 flow-root text-[16px] md:text-[18px] font-normal text-gray-700  dark:text-gray-400'>
                I feel much honored to welcome you in this website as the
                president of Nepal Gem and Jewellery Association. I believe this
                website can provide various information about our association
                including gem and jewellery products of Nepal.
              </p>
            </div>

            <Button className='max-lg:hidden bg-primary-btn-color mt-5'>
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
          <div className='relative w-full h-[348px]  md:w-[500px] lg:w-[450px] xl:w-[550px] md:h-[640px]'>
            <Image fill src='/person.jpeg' alt={`images`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
