"use client";

import React from "react";
import CustomButton from "../../ui/button/CustomButton";
import { useRouter } from "next/navigation";

const JoinAssociation = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col md:flex-row items-center md:items-start justify-between py-8 md:py-14 lg:py-16'>
      <div className='max-w-2xl mb-8 md:mb-0'>
        <h2 className='text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white'>
          Join our Association Today!
        </h2>
      </div>
      <div className='max-w-lg'>
        <p className='text-base md:text-lg font-medium text-gray-700 tracking-normal dark:text-white mb-4'>
          Become a member of our association and gain access to exclusive
          benefits and information about gold and silver.
        </p>
        <CustomButton
          handleClick={() => router.push(`/contact`)}
          buttonText='Join Now'
          classStyle='max-sm:w-full'
        />
      </div>
    </div>
  );
};

export default JoinAssociation;
