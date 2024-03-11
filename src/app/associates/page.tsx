import React from "react";
import { sanityClient } from "../../../utils/sanity/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import TableSearch from "../../../components/ui/table-search/TableSearch";
import TablePagination from "../../../components/ui/table-pagination/Pagination";
import CustomResponsiveContainer from "../../../components/Container";

const tableHeaders = ["Name", "Email", "Address", "Phone Number", "Store Name"];

async function getAssociates(query: { search?: string; page?: string }) {
  const res = await sanityClient.fetch(
    `*[_type=="associateMembers"  ${
      query.search ? '&& name match "' + query.search + '"' : ""
    }] | order(publishedAt desc)[0...10]`
  );

  const dataCount = await sanityClient.fetch(
    `count(*[_type=="associateMembers"])`
  );

  return { data: res, dataCount };
}

const Associates = async ({
  searchParams,
}: {
  searchParams: {
    search?: string;
    page?: string;
  };
}) => {
  const search = searchParams?.search || "";
  const currentPage = Number(searchParams?.page) || 1;

  const { data, dataCount } = await getAssociates({
    search,
    page: currentPage.toString(),
  });

  return (
    <CustomResponsiveContainer className='py-10 cursor animate-fade-right animate-ease-in'>
      <div className='max-w-screen-sm'>
        <h2 className='text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white'>
          Our Associates
        </h2>
        <p className='font-light text-base md:text-lg text-gray-500 dark:text-gray-400'>
          Words that Sparkle, Ideas that Shine: Each article is a gem,
          meticulously crafted to illuminate, educate, and inspire the world of
          jewelry.
        </p>
      </div>
      <div className='py-[48px] md:py-[60px]'>
        <TableSearch />

        <div className='overflow-x-auto py-[30px]'>
          <Table hoverable>
            <TableHead>
              {tableHeaders.map((item, index) => (
                <TableHeadCell
                  key={index}
                  className='bg-primary-text text-white'
                >
                  {item}
                </TableHeadCell>
              ))}
            </TableHead>
            <TableBody className='divide-y'>
              {data.length > 0 ? (
                data?.map((item: any, index: number) => (
                  <TableRow
                    key={index}
                    className='bg-white dark:border-gray-700 dark:bg-gray-800'
                  >
                    <TableCell className='whitespace-nowrap capitalize font-medium text-gray-900 dark:text-white'>
                      {item.name}
                    </TableCell>
                    <TableCell className='whitespace-nowrap capitalize font-medium text-gray-900 dark:text-white'>
                      {item.email}
                    </TableCell>
                    <TableCell className='whitespace-nowrap capitalize font-medium text-gray-900 dark:text-white'>
                      {item.address}
                    </TableCell>
                    <TableCell className='whitespace-nowrap capitalize font-medium text-gray-900 dark:text-white'>
                      {item.phoneNumber}
                    </TableCell>
                    <TableCell className='whitespace-nowrap capitalize font-medium text-gray-900 dark:text-white'>
                      {item.storeName}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <TableCell colSpan={5} style={{ textAlign: "center" }}>
                    No Data
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        {data.length > 1 && <TablePagination />}
      </div>
    </CustomResponsiveContainer>
  );
};

export default Associates;
