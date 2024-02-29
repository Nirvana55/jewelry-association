"use client";

import { TextInput } from "flowbite-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { HiSearch } from "react-icons/hi";
import { useDebouncedCallback } from "use-debounce";

const TableSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className='sm:flex sm:justify-end pt-[10px]'>
      <TextInput
        type='text'
        rightIcon={HiSearch}
        placeholder='search'
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("search")?.toString()}
      />
    </div>
  );
};

export default TableSearch;
