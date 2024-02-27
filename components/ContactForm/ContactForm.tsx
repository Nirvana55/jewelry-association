"use client";

import { Button, Label, TextInput, Textarea } from "flowbite-react";
import {
  MdOutlineMail,
  MdOutlineLocationOn,
  MdOutlineFax,
} from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const data = [
  {
    icon: <MdOutlineFax />,
    title: "fax",
    text: "+977-1-4252181",
  },
  {
    icon: <MdOutlineMail />,
    title: "email",
    text: "nepalgja@mos.com.np",
  },
  {
    icon: <MdOutlineLocationOn />,
    title: "Location",
    text: "4th Floor, Kesha Plaza, New Road, Kathmandu, Nepal",
  },
  {
    icon: <BsFillTelephoneFill />,
    title: "Telephone",
    text: "+977-1-4220210",
  },
];

const ContactForm = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center'>
      <div className='w-full md:w-[50%] lg:w-[60%] self-start'>
        <div>
          <h2 className='text-3xl md:text-4xl  font-semibold tracking-tight text-gray-900 dark:text-white py-[20px]'>
            Become a member
          </h2>
          <p className='sm:text-xl text-gray-500'>
            Have a questions or need more information? Contact us!
          </p>
        </div>
        <div className='py-[24px]'>
          {data.map((item, index) => (
            <div
              className='flex py-2 gap-4 items-center text-gray-500'
              key={index}
            >
              <div className='text-lg md:text-2xl  text-gray-500'>
                {item.icon}
              </div>
              <p className='text-md md:text-xl '>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='max-md:py-[24px] flex-1 w-full'>
        <form className='flex flex-col gap-4 '>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='name' className='text-md' value='Your name' />
            </div>
            <TextInput
              className='w-full'
              placeholder='Name'
              id='name'
              type='text'
              required
            />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label
                className='text-md'
                htmlFor='companyName'
                value='Your company Name'
              />
            </div>
            <TextInput
              id='companyName'
              placeholder='Company name'
              type='text'
              required
            />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label className='text-md' htmlFor='email1' value='Your email' />
            </div>
            <TextInput
              id='email1'
              type='email'
              placeholder='name@flowbite.com'
              required
            />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label
                className='text-md'
                htmlFor='phoneNumber'
                value='Your phone number'
              />
            </div>
            <TextInput
              placeholder='Phone number'
              id='phoneNumber'
              type='number'
              required
            />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label
                className='text-md'
                htmlFor='faxNumber'
                value='Your fax number'
              />
            </div>
            <TextInput placeholder='Fax number' id='faxNumber' type='number' />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label
                className='text-md'
                htmlFor='comment'
                value='Your message'
              />
            </div>
            <Textarea
              id='comment'
              placeholder='Leave a message...'
              required
              rows={4}
            />
          </div>
        </form>
        <Button
          className='bg-primary-btn-color mt-4 max-lg:w-full'
          type='submit'
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
