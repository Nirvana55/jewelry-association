import React from "react";
import NoData from "../../../components/ui/no-data/NoData";
import Image from "next/image";
import { builder, sanityClient } from "../../../utils/sanity/client";
import BoardSearch from "./searchOptions";
import { Roles } from "./enum";

async function getExecutiveBoard(query: { date?: string }) {
  const res = await sanityClient.fetch(
    `*[_type=="executiveBoard"  ${
      query.date
        ? '&& boardMemberYears->boardMemberYear =="' + query.date + '"'
        : ""
    }] {boardMembers,boardMemberYears->{
    boardMemberYear
  }}`
  );

  return { data: res };
}

async function getExecutiveBoardDates() {
  const res = await sanityClient.fetch(
    `*[_type=="boardMemberYears"] | order(publishedAt desc) {_id,boardMemberYear} `
  );

  return { data: res };
}

const ExecutiveBoard = async ({
  searchParams,
}: {
  searchParams: {
    selectedDate?: string;
  };
}) => {
  const date = searchParams?.selectedDate || "";

  function findKeysByValue(value: string): string[] {
    const keys = Object.keys(Roles).filter(
      (key) => Roles[key as keyof typeof Roles] === value
    );
    return keys;
  }

  const { data } = await getExecutiveBoard({
    date,
  });

  const { data: boardDates } = await getExecutiveBoardDates();

  return (
    <div className=' container mx-auto max-sm:max-w-[400px] max-[390px]:max-w-[360px] max-lg:max-w-[980px] max-lg:px-2 py-10 cursor animate-fade-right animate-ease-in'>
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
          <BoardSearch data={boardDates} />
        </div>
      </div>
      {data.length > 0 ? (
        <>
          <div className='grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-10 pt-[80px]'>
            {data[0].boardMembers.map((item: any) => (
              <div key={item._key}>
                <div className='relative max-w-full h-[300px] md:h-[250px] my-2 md:my-0'>
                  <Image
                    width={500}
                    height={400}
                    className='rounded-t-lg'
                    loading='lazy'
                    src={builder
                      .image(item.image.asset._ref)
                      .width(500)
                      .height(400)
                      .url()}
                    alt='images'
                  />
                </div>
                <h2 className='font-semibold text-xl text-black capitalize'>
                  {item.executiveMemberName}
                </h2>
                <p className='text-gray-600'>{findKeysByValue(item.role)}</p>
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
