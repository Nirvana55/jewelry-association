"use client";

import Link from "next/link";
import { Button } from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsMailbox,
  BsClock,
} from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { BsGraphDown, BsGraphUp } from "react-icons/bs";

import "./styles.css";
import { useRouter } from "next/navigation";

const navList = [
  { name: "Home", link: "/" },
  { name: "Associates", link: "/associates" },
  { name: "Executive Board", link: "/executive-board" },
  { name: "Event", link: "/event" },
  { name: "Photo Gallery", link: "/gallery" },
  { name: "Graph", link: "/graph" },
];

const navIconList = [
  { icon: <BsFacebook />, link: "#" },
  { icon: <BsInstagram />, link: "#" },
  { icon: <BsTwitter />, link: "#" },
];

const goldAndSilverPrice = [
  {
    name: "Gold",
    price: 100000,
  },
  { name: "Silver", price: 50000 },
];

const NavHeader = () => {
  const router = useRouter();

  return (
    <nav className='sticky top-0 z-50 bg-background-body shadow-md'>
      <div className='hidden md:flex flex-row items-center gap-10 py-2 bg-test'>
        <div className='container mx-auto max-[390px]:max-w-[360px] max-sm:max-w-[400px] max-lg:max-w-[980px] flex justify-between items-center max-lg:px-1 flex-1 py-2'>
          <div className='flex flex-row gap-8 text-white'>
            <div className='flex items-center gap-3'>
              <BsMailbox />
              <p className='text-caption'>nepalgja@mos.com.np</p>
            </div>
            <div className='flex items-center gap-3'>
              <BsClock />
              <p className='text-caption'>Open Hours Sun-Fri</p>
            </div>
          </div>
          <div className='flex flex-row gap-8 items-center text-white'>
            {goldAndSilverPrice.map((item) => (
              <div
                key={item.name}
                className='flex flex-row items-center max-md:mr-2 cursor-pointer'
              >
                <div>
                  <p className='font-semibold text-base'>{item.name}</p>
                </div>
                <div>
                  {item.name === "Silver" ? (
                    <BsGraphDown className='mx-2 text-primary-danger text-lg' />
                  ) : (
                    <BsGraphUp className='mx-2 text-teal-500 text-lg' />
                  )}
                </div>
                <p
                  className={`text-base  ${
                    item.name === "Silver"
                      ? "text-primary-danger"
                      : "text-teal-500"
                  }`}
                >
                  {item.price}
                </p>
              </div>
            ))}

            {navIconList.map((item, index) => (
              <Link
                key={index}
                className={index === 2 ? "mr-1" : ""}
                href={item.link}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='container py-3 items-center mx-auto flex justify-between max-[390px]:max-w-[360px] max-sm:max-w-[400px] max-lg:max-w-[980px] max-lg:px-2 md:gap-32 max-md:drawer'>
        <div>
          <p className='cursor-pointer'>Logo</p>
        </div>

        {/* input button for nav bar drawer */}
        <input
          id='my-drawer-2'
          type='checkbox'
          className='xl:hidden drawer-toggle'
        />
        <div className='xl:hidden text-primary drawer-button drawer-content menuFont cursor-pointer'>
          <label
            htmlFor='my-drawer-2'
            className='drawer-button bg-white border-none lg:hidden'
          >
            <CgMenuRight className='ml-auto text-lg text-black' />
          </label>
        </div>

        <div className='hidden xl:flex justify-between items-center'>
          <div className='flex gap-10 font-semibold'>
            {navList.map((item, index) => (
              <Link
                key={index}
                className='text-primary-text text-base tracking-tight md:tracking-normal'
                href={item.link}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className='hidden xl:block buttonText ml-10'>
            <Button
              onClick={() => router.push(`/contact`)}
              className='text-white bg-primary-btn-color font-semibold'
            >
              Become A Member
            </Button>
          </div>
        </div>

        {/* drawer */}
        <div className='drawer-side z-30 lg:hidden'>
          <label
            htmlFor='my-drawer-2'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <ul className='menu p-4 w-80 min-h-full bg-test text-base-content'>
            <li>
              <Link className='text-[30px] text-white' href='#'>
                NEGJA
              </Link>
            </li>
            <div className='mt-7'>
              {navList.map((item, index) => (
                <li key={index} className='my-5'>
                  <Link className='text-white text-[16px]' href={item.link}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavHeader;
