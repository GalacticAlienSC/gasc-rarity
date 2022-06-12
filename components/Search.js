import { useRouter } from "next/router";
import React from "react";
import { DebounceInput } from "react-debounce-input";
import { json2query } from "../util";

export const Search = (props) => {
  const router = useRouter();
  const { query = "" } = router.query;

  const handleChange = (e) => {
    router.push(
      `?${json2query({
        ...router.query,
        query: e.target.value,
      })}`
    );
  };
  return (
    <div className="px-2 mt-4 w-full">
      <h3 className="text-xs text-[#202520] uppercase mb-2 font-bold">Search</h3>

      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        className="bg-[#d0e8f5] outline-[#95aedf] p-2 hover:bg-[#e7f0fa] rounded-md w-full text-xs"
        placeholder="🔍  Search by Token ID (e.g. 1337)"
        onChange={handleChange}
      />
    </div>
  );
};
