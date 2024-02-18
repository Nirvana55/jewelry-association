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
import { IoIosClose } from "react-icons/io";

import "./styles.css";

const navList = [
  { name: "Home", link: "/" },
  { name: "Associates", link: "/associates" },
  { name: "Executive Board", link: "/executive-board" },
  { name: "Event", link: "/event" },
  { name: "Photo Gallery", link: "/gallery" },
];

const navIconList = [
  { icon: <BsFacebook />, link: "#" },
  { icon: <BsInstagram />, link: "#" },
  { icon: <BsTwitter />, link: "#" },
];

const NavHeader = () => {
  return (
    <nav className='sticky top-0 z-50 bg-background-primary shadow-md'>
      <div className='hidden md:flex flex-row items-center gap-10 py-2 bg-test'>
        <div className='container mx-auto max-[390px]:max-w-[360px] max-sm:max-w-[400px] max-lg:max-w-[980px] flex justify-between items-center max-lg:px-2 flex-1 py-1'>
          <div className='flex flex-row gap-8 text-white'>
            <div className='flex items-center gap-3'>
              <BsMailbox />
              <p className='text-caption'>mail@gmail.com</p>
            </div>
            <div className='flex items-center gap-3'>
              <BsClock />
              <p className='text-caption'>Open Hours Mon-Fri</p>
            </div>
          </div>
          <div className='flex flex-row gap-8 items-center text-white'>
            {navIconList.map((item, index) => (
              <Link key={index} href={item.link}>
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='container max-[390px]:max-w-[360px] max-sm:max-w-[400px] max-lg:max-w-[980px] mx-auto flex justify-between max-lg:px-2 md:gap-32 py-5 items-center max-md:drawer'>
        <div>
          <p className='cursor-pointer'>Logo</p>
        </div>
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
            <CgMenuRight className='ml-auto text-lg' />
          </label>
        </div>
        <div className='hidden xl:flex justify-between items-center'>
          <div className='flex gap-10 font-semibold'>
            {navList.map((item, index) => (
              <Link key={index} className='text-navbar' href={item.link}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className='hidden xl:block buttonText'>
          <Button className='text-white bg-primary-danger font-semibold'>
            Become A Member
          </Button>
        </div>
        <div className='drawer-side lg:hidden'>
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
                  <Link className='text-white' href={item.link}>
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
