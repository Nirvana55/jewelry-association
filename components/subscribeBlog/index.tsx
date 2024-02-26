import { Button, TextInput } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { HiMail } from "react-icons/hi";

const SubscribeBlog = () => {
  return (
    <div className='flex flex-col md:flex-row items-center md:items-start justify-between py-8 md:py-14 lg:py-16'>
      <div className='max-w-2xl mb-4'>
        <h2 className='text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
          Stay informed, Subscribe
        </h2>
        <p>Receive the latest news and updates</p>
      </div>
      <div>
        <form className='flex flex-col sm:flex-row items-center w-full max-w-lg gap-4 mb-4'>
          <div className='relative w-full'>
            <TextInput
              id='email'
              type='email'
              icon={HiMail}
              placeholder='Enter your email'
              required
            />
          </div>
          <Button
            type='submit'
            className='max-sm:w-full border-2 border-gray-300 rounded-md text-white bg-primary-danger'
          >
            Join
          </Button>
        </form>
        <div className='text-sm text-gray-500 dark:text-gray-300'>
          By subscribing, you agree to our
          <Link
            href='#'
            className='font-medium text-primary-600 dark:text-primary-500 hover:underline'
          >
            Privacy Policy
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default SubscribeBlog;
