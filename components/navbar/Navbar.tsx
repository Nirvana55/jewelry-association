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
    <nav>
      <div className='hidden md:flex flex-row items-center gap-10 bg-background-primary'>
        <div className='flex flex-row gap-10 items-center px-8 py-2 text-navbar'>
          {navIconList.map((item, index) => (
            <Link key={index} href={item.link}>
              {item.icon}
            </Link>
          ))}
        </div>
        <div className='flex justify-between items-center flex-1 bg-test px-8 py-2'>
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
          <div className='text-caption text-white'>Jewelry / Complaints</div>
        </div>
      </div>

      <div className='flex sm:justify-between md:gap-32  bg-background-primary items-center py-3'>
        <div className='px-8 '>
          <p cursor-pointer>Logo</p>
        </div>
        <div className='md:hidden text-primary menuFont px-8 cursor-pointer'>
          <FaHamburger className='ml-auto  text-lg' />
        </div>
        <div className='hidden md:flex justify-between flex-1 items-center'>
          <div className='flex gap-10 font-semibold'>
            {navList.map((item, index) => (
              <Link key={index} className='text-navbar' href={item.link}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className='px-6'>
            <Button className='text-white bg-navbar'>Join Now</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavHeader;
