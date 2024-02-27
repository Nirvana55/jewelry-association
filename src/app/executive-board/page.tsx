import React from "react";
import NoData from "../../../components/ui/no-data/NoData";
import Image from "next/image";
import { Label, Select } from "flowbite-react";

const data = [
  {
    name: "Tim Cook",
    positions: "CEO",
    imageUrl: "/sad.jpg",
  },
  {
    name: "Katherine Adams",
    positions: "Senior Vice President and General Counsel",
    imageUrl: "/sad2.jpeg",
  },
  {
    name: "Eddy Cue",
    positions: "Senior Vice President Services",
    imageUrl: "/sad2.jpeg",
  },
  {
    name: "Craig Federighi",
    positions: "Senior Vice President Software Engineering",
    imageUrl: "/sad2.jpeg",
  },
];

const ExecutiveBoard = () => {
  return (
    <div className=' container mx-auto max-sm:max-w-[400px] max-[390px]:max-w-[360px] max-lg:max-w-[980px] max-lg:px-2 py-10 cursor'>
      <div className='flex flex-col lg:flex-row lg:justify-between'>
        <div className='max-w-screen-sm'>
          <h2 className='text-[42px] md:text-[56px] font-bold tracking-tight text-gray-900 dark:text-white'>
            Our Board Members
          </h2>
          <p className='font-light text-gray-500 sm:text-xl dark:text-gray-400'>
            Words that Sparkle, Ideas that Shine: Each article is a gem,
            meticulously crafted to illuminate, educate, and inspire the world
            of jewelry.
          </p>
        </div>
        <div className='max-w-lg sm:max-w-xs flex-1 max-lg:mt-8 lg:self-end'>
          {/* <div className='mb-2 block'>
            <Label htmlFor='countries' value='Select your country' />
          </div> */}
          <Select id='dates' required>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
          </Select>
        </div>
      </div>
      {data.length > 0 ? (
        <>
          <div className='grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-10 pt-[80px]'>
            {data.map((item) => (
              <div key={item.name}>
                <div className='relative max-w-full h-[300px] md:h-[250px] shadow border shrink md:shrink-0 my-4 md:my-0'>
                  <Image
                    fill
                    src={item.imageUrl}
                    className='rounded-lg'
                    alt={item.imageUrl}
                  />
                </div>
                <h2 className='mt-4 font-semibold text-xl text-black'>
                  {item.name}
                </h2>
                <p className='text-gray-600'>{item.positions}</p>
              </div>
            ))}
          </div>
          <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-800' />
          <div className='grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-10'>
            {data.map((item) => (
              <div key={item.name}>
                <div className='relative max-w-full h-[300px] md:h-[250px] shadow border shrink md:shrink-0 my-4 md:my-0'>
                  <Image
                    fill
                    src={item.imageUrl}
                    className='rounded-lg'
                    alt={item.imageUrl}
                  />
                </div>
                <h2 className='mt-4 font-semibold text-xl text-black'>
                  {item.name}
                </h2>
                <p className='text-gray-600'>Past President</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default ExecutiveBoard;
