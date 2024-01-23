"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";

const navList = [
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
      <Navbar.Collapse>
        {navList.map((item) => (
          <Navbar.Link href={item.link} key={item.name} active>
            {item.name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavHeader;
