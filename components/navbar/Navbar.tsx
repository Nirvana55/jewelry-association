"use client";

import Link from "next/link";
import { Button, Navbar } from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsMailbox,
  BsClock,
} from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import "./styles.css";

const navList = [
  { name: "Home", link: "#" },
  { name: "Associates", link: "#" },
  { name: "Executive Board", link: "#" },
  { name: "Event", link: "#" },
  { name: "Photo Gallery", link: "#" },
];

const navIconList = [
  { icon: <BsFacebook />, link: "#" },
  { icon: <BsInstagram />, link: "#" },
  { icon: <BsTwitter />, link: "#" },
];

const NavHeader = () => {
  return (
    <nav className='sticky top-0 z-50 bg-background-primary'>
      <div className='md:container m-auto flex sm:justify-between md:gap-32 py-1 items-center'>
        <div className='px-8 '>
          <p className='cursor-pointer'>Logo</p>
        </div>
        <div className='md:hidden text-primary menuFont px-8 cursor-pointer'>
          <FaHamburger className='ml-auto  text-lg' />
        </div>
        <div className='hidden md:flex justify-between items-center'>
          <div className='flex gap-10 font-semibold'>
            {navList.map((item, index) => (
              <Link key={index} className='text-navbar' href={item.link}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className='hidden md:block px-6 text-caption'>
          <Button className='text-white bg-navbar'>Join Now</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavHeader;

{
  /* <div className='hidden md:flex flex-row items-center gap-10 bg-background-primary'>
        <div className='flex justify-between items-center flex-1 bg-test px-8 py-1'>
          <div className='flex flex-row gap-8  text-white'>
            <div className='flex items-center gap-3'>
              <BsMailbox />
              <p className='text-caption'>mail@gmail.com</p>
            </div>
            <div className='flex items-center gap-3'>
              <BsClock />
              <p className='text-caption'>Open Hours Mon-Fri</p>
            </div>
          </div>
          <div className='flex flex-row gap-8 items-center px-8 py-2 text-white'>
            {navIconList.map((item, index) => (
              <Link key={index} href={item.link}>
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div> */
}
