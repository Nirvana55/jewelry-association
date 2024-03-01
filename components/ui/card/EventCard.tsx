"use client";
import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { builder } from "../../../utils/sanity/client";
import { NewsData } from "../../../types/events";
import { AnimatePresence, motion } from "framer-motion";

type EventCardProps = {
  data: NewsData[];
};

const EventCard = (props: EventCardProps) => {
  const { data } = props;

  return (
    <>
      {data.map((item: any) => (
        <Link
          href={`/event/${item.slug.current}`}
          key={item._id}
          className='grid gap-2 '
        >
          <motion.div
            whileHover={{ y: -30 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <Card
              className='rounded-t-lg'
              renderImage={() => (
                <Image
                  width={416}
                  height={300}
                  src={builder
                    .image(item.mainImage.asset._ref)
                    .width(416)
                    .height(300)
                    .url()}
                  alt='images'
                  className='rounded-t-lg'
                />
              )}
            >
              <div className='flex flex-col gap-2'>
                <div className='justify-start items-center gap-4 inline-flex'>
                  <div className='py-1 bg-zinc-100 justify-start items-start flex'>
                    <div className='text-primary-btn-color bg-blue-100 p-2 rounded text-sm font-semibold leading-[21px]'>
                      Category
                    </div>
                  </div>
                  <div className='text-black text-[14px] font-semibold leading-[21px]'>
                    {item.readTime}
                  </div>
                </div>
                <div className='pt-[16px]'>
                  <h5 className='text-xl md:text-2xl font-bold tracking-tight text-gray-900 capitalize dark:text-white'>
                    {item.title}
                  </h5>
                  <p className='font-normal pt-[8px] text-gray-700 dark:text-gray-400 line-clamp-3'>
                    {item.cardInfoText}
                  </p>
                </div>

                <div className='flex'>
                  <div className='w-[109px] justify-center items-center gap-2 inline-flex pt-[24px] text-primary-btn-color cursor-pointer'>
                    Read more <MdKeyboardArrowRight />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </Link>
      ))}
    </>
  );
};

export default EventCard;
