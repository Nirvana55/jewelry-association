"use client";

import { Pagination } from "flowbite-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";

type TablePaginationProps = {
  currentPage?: number;
};

const TablePagination = (props: TablePaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className='flex overflow-x-auto sm:justify-end'>
      <Pagination
        currentPage={currentPage}
        totalPages={0}
        onPageChange={createPageUrl}
        showIcons
      />
    </div>
  );
};

export default TablePagination;
