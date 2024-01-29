"use client";

import { Button, Card } from "flowbite-react";
import Image from "next/image";

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
  {
    image: "/1.jpeg",
    title: "Noteworthy technology acquisitions 2021",
    body: "Here are the biggest enterprise technology acquisitions of 2021 so far in reverse chronological order.",
  },
];

const NetworkSection = () => {
  return (
    <div className='container mx-auto max-sm:max-w-[400px] max-[390px]:max-w-[360px] max-lg:max-w-[980px] max-lg:px-2'>
      <h5 className='titleFont text-center font-semibold tracking-tight text-gray-900 dark:text-white'>
        News
      </h5>
      <div className='grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-6 py-16 justify-center'>
        {newsData.map((item, index) => (
          <div key={index} className='grid gap-2'>
            <Card
              renderImage={() => (
                <Image width={500} height={500} src={item.image} alt='images' />
              )}
            >
              <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                {item.title}
              </h5>
              <p className='font-normal text-gray-700 dark:text-gray-400'>
                {item.body}
              </p>
              <Button>
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
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetworkSection;
