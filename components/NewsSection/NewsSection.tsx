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
  },
  {
    image: "/1.jpeg",
    title: "Noteworthy technology acquisitions 2021",
    body: "Here are the biggest enterprise technology acquisitions of 2021 so far in reverse chronological order.",
  },
  {
    image: "/1.jpeg",
    title: "Noteworthy technology acquisitions 2021",
    body: "Here are the biggest enterprise technology acquisitions of 2021 so far in reverse chronological order.",
  },
  {
    image: "/1.jpeg",
    title: "Noteworthy technology acquisitions 2021",
    body: "Here are the biggest enterprise technology acquisitions of 2021 so far in reverse chronological order.",
  },
];

const NewsSection = () => {
  return (
    <section className='bg-white'>
      <div className=' container mx-auto max-sm:max-w-[400px] max-[390px]:max-w-[360px] max-lg:max-w-[980px] max-lg:px-2 py-10'>
        <div className='mx-auto max-w-screen-sm lg:mb-8 text-center'>
          <h2 className='titleFont text-center font-bold tracking-tight text-gray-900 dark:text-white'>
            Our Articles
          </h2>
          <p className='font-light text-gray-500 sm:text-xl dark:text-gray-400'>
            Words that Sparkle, Ideas that Shine: Each article is a gem,
            meticulously crafted to illuminate, educate, and inspire the world
            of jewelry.
          </p>
        </div>
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-6 py-16 justify-center'>
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
                <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  {item.title}
                </h5>
                <p className='font-normal text-gray-700 dark:text-gray-400'>
                  {item.body}
                </p>
                <Button className='text-primary-danger self-end'>
                  Read more
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
