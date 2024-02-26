import { Avatar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import JoinAssociation from "../../../../components/JoinAssociation";
import SubscribeBlog from "../../../../components/subscribeBlog";
import NoData from "../../../../components/NoData/NoData";
import { sanityClient } from "../../../../utils/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

const navIconList = [
  { icon: <BsFacebook />, link: "#" },
  { icon: <BsInstagram />, link: "#" },
  { icon: <BsTwitter />, link: "#" },
];

async function getPost(params: string) {
  const res = await await sanityClient.fetch(
    `*[_type == "blog" && slug.current == "${params}"]{
  content,author,readTime,mainImage,title}`
  );

  return res;
}

const EventDetails = async ({ params }: { params: { slug: string } }) => {
  const blogCardListData = await getPost(params.slug);
  const builder = imageUrlBuilder(sanityClient);

  return (
    <div className=' container mx-auto max-sm:max-w-[400px] max-[390px]:max-w-[360px] max-lg:max-w-[980px] max-lg:px-2 py-10 cursor'>
      <div className='max-w-screen-xl'>
        <h2 className='capitalize text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
          {blogCardListData[0].title}
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
                January 11, 2022 &nbsp;<p>{blogCardListData[0].readTime}</p>
              </div>
            </div>
          </Avatar>

          <div className='flex mt-4 md:mt-0 flex-row gap-4 md:gap-8 justify-center items-center text-black'>
            {navIconList.map((item, index) => (
              <Link
                key={index}
                className='bg-blue-400 rounded-3xl text-center p-2 md:p-3'
                href={item.link}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {blogCardListData.length > 0 ? (
        <>
          <div className='py-[80px]'>
            <div className='relative lg:h-[600px]'>
              <Image
                fill
                src={builder
                  .image(blogCardListData[0].mainImage.asset._ref)
                  .width(1312)
                  .height(600)
                  .url()}
                alt='images'
              />
            </div>
          </div>

          <div className='text-[18px] text-black'>
            <PortableText value={blogCardListData[0].content} />
          </div>
        </>
      ) : (
        <NoData />
      )}
      <JoinAssociation />
      <SubscribeBlog />
    </div>
  );
};

export default EventDetails;
