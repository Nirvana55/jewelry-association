import React from "react";

const Associates = () => {
  return (
    <div className=' container mx-auto max-sm:max-w-[400px] max-[390px]:max-w-[360px] max-lg:max-w-[980px] max-lg:px-2 py-10 cursor'>
      <div className='max-w-screen-sm lg:mb-8'>
        <h2 className='text-[36px] md:text-[42px] font-bold tracking-tight text-gray-900 dark:text-white'>
          Our Associates
        </h2>
        <p className='font-light text-[16px] md:text-[18px] text-gray-500 dark:text-gray-400'>
          Words that Sparkle, Ideas that Shine: Each article is a gem,
          meticulously crafted to illuminate, educate, and inspire the world of
          jewelry.
        </p>
      </div>
      {[].length > 0 ? (
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-6 justify-center'>
          {/* {[blogCardListData].map((item) => (
            <div key={item._id} className='grid gap-2'>
              <Card
                renderImage={() => (
                  <Image
                    width={500}
                    height={400}
                    src={builder
                      .image(item.mainImage.asset._ref)
                      .width(500)
                      .height(400)
                      .url()}
                    alt='images'
                  />
                )}
              >
                <h5 className='text-[20px] font-bold tracking-tight text-gray-900 capitalize dark:text-white'>
                  {item.title}
                </h5>
                <p className='font-normal text-gray-700 dark:text-gray-400'>
                  {item.cardInfoText}
                </p>
                <div className='flex justify-between items-center'>
                  <p className='font-semibold text-gray-700 dark:text-gray-400'>
                    Author:{item.author}
                  </p>
                  <Button className='text-primary-danger'>
                    {item.readTime}
                    <FaArrowRightLong className='ml-2' />
                  </Button>
                </div>
              </Card>
            </div>
          ))} */}
        </div>
      ) : (
        <div className='mx-auto max-w-screen-sm lg:my-8 py-28 text-center'>
          <h2 className='text-[32px]  font-bold tracking-tight text-gray-900 dark:text-white'>
            Oops! No Data
          </h2>
          <p className='font-light text-gray-500 sm:text-xl text-[20px] dark:text-gray-400'>
            Coming soon
          </p>
        </div>
      )}
    </div>
  );
};

export default Associates;
