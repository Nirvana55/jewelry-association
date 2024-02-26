import { Button } from "flowbite-react";
import React from "react";

const JoinAssociation = () => {
  return (
    <div className='flex flex-col md:flex-row items-center md:items-start justify-between py-8 md:py-14 lg:py-16'>
      <div className='max-w-2xl mb-8 md:mb-0'>
        <h2 className='text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white'>
          Join our Association Today!
        </h2>
      </div>
      <div className='max-w-lg'>
        <p className='text-base md:text-lg tracking-tight text-gray-900 dark:text-white mb-4'>
          Become a member of our association and gain access to exclusive
          benefits and information about gold and silver.
        </p>
        <Button className='max-sm:w-full bg-primary-danger hover:bg-blue-700 text-white font-bold px-4 rounded'>
          Join
        </Button>
      </div>
    </div>
  );
};

export default JoinAssociation;
