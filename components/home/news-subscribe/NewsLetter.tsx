"use client";

import { TextInput } from "flowbite-react";
import Link from "next/link";
import React, { useRef } from "react";
import { HiMail } from "react-icons/hi";
import CustomButton from "../../ui/button/CustomButton";

const NewsLetter = () => {
  const ref = useRef(null);

  return (
    <section ref={ref} className=' bg-white dark:bg-gray-900'>
      <div
        className={`container mx-auto max-[390px]:max-w-[360px] max-sm:max-w-[400px] max-lg:max-w-[980px] mx-h-[600px] h-auto max-lg:px-2 py-[64px] md:py-[112px]`}
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
            <div className='items-center mx-auto mb-3 space-y-4 max-w-screen-sm flex sm:space-y-0 '>
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
                <CustomButton
                  buttonText='Subscribe'
                  classStyle='w-full text-sm rounded-none rounded-r-xl'
                  type='submit'
                />
              </div>
            </div>
            <div className='sm:hidden md:self-start my-2'>
              <CustomButton
                buttonText='Subscribe'
                classStyle='w-full text-sm'
                type='submit'
              />
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
