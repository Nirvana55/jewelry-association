"use client";

import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const data = [
  { id: 1, albumImage: "/sad.jpg", albumTitle: "This is all about test" },
  { id: 2, albumImage: "/sad2.jpeg", albumTitle: "This is all about test2" },
  { id: 3, albumImage: "/sad.jpg", albumTitle: "This is all about test3" },
  { id: 4, albumImage: "/sad.jpg", albumTitle: "This is all about test3" },
];

const GalleryCard = () => {
  return (
    <>
      {data.map((item) => (
        <Link href={`/gallery/${item.id}`} key={item.id}>
          <motion.div
            whileHover={{ y: -30 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <Card
              renderImage={() => (
                <Image
                  width={416}
                  height={300}
                  src={item.albumImage}
                  alt='images'
                />
              )}
            >
              <h5 className='text-xl md:text-2xl  font-bold tracking-tight text-gray-900 capitalize dark:text-white'>
                {item.albumTitle}
              </h5>
              <p className='text-base md:text-lg pt-[8px]  font-light text-gray-500 sm:text-xl dark:text-gray-400'>
                Words that Sparkle
              </p>
            </Card>
          </motion.div>
        </Link>
      ))}
    </>
  );
};

export default GalleryCard;
