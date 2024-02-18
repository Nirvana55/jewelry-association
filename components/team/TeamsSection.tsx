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
      <div className='container py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
        <div className='mx-auto mb-8 max-w-screen-sm lg:mb-16'>
          <h2 className='titleFont text-center font-bold tracking-tight text-gray-900 dark:text-white'>
            Our Team
          </h2>
          <p className='font-light text-gray-500 sm:text-xl dark:text-gray-400'>
            Harmony in Craft, Strength in Unity: Our team, a mosaic of talents,
            dedicated to crafting brilliance in every facet of the jewelry
            industry.
          </p>
        </div>
        <div className='grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
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

              <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                <Link href='#'>{item.name}</Link>
              </h3>
              <p>{item.role}</p>
              <ul className='flex justify-center mt-4 space-x-4'>
                <li>
                  <Link
                    href={item.facebookLink}
                    className='text-[#39569c] hover:text-gray-900 dark:hover:text-white'
                  >
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link
                    href={item.instagramLink}
                    className='text-[#d62976] hover:text-gray-900 dark:hover:text-white'
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li>
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
