import { Button, TextInput } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { HiMail } from "react-icons/hi";

const NewsLetter = () => {
  return (
    <section className=' bg-white dark:bg-gray-900'>
      <div className='container mx-auto max-[390px]:max-w-[360px] max-sm:max-w-[400px] max-lg:max-w-[980px] mx-h-[600px] h-auto max-lg:px-2 py-14'>
        <div className='mx-auto max-w-screen-md sm:text-center'>
          <h2 className='titleFont text-center font-bold tracking-tight text-gray-900 dark:text-white'>
            Sign up for our newsletter
          </h2>
          <p className='mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400'>
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </p>
          <form action='#'>
            <div className='items-center mx-auto mb-3 space-y-4 max-w-screen-sm flex sm:space-y-0'>
              <div className='relative w-full'>
                <TextInput
                  id='email'
                  type='email'
                  icon={HiMail}
                  placeholder='Enter your email'
                  required
                />
              </div>
              <div className='max-sm:hidden md:self-start'>
                <Button
                  type='submit'
                  className='w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-blue-800 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                >
                  Subscribe
                </Button>
              </div>
            </div>
            <div className='sm:hidden md:self-start my-2'>
              <Button
                type='submit'
                className='w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-blue-800 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                Subscribe
              </Button>
            </div>
            <div className='mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300'>
              We care about the protection of your data.{" "}
              <Link
                href='#'
                className='font-medium text-primary-600 dark:text-primary-500 hover:underline'
              >
                Read our Privacy Policy
              </Link>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
