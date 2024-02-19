import React from "react";
import { sanityClient } from "../../../utils/sanity/client";
import { Card } from "flowbite-react";
import Image from "next/image";
import { Events } from "../../../types/events";
import imageUrlBuilder from "@sanity/image-url";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import NoData from "../../../components/NoData/NoData";

const Event = async () => {
  const blogCardListData = await sanityClient.fetch<Events[]>(
    `*[_type=="blog"]{title,cardInfoText,readTime,author,_id,mainImage,author,slug}`
  );
  const builder = imageUrlBuilder(sanityClient);

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
    <div className=' container mx-auto max-sm:max-w-[400px] max-[390px]:max-w-[360px] max-lg:max-w-[980px] max-lg:px-2 py-10 cursor'>
      <div className='max-w-screen-md'>
        <h2 className='text-[42px] md:text-[52px] font-extrabold tracking-tight text-gray-900 dark:text-white'>
          Stay updated with insights
        </h2>
        <p className='font-light text-gray-500 sm:text-xl dark:text-gray-400 text-[16px] pt-[20px] md:text-[18px] md:pt-[24px]'>
          Words that Sparkle, Ideas that Shine: Each article is a gem.
        </p>
      </div>
      <div className='flex flex-wrap justify-start items-center w-full py-[48px] md:py-[80px] lg:w-[1450px] '>
        <div className='relative w-full h-[221px] md:w-[656px] md:h-[500px] shadow border shrink md:shrink-0 my-4 md:my-0'>
          <Image fill src='/1.jpeg' alt={`images`} />
        </div>
        <div className='grow shrink basis-0 md:pl-12 flex-col justify-start items-start inline-flex'>
          <div className='self-stretch h-[161px] flex-col justify-start items-start flex'>
            <div className='justify-start items-center gap-4 inline-flex'>
              <div className='py-1 bg-zinc-100 justify-start items-start flex'>
                <div className='text-primary-danger bg-blue-200 text-[14px] p-2 rounded font-semibold leading-[21px]'>
                  Category
                </div>
              </div>
              <div className='text-black text-[14px] text-sm font-semibold leading-[21px]'>
                5 min read
              </div>
            </div>
            <div className='self-stretch h-[116px] flex-col justify-start items-start pt-[16px] flex'>
              <div className='self-stretch text-black text-[24px] md:text-[32px] font-bold'>
                The Importance of Gold and Silver Investments
              </div>
              <div className='self-stretch text-black text-base md:text-[16px] pt-[8px] leading-normal'>
                Discover why investing in gold and silver is a smart choice.
              </div>
            </div>
          </div>
          <div className='w-[109px] justify-center items-center gap-2 inline-flex mt-[20px] text-[16px] text-primary-danger cursor-pointer'>
            Read more <MdKeyboardArrowRight />
          </div>
        </div>
      </div>
      <div>
        <div className='max-w-screen-sm'>
          <h2 className='text-[42px] font-bold tracking-tight md:tracking-normal text-gray-900 dark:text-white'>
            Our Latest
          </h2>
          <p className='font-light text-gray-500 sm:text-xl text-[16px] pt-[24px] dark:text-gray-400'>
            Stay informed with our latest articles.
          </p>
        </div>
        <div className='py-[64px]'>
          {blogCardListData.length > 0 ? (
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-[42px] justify-center cursor-pointer'>
              {blogCardListData.map((item) => (
                <Link
                  href={`/event/${item.slug.current}`}
                  key={item._id}
                  className='grid gap-2'
                >
                  <div>
                    <Card
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
                        />
                      )}
                    >
                      <div className='flex flex-col gap-2'>
                        <div className='justify-start items-center gap-4 inline-flex'>
                          <div className='py-1 bg-zinc-100 justify-start items-start flex'>
                            <div className='text-primary-danger bg-blue-100 p-2 rounded text-[14px] font-semibold leading-[21px]'>
                              Category
                            </div>
                          </div>
                          <div className='text-black text-[14px] font-semibold leading-[21px]'>
                            {item.readTime}
                          </div>
                        </div>
                        <div className='pt-[16px]'>
                          <h5 className='text-[20px] font-bold tracking-tight text-gray-900 capitalize dark:text-white'>
                            {item.title}
                          </h5>
                          <p className='font-normal pt-[8px] text-gray-700 dark:text-gray-400 '>
                            {item.cardInfoText}
                            asdas
                          </p>
                        </div>

                        <div className='flex'>
                          {/* <div className='inline-flex items-center'>
                            <Avatar
                              img='/1.jpeg'
                              alt='avatar of Jese'
                              rounded
                            />
                            <p className='font-semibold text-gray-700 px-2 self-start dark:text-gray-400'>
                              {item.author}
                            </p>
                          </div> */}
                          <div className='w-[109px] justify-center items-center gap-2 inline-flex pt-[24px] text-primary-danger cursor-pointer'>
                            Read more <MdKeyboardArrowRight />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <NoData />
          )}
        </div>
      </div>
    </div>
  );
};

export default Event;
