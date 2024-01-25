"use client";

import Link from "next/link";
import { Button } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const navList = [
  { name: "Home", link: "#" },
  { name: "Associates", link: "#" },
  { name: "Executive Board", link: "#" },
  { name: "Event", link: "#" },
  { name: "Photo Gallery", link: "#" },
  { name: "Home", link: "#" },
  { name: "Join Now", link: "#" },
];

const navIconList = [
  { icon: <BsFacebook />, link: "#" },
  { icon: <BsInstagram />, link: "#" },
  { icon: <BsTwitter />, link: "#" },
];

const NavHeader = () => {
  return (
    <div className='container mr-auto ml-auto'>
      <nav className='flex flex-row items-center justify-between'>
        <div>
          <div>
            <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
              Logo
            </span>
          </div>
          <div />
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-col'>
            <div className='flex flex-row gap-8 justify-end items-center py-5'>
              {navIconList.map((item, index) => (
                <Link className='text-primary' href={item.link} key={index}>
                  {item.icon}
                </Link>
              ))}
              <Link href='#' className='text-primary'>
                Calendar
              </Link>
              <Link href='#' className='text-primary'>
                Contact Us
              </Link>
            </div>
            <hr className='h-px bg-gray-200 border-0 dark:bg-gray-700' />
            <div className='flex gap-16 items-center'>
              {navList.map((item) => (
                <>
                  {item.name === "Join Now" ? (
                    <Button as='a' href={item.link} className='bg-primary'>
                      {item.name}
                    </Button>
                  ) : (
                    <Link
                      className='text-navbar font-semibold py-5'
                      href={item.link}
                      key={item.name}
                    >
                      {item.name}
                    </Link>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavHeader;
