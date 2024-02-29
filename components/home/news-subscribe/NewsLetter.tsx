"use client";

import { Button, TextInput } from "flowbite-react";
import { useInView } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";
import { HiMail } from "react-icons/hi";

const NewsLetter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className=' bg-white dark:bg-gray-900'>
      <div
        className={`container mx-auto max-[390px]:max-w-[360px] max-sm:max-w-[400px] max-lg:max-w-[980px] mx-h-[600px] h-auto max-lg:px-2 py-[64px] md:py-[112px] ${
          isInView ? "animate-fade-right animate-ease-in" : ""
        }`}
      >
        <div className='max-w-screen-sm'>
          <h2 className='text-4xl md:text-5xl font-bold tracking-tight md:tracking-normal text-gray-900 dark:text-white'>
            Sign up for our newsletter
          </h2>
          <p className='font-light text-gray-500 sm:text-xl dark:text-gray-400 text-[16px] md:text-[18px] py-[12px] md:py-[24px]'>
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </p>
        </div>
        <div className='pt-[42px] md:pt-[80px]'>
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
                  className='w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-btn-color border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                >
                  Subscribe
                </Button>
              </div>
            </div>
            <div className='sm:hidden md:self-start my-2'>
              <Button
                type='submit'
                className='w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-btn-color border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                Subscribe
              </Button>
            </div>
            <div className='mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300'>
              We care about the protection of your data.
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
