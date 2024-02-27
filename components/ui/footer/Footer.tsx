"use client";

import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const footerData = [
  {
    title: "about",
    footerLink: [
      {
        link: "#",
        name: "Jewelry Association",
      },
      {
        link: "#",
        name: "About",
      },
    ],
  },
  {
    title: "Join Us",
    footerLink: [
      {
        link: "#",
        name: "Associates",
      },
      {
        link: "#",
        name: "Executive Board",
      },
    ],
  },
  {
    title: "Legal",
    footerLink: [
      {
        link: "#",
        name: "Event",
      },
      {
        link: "#",
        name: "Terms & Conditions",
      },
    ],
  },
];

const FooterBar = () => {
  return (
    <Footer className='bg-test rounded-none text-white' container>
      <div className='container mx-auto w-full'>
        <div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1'>
          <div>
            {/* <Footer.Brand
              href='https://flowbite.com'
              src='https://flowbite.com/docs/images/logo.svg'
              alt='Flowbite Logo'
              name='Flowbite'
            /> */}
            <p>Logo</p>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
            {footerData.map((item, index) => (
              <div key={index}>
                <Footer.Title className='text-white' title={item.title} />
                <Footer.LinkGroup col>
                  {item.footerLink.map((item) => (
                    <Footer.Link key={item.name} href={item.link}>
                      {item.name}
                    </Footer.Link>
                  ))}
                </Footer.LinkGroup>
              </div>
            ))}
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            className='text-white'
            href='#'
            by='RubixxCube™'
            year={2024}
          />
          <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
            <Footer.Icon className='text-white' href='#' icon={BsFacebook} />
            <Footer.Icon className='text-white' href='#' icon={BsInstagram} />
            <Footer.Icon className='text-white' href='#' icon={BsYoutube} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterBar;
