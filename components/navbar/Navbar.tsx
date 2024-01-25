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

const navList = [
  { name: "Home", link: "#" },
  { name: "Associates", link: "#" },
  { name: "Executive Board", link: "#" },
  { name: "Event", link: "#" },
  { name: "Photo Gallery", link: "#" },
  { name: "Join Now", link: "#" },
];

const navIconList = [
  { icon: <BsFacebook />, link: "#" },
  { icon: <BsInstagram />, link: "#" },
  { icon: <BsTwitter />, link: "#" },
];

const NavHeader = () => {
  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-10 bg-background-primary'>
        <div className='flex flex-row gap-10 items-center px-8 py-2'>
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

      <div className='flex gap-32 bg-background-primary items-center py-3'>
        <div className='px-8'>
          <p>Logo</p>
        </div>
        <div className='flex justify-between flex-1 items-center'>
          <div className='flex gap-10'>
            {navList.map((item, index) => (
              <Link key={index} className='text-navbar' href={item.link}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className='px-6'>
            <Button className='text-white bg-navbar'>Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
