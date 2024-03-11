import React from "react";
import { sanityClient } from "../../../utils/sanity/client";
import Image from "next/image";
import { Events } from "../../../types/events";
import { MdKeyboardArrowRight } from "react-icons/md";
import NoData from "../../../components/ui/no-data/NoData";
import EventCard from "../../../components/ui/card/EventCard";
import CustomResponsiveContainer from "../../../components/Container";

async function getAllPosts() {
  const res = await sanityClient.fetch<Events[]>(
    `*[_type=="blog"]{title,cardInfoText,readTime,author,_id,mainImage,author,slug}`
  );

  return res;
}

const Event = async () => {
  const blogCardListData = await getAllPosts();

  const dateFormat = (date: string) => {
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  };

  return (
    <CustomResponsiveContainer className='py-10 cursor animate-fade-right animate-ease-in'>
      <div className='max-w-screen-md'>
        <h2 className='text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
          Stay updated with insights
        </h2>
        <p className='font-light text-gray-500 sm:text-xl dark:text-gray-400 text-[16px] pt-[20px] md:text-[18px] md:pt-[24px]'>
          Words that Sparkle, Ideas that Shine: Each article is a gem.
        </p>
      </div>
      <div className='flex flex-wrap justify-start items-center w-full py-[48px] lg:py-[80px] lg:w-[1450px] '>
        <div className='relative w-full h-[221px] lg:w-[656px] lg:h-[500px] shadow border shrink lg:shrink-0 my-4 lg:my-0'>
          <Image fill src='/1.jpeg' alt={`images`} />
        </div>
        <div className='grow shrink basis-0 lg:pl-12 flex-col justify-start items-start inline-flex'>
          <div className='self-stretch h-[180px] flex-col justify-start items-start flex'>
            <div className='justify-start items-center gap-4 inline-flex'>
              <div className='py-1 bg-zinc-100 justify-start items-start flex'>
                <div className='text-primary-btn-color bg-blue-200 text-[14px] p-2 rounded font-semibold leading-[21px]'>
                  Category
                </div>
              </div>
              <div className='text-black text-sm font-semibold leading-[21px]'>
                5 min read
              </div>
            </div>
            <div className='self-stretch  max-md:h-[180px] md:h-[161px] flex-col justify-start items-start py-[16px] flex'>
              <div className='self-stretch text-black text-[24px] md:text-[32px] font-bold'>
                The Importance of Gold and Silver Investments
              </div>
              <div className='self-stretch text-black text-base md:text-[16px] pt-[8px] leading-normal'>
                Discover why investing in gold and silver is a smart choice.
              </div>
            </div>
          </div>
          <div className='w-[109px] max-md:mt-[21px] justify-center items-center gap-2 inline-flex text-base text-primary-btn-color cursor-pointer'>
            Read more <MdKeyboardArrowRight />
          </div>
        </div>
      </div>
      <div>
        <div className='max-w-screen-sm'>
          <h2 className='text-5xl font-bold tracking-tight md:tracking-normal text-gray-900 dark:text-white'>
            Our Latest
          </h2>
          <p className='font-light text-gray-500 text-base sm:text-xl  pt-[24px] dark:text-gray-400'>
            Stay informed with our latest articles.
          </p>
        </div>
        <div className='pt-[42px] md:pt-[80px]'>
          {blogCardListData.length > 0 ? (
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-6 justify-center cursor-pointer'>
              <EventCard data={blogCardListData} />
            </div>
          ) : (
            <NoData />
          )}
        </div>
      </div>
    </CustomResponsiveContainer>
  );
};

export default Event;
