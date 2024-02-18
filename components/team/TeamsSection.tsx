import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const teamData = [
  {
    image: "/asd.jpg",
    name: "Bonnie Green",
    role: "CEO/Co-founder",
    facebookLink: "#",
    instagramLink: "#",
    youtubeLink: "#",
  },
  {
    image: "/asd.jpg",
    name: "Bonnie Green",
    role: "CEO/Co-founder",
    facebookLink: "#",
    instagramLink: "#",
    youtubeLink: "#",
  },
  {
    image: "/asd.jpg",
    name: "Bonnie Green",
    role: "CEO/Co-founder",
    facebookLink: "#",
    instagramLink: "#",
    youtubeLink: "#",
  },
  {
    image: "/asd.jpg",
    name: "Bonnie Green",
    role: "CEO/Co-founder",
    facebookLink: "#",
    instagramLink: "#",
    youtubeLink: "#",
  },
];

const TeamsSection = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className=' container mx-auto max-sm:max-w-[400px] max-[390px]:max-w-[360px] max-lg:max-w-[980px] max-lg:px-2 py-[64px] md:py-[112px]'>
        <div className='max-w-screen-sm'>
          <h2 className='text-[36px] md:text-[42px] font-bold tracking-tight md:tracking-normal text-gray-900 dark:text-white'>
            Our Team
          </h2>
          <p className='font-light text-gray-500 sm:text-xl dark:text-gray-400 text-[16px] md:text-[18px] py-[12px] md:py-[24px]'>
            Harmony in Craft, Strength in Unity: Our team, a mosaic of talents,
            dedicated to crafting brilliance in every facet of the jewelry
            industry.
          </p>
        </div>
        <div className='grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-[80px]'>
          {teamData.map((item, index) => (
            <div
              key={index}
              className='text-center text-gray-500 dark:text-gray-400'
            >
              <div className='relative mx-auto mb-4 w-36 h-36 '>
                <Image
                  className='rounded-full'
                  fill
                  src={item.image}
                  alt='Bonnie Avatar'
                />
              </div>

              <h3 className='pt-[16px] text-[16px] font-bold tracking-tight text-gray-900 dark:text-white'>
                <Link href='#'>{item.name}</Link>
              </h3>
              <p>{item.role}</p>
              <ul className='flex justify-center mt-4'>
                <li className='px-2'>
                  <Link
                    href={item.facebookLink}
                    className='text-[#39569c] hover:text-gray-900 dark:hover:text-white'
                  >
                    <FaFacebook />
                  </Link>
                </li>
                <li className='px-2'>
                  <Link
                    href={item.instagramLink}
                    className='text-[#d62976] hover:text-gray-900 dark:hover:text-white'
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li className='px-2'>
                  <Link
                    href={item.youtubeLink}
                    className='text-[#FF0000] hover:text-gray-900 dark:hover:text-white dark:text-gray-300'
                  >
                    <FaYoutube />
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
