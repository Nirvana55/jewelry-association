import React from "react";
import NoData from "../../../components/NoData/NoData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

const Associates = () => {
  return (
    <div className=' container mx-auto max-sm:max-w-[400px] max-[390px]:max-w-[360px] max-lg:max-w-[980px] max-lg:px-2 py-10 cursor'>
      <div className='max-w-screen-sm'>
        <h2 className='text-[42px] md:text-[56px] font-bold tracking-tight text-gray-900 dark:text-white'>
          Our Associates
        </h2>
        <p className='font-light text-[16px] md:text-[18px] text-gray-500 dark:text-gray-400'>
          Words that Sparkle, Ideas that Shine: Each article is a gem,
          meticulously crafted to illuminate, educate, and inspire the world of
          jewelry.
        </p>
      </div>
      <div className='py-[48px] md:py-[80px]'>
        {["a"].length > 0 ? (
          <div className='overflow-x-auto'>
            <Table>
              <TableHead>
                <TableHeadCell className='bg-navbar text-white'>
                  Name
                </TableHeadCell>
                <TableHeadCell className='bg-navbar text-white'>
                  Address
                </TableHeadCell>
                <TableHeadCell className='bg-navbar text-white'>
                  Phone Number
                </TableHeadCell>
                <TableHeadCell className='bg-navbar text-white'>
                  Store Name
                </TableHeadCell>
                <TableHeadCell className='bg-navbar text-white'>
                  Action
                </TableHeadCell>
              </TableHead>
              <TableBody className='divide-y'>
                <TableRow className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <TableCell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                    {'Bruno Lama"'}
                  </TableCell>
                  <TableCell>New Road</TableCell>
                  <TableCell>Kathmandu</TableCell>
                  <TableCell>Gold and silver</TableCell>
                  <TableCell>
                    <a
                      href='#'
                      className='font-medium text-cyan-600 hover:underline dark:text-cyan-500'
                    >
                      Edit
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <TableCell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                    {'Bruno Lama2"'}
                  </TableCell>
                  <TableCell>New Road</TableCell>
                  <TableCell>Kathmandu</TableCell>
                  <TableCell>Gold and silver</TableCell>
                  <TableCell>
                    <a
                      href='#'
                      className='font-medium text-cyan-600 hover:underline dark:text-cyan-500'
                    >
                      Edit
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <TableCell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                    {'Bruno Lama3"'}
                  </TableCell>
                  <TableCell>New Road</TableCell>
                  <TableCell>Kathmandu</TableCell>
                  <TableCell>Gold and silver</TableCell>
                  <TableCell>
                    <a
                      href='#'
                      className='font-medium text-cyan-600 hover:underline dark:text-cyan-500'
                    >
                      Edit
                    </a>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default Associates;
