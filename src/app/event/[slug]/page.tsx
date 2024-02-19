import { Avatar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import JoinAssociation from "../../../../components/JoinAssociation";
import SubscribeBlog from "../../../../components/subscribeBlog";
import NoData from "../../../../components/NoData/NoData";

const navIconList = [
  { icon: <BsFacebook />, link: "#" },
  { icon: <BsInstagram />, link: "#" },
  { icon: <BsTwitter />, link: "#" },
];

const EventDetails = () => {
  const blogData = `*[_type == "post" && slug.current == $slug][0]{
  content,author
}`;

  return (
    <div className=' container mx-auto max-sm:max-w-[400px] max-[390px]:max-w-[360px] max-lg:max-w-[980px] max-lg:px-2 py-10 cursor'>
      <div className='max-w-screen-xl'>
        <h2 className='text-[42px] md:text-[52px] font-extrabold tracking-tight text-gray-900 dark:text-white'>
          Exploring the World of Gold and Silver
        </h2>

        <div className='flex flex-col md:flex-row justify-between pt-12 md:pt-14 items-center'>
          <Avatar
            img={(props) => (
              <Image
                alt='photo'
                height={56}
                referrerPolicy='no-referrer'
                src='/asd.jpg'
                width={56}
                {...props}
              />
            )}
            rounded
          >
            <div className='space-y-1 font-medium dark:text-white'>
              <div className='text-lg text-black font-bold'>Jese Leos</div>
              <div className='text-sm flex text-gray-500 dark:text-gray-400'>
                January 11, 2022 &nbsp;<p>5-minute read</p>
              </div>
            </div>
          </Avatar>

          <div className='flex mt-4 md:mt-0 flex-row gap-4 md:gap-8 justify-center items-center text-black'>
            {navIconList.map((item, index) => (
              <Link
                key={index}
                className='bg-blue-400 rounded-2xl text-center p-2 md:p-3 lg:p-4'
                href={item.link}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
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
        <NoData />
      )}
      <JoinAssociation />
      <SubscribeBlog />
    </div>
  );
};

export default EventDetails;
