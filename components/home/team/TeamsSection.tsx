"use client";

import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import CustomResponsiveContainer from "../../Container";

const teamData = [
  {
    image: "/president.jpg",
    name: "Bonnie Green",
    role: "President",
    facebookLink: "#",
    instagramLink: "#",
    youtubeLink: "#",
  },
  {
    image: "/president.jpg",
    name: "Bonnie Green",
    role: "Past President",
    facebookLink: "#",
    instagramLink: "#",
    youtubeLink: "#",
  },
  {
    image: "/president.jpg",
    name: "Bonnie Green",
    role: "CEO/Co-founder",
    facebookLink: "#",
    instagramLink: "#",
    youtubeLink: "#",
  },
  {
    image: "/president.jpg",
    name: "Bonnie Green",
    role: "CEO/Co-founder",
    facebookLink: "#",
    instagramLink: "#",
    youtubeLink: "#",
  },
];

const TeamsSection = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className=' bg-white dark:bg-gray-900'>
      <CustomResponsiveContainer
        className={`max-lg:px-2 py-[64px] md:py-[112px]`}
      >
        <div className='max-w-screen-sm'>
          <h2 className='text-4xl md:text-5xl font-bold tracking-tight md:tracking-normal text-gray-900 dark:text-white'>
            Our Team
          </h2>
          <p className='font-light text-gray-500 sm:text-xl dark:text-gray-400 text-[16px] md:text-lg py-[12px] md:py-[24px]'>
            Harmony in Craft, Strength in Unity: Our team, a mosaic of talents,
            dedicated to crafting brilliance in every facet of the jewelry
            industry.
          </p>
        </div>
        <div className='grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-[42px] md:pt-[80px]'>
          {teamData.map((item, index) => (
            <div
              key={index}
              className='text-center text-gray-500 dark:text-gray-400'
            >
              <div className='relative mx-auto mb-4 w-36 h-36 '>
                <Image
                  className='rounded-full object-cover cursor-pointer hover:scale-110 duration-300'
                  fill
                  src={item.image}
                  alt='Bonnie Avatar'
                />
              </div>

              <h3 className='text-base md:text-lg font-bold tracking-tight text-gray-900 dark:text-white'>
                <Link href='#'>{item.name}</Link>
              </h3>
              <p className='text-caption font-semibold'>{item.role}</p>
              <ul className='flex justify-center mt-4'>
                <li className='px-2'>
                  <Link
                    href={item.facebookLink}
                    className='text-test hover:scale-110 hover:text-[#39569c] dark:hover:text-white'
                  >
                    <FaFacebook className='hover:scale-110 duration-300' />
                  </Link>
                </li>
                <li className='px-2'>
                  <Link
                    href={item.instagramLink}
                    className='text-pink hover:scale-110 hover:text-[#d62976] dark:hover:text-white'
                  >
                    <FaInstagram className='hover:scale-110 duration-300' />
                  </Link>
                </li>
                <li className='px-2'>
                  <Link
                    href={item.youtubeLink}
                    className='text-primary-danger  hover:text-[#FF0000] ` dark:hover:text-white dark:text-gray-300'
                  >
                    <FaYoutube className='hover:scale-110 duration-300' />
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </CustomResponsiveContainer>
    </section>
  );
};

export default TeamsSection;
