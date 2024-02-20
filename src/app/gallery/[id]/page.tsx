import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import NoData from "../../../../components/NoData/NoData";

const imageSlides = [
  { id: 1, name: "/sad3.jpeg" },
  { id: 2, name: "/sad.jpg" },
  { id: 3, name: "/sad2.jpeg" },
];

const Photos = () => {
  return (
    <div className=' container mx-auto max-sm:max-w-[400px] max-[390px]:max-w-[360px] max-lg:max-w-[980px] max-lg:px-2 py-10 cursor'>
      <div className='max-w-screen-sm'>
        <h2 className='text-[42px] md:text-[56px] font-bold tracking-tight text-gray-900 dark:text-white'>
          This is all about test
        </h2>
        <p className='font-light text-gray-500 sm:text-xl dark:text-gray-400'>
          Words that Sparkle, Ideas that Shine: Each article is a gem,
          meticulously crafted to illuminate, educate, and inspire the world of
          jewelry.
        </p>
      </div>
      <div className='pt-[42px] md:pt-[80px]'>
        {imageSlides.length > 0 ? (
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {imageSlides.map((item) => (
              <div
                className='relative h-80 max-w-full cursor-pointer'
                key={item.id}
              >
                <Image
                  fill
                  src={item.name}
                  alt='All test'
                  className='object-cover rounded-lg'
                />
              </div>
            ))}
          </div>
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default Photos;
