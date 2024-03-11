"use client";

import "./styles.css";
import { useRouter } from "next/navigation";
import { NewsData } from "../../../types/events";
import { useRef } from "react";
import { useInView } from "framer-motion";
import EventCard from "../../ui/card/EventCard";
import CustomButton from "../../ui/button/CustomButton";
import CustomResponsiveContainer from "../../Container";

type NewsSectionProps = {
  newsData: NewsData[];
};

const EventSection = ({ newsData }: NewsSectionProps) => {
  const router = useRouter();
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className='bg-primary-background'>
      <CustomResponsiveContainer className={`py-[64px] md:py-[112px]`}>
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
        <div
          className={`grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-6 py-[60px] lg:py-[80px] justify-center  `}
        >
          <EventCard data={newsData} />
        </div>
        <div className='sm:float-right'>
          <CustomButton
            buttonText='Show All'
            handleClick={() => router.push(`/event`)}
            classStyle='max-sm:w-full'
          />
        </div>
      </CustomResponsiveContainer>
    </section>
  );
};

export default EventSection;
