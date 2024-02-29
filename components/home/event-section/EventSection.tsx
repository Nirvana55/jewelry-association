"use client";

import { Button, Card } from "flowbite-react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import imageUrlBuilder from "@sanity/image-url";

import "./styles.css";
import { useRouter } from "next/navigation";
import { sanityClient } from "../../../utils/sanity/client";
import { NewsData } from "../../../types/events";
import { useRef } from "react";
import { useInView } from "framer-motion";

type NewsSectionProps = {
  newsData: NewsData[];
};

const EventSection = ({ newsData }: NewsSectionProps) => {
  const router = useRouter();
  const builder = imageUrlBuilder(sanityClient);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className='bg-primary-background'>
      <div
        className={`container mx-auto max-sm:max-w-[400px] max-[390px]:max-w-[360px] max-lg:max-w-[980px] max-lg:px-2 py-[64px] md:py-[112px]  ${
          isInView ? "animate-fade-right animate-ease-in" : ""
        }`}
      >
        <div className='max-w-screen-sm'>
          <h2 className='text-[36px] md:text-[42px] font-bold tracking-tight md:tracking-normal text-gray-900 dark:text-white'>
            Our Articles
          </h2>
          <p className='font-light text-gray-500 sm:text-xl dark:text-gray-400 text-[16px] md:text-[18px] py-[12px] md:py-[24px]'>
            Words that Sparkle, Ideas that Shine: Each article is a gem,
            meticulously crafted to illuminate, educate, and inspire the world
            of jewelry.
          </p>
        </div>
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-6 py-[60px] lg:py-[80px] justify-center'>
          {newsData?.map((item: NewsData) => (
            <div
              onClick={() => router.push(`event/${item.slug.current}`)}
              key={item._id}
              className='grid gap-2 cursor-pointer'
            >
              <Card
                className='rounded-t-lg'
                renderImage={() => (
                  <Image
                    width={500}
                    height={500}
                    className='rounded-t-lg'
                    src={builder
                      .image(item.mainImage.asset._ref)
                      .width(420)
                      .height(400)
                      .url()}
                    alt='images'
                  />
                )}
              >
                <h5 className='text-[24px] font-bold tracking-tight md:tracking-normal text-gray-900 dark:text-white'>
                  {item?.title}
                </h5>
                <p className='font-[16px] text-gray-700 dark:text-gray-400 line-clamp-3'>
                  {item?.cardInfoText}
                </p>
                <div className='text-primary-btn-color font-semi-bold self-start flex text-md items-center pt-[24px]'>
                  <p>Read {item?.readTime}</p>
                  <FaArrowRightLong className='ml-2' />
                </div>
              </Card>
            </div>
          ))}
        </div>
        <div className='sm:float-right'>
          <Button
            onClick={() => router.push(`/event`)}
            className='bg-primary-btn-color px-5 py-1 max-sm:w-full'
          >
            Show All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
