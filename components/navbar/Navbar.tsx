"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const navList = [
  { name: "Home", link: "#" },
  { name: "Associates", link: "#" },
  { name: "Executive Board", link: "#" },
  { name: "Event", link: "#" },
  { name: "Photo Gallery", link: "#" },
  { name: "Home", link: "#" },
  { name: "Contact us", link: "#" },
];

const navIconList = [
  { name: "Home", link: "#" },
  { name: "Associates", link: "#" },
  { name: "Executive Board", link: "#" },
  { name: "Event", link: "#" },
  { name: "Photo Gallery", link: "#" },
  { name: "Home", link: "#" },
  { name: "Contact us", link: "#" },
];

const NavHeader = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href='https://flowbite-react.com'>
        {/* <img
          src='/favicon.svg'
          className='mr-3 h-6 sm:h-9'
          alt='Flowbite React Logo'
        /> */}
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          Logo
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />

      <Navbar.Collapse className='flex flex-col'>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-row gap-5 justify-end items-center'>
            <Navbar.Link className='text-primary text-base'>
              <BsFacebook />
            </Navbar.Link>
            <Navbar.Link className='text-primary text-base'>
              <BsInstagram />
            </Navbar.Link>
            <Navbar.Link className='text-primary text-base'>
              <BsTwitter />
            </Navbar.Link>

            <Navbar.Link className='text-primary text-base'>
              Calendar
            </Navbar.Link>
          </div>
          <div className='flex gap-5'>
            {navList.map((item) => (
              <Navbar.Link
                className='text-primary text-base'
                href={item.link}
                key={item.name}
                active
              >
                {item.name}
              </Navbar.Link>
            ))}
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavHeader;
