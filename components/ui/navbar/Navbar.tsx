"use client";

import Link from "next/link";
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
import CustomButton from "../button/CustomButton";
import { useGetRates } from "../../../api/associates/queries";
import { Spinner } from "flowbite-react";
import Image from "next/image";

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
  const getRateData = useGetRates();

  return (
    <nav className='sticky top-0 z-50 bg-background-body shadow-md'>
      <div className='hidden md:flex flex-row items-center gap-10 py-3 bg-test '>
        <div className='container mx-auto max-[390px]:max-w-[360px] max-sm:max-w-[400px] max-lg:max-w-[980px] flex justify-between items-center max-lg:px-1 flex-1 py-2 animate-fade-left animate-ease-in '>
          <div className='flex flex-row gap-8 text-white '>
            <div className='flex items-center gap-3 hover:scale-110 duration-300'>
              <BsMailbox />
              <a
                href='https://gmail.com'
                className='text-caption cursor-pointer'
              >
                nepalgja@mos.com.np
              </a>
            </div>
            <div className='ease-in-out  flex items-center gap-3'>
              <BsClock />
              <p className='text-caption'>Open Hours Sun-Fri</p>
            </div>
          </div>
          <div className='flex flex-row gap-8 items-center text-white '>
            <>
              <div className='flex flex-row items-center max-md:mr-2 cursor-pointer hover:scale-110 hover:transition-all duration-300 ease-in-out'>
                <div>
                  <p className='font-semibold text-base'>Gold Price</p>
                </div>
                <div>
                  <BsGraphUp className='mx-2 text-teal-500 text-lg' />
                </div>
                <p className={`text-base `}>
                  {getRateData.isLoading ? (
                    <Spinner />
                  ) : (
                    getRateData?.data[0]?.goldPrice
                  )}
                </p>
              </div>
              <div className='flex flex-row items-center max-md:mr-2 cursor-pointer hover:scale-110 hover:transition-all duration-300 ease-in-out'>
                <div>
                  <p className='font-semibold text-base'>Silver Price</p>
                </div>
                <div>
                  <BsGraphDown className='mx-2 text-primary-danger text-lg' />
                </div>
                <p className={`text-base `}>
                  {getRateData.isLoading ? (
                    <Spinner />
                  ) : (
                    getRateData?.data[0]?.silverPrice
                  )}{" "}
                </p>
              </div>
            </>

            {/* {item.name === "Silver" ? "text-primary-danger" : "text-teal-500"} */}

            {navIconList.map((item, index) => (
              <Link
                key={index}
                className={`${
                  index === 2 ? "mr-1" : ""
                } hover:scale-110 duration-300`}
                href={item.link}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className='container py-2 items-center mx-auto flex justify-between max-[390px]:max-w-[360px] max-sm:max-w-[400px] max-lg:max-w-[980px] max-lg:px-2 md:gap-32 max-md:drawer md:animate-fade-right md:animate-ease-in'>
        <div className='animate-fade-right md:animate-ease-in'>
          <Image
            className='cursor-pointer'
            src='/logo.jpg'
            alt='logo'
            height={400}
            width={100}
          />
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
            <CgMenuRight className='ml-auto text-lg text-black animate-fade-right md:animate-ease-in' />
          </label>
        </div>

        <div className='hidden xl:flex justify-between items-center '>
          <div className='flex gap-10 font-semibold '>
            {navList.map((item, index) => (
              <Link
                key={index}
                className='custom-link hover:scale-110 duration-300 transition '
                href={item.link}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className='hidden xl:block buttonText ml-10'>
            <CustomButton
              handleClick={() => router.push(`/contact`)}
              buttonText='Become a member'
            />
            {/* <Button
              onClick={() => router.push(`/contact`)}
              className='text-white bg-primary-btn-color font-semibold hover:bg-primary-text hover:scale-110 duration-300 transition ease-in-out delay-150'
            >
              Become A Member
            </Button> */}
          </div>
        </div>

        {/* drawer */}
        <div className='drawer-side z-30 xl:hidden'>
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
