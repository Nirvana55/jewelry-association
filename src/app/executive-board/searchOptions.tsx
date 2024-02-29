"use client";

import { Select, TextInput } from "flowbite-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const BoardSearch = (props: any) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const { replace } = useRouter();

  useEffect(() => {
    if (searchParams.get("selectedDate")) {
      replace(
        `${pathname}?selectedDate=${props.data[0].boardMemberYear.toString()}`
      );
    }
  }, []);

  const handleSearch = (e: any) => {
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      params.set("selectedDate", e.target.value);
    } else {
      params.delete("selectedDate");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Select
      onChange={handleSearch}
      value={searchParams.get("selectedDate") || ""}
    >
      {props.data.map((item: any) => (
        <option key={item._id} value={item.boardMemberYear}>
          {item.boardMemberYear}
        </option>
      ))}
    </Select>
  );
};

export default BoardSearch;
