"use client";

import { Button, Card } from "flowbite-react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

import "./styles.css";

const newsData = [
  {
    image: "/1.jpeg",
    title: "Noteworthy technology acquisitions 2021",
    body: "Here are the biggest enterprise technology acquisitions of 2021 so far in reverse chronological order.",
    buttonText: "Read in 2 minutes",
  },
  {
    image: "/1.jpeg",
    title: "Noteworthy technology acquisitions 2021",
    body: "Here are the biggest enterprise technology acquisitions of 2021 so far in reverse chronological order.",
    buttonText: "Read in 10 minutes",
  },
  {
    image: "/1.jpeg",
    title: "Noteworthy technology acquisitions 2021",
    body: "Here are the biggest enterprise technology acquisitions of 2021 so far in reverse chronological order.",
    buttonText: "Read in 5 minutes",
  },
  {
    image: "/1.jpeg",
    title: "Noteworthy technology acquisitions 2021",
    body: "Here are the biggest enterprise technology acquisitions of 2021 so far in reverse chronological order.",
    buttonText: "Read in 3 minutes",
  },
];

const NewsSection = () => {
  return (
    <section className='bg-primary-background'>
      <div className=' container mx-auto max-sm:max-w-[400px] max-[390px]:max-w-[360px] max-lg:max-w-[980px] max-lg:px-2 py-[64px] md:py-[112px]'>
        <div className='max-w-screen-sm'>
          <h2 className='text-[36px] md:text-[42px] font-bold tracking-tight md:tracking-normal text-gray-900 dark:text-white'>
            Our Articles
          </h2>
          <p className='font-light text-gray-500 sm:text-xl dark:text-gray-400 text-[16px] md:text-[18px] py-[12px] md:py-[24px]'>
            Words that Sparkle, Ideas that Shine: Each article is a gem,
            meticulously crafted to illuminate, educate, and inspire the world
            of jewelry.
          </p>
        </div>
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-6 pt-[80px] justify-center'>
          {newsData.map((item, index) => (
            <div key={index} className='grid gap-2'>
              <Card
                renderImage={() => (
                  <Image
                    width={500}
                    height={500}
                    src={item.image}
                    alt='images'
                  />
                )}
              >
                <h5 className='text-[24px] font-bold tracking-tight md:tracking-normal text-gray-900 dark:text-white'>
                  {item.title}
                </h5>
                <p className='font-[16px] text-gray-700 dark:text-gray-400'>
                  {item.body}
                </p>
                <Button className='text-primary-btn-color self-end'>
                  {item.buttonText}
                  <FaArrowRightLong className='ml-2' />
                </Button>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
