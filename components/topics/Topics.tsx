"use client";

import { Button, Card } from "flowbite-react";

const TopicsBar = () => {
  return (
    <Card className='max-w-sm' imgSrc='/2.jpeg' horizontal>
      <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        Message From President
      </h5>
      <p className='font-normal text-gray-700 dark:text-gray-400'>
        Namaste All Respected Viewers, <br /> <br /> I feel much honored to
        welcome you in this website as the president of Nepal Gem and Jewellery
        Association. I believe this website can provide various information
        about our association including gem and jewellery products of Nepal.
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
  );
};

export default TopicsBar;
