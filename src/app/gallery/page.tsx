import React from "react";
import NoData from "../../../components/ui/no-data/NoData";
import GalleryCard from "../../../components/ui/gallery-card/GalleryCard";

const data = [
  { id: 1, albumImage: "/sad.jpg", albumTitle: "This is all about test" },
  { id: 2, albumImage: "/sad2.jpeg", albumTitle: "This is all about test2" },
  { id: 3, albumImage: "/sad.jpg", albumTitle: "This is all about test3" },
  { id: 4, albumImage: "/sad.jpg", albumTitle: "This is all about test3" },
];

const Gallery = () => {
  return (
    <div className=' container mx-auto max-sm:max-w-[400px] max-[390px]:max-w-[360px] max-lg:max-w-[980px] max-lg:px-2 py-10 cursor animate-fade-right animate-ease-in'>
      <div className='max-w-screen-sm'>
        <h2 className='text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white'>
          Our Gallery
        </h2>
        <p className='font-light text-gray-500 sm:text-xl dark:text-gray-400'>
          Words that Sparkle, Ideas that Shine: Each article is a gem,
          meticulously crafted to illuminate, educate, and inspire the world of
          jewelry.
        </p>
      </div>
      <div className='pt-[42px] md:pt-[80px]'>
        {data.length > 0 ? (
          <div className='grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-[42px] justify-center cursor-pointer'>
            <GalleryCard />
          </div>
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default Gallery;
