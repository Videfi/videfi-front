import { SearchIcon } from "lucide-react";
import React from "react";

export default function Searchbar() {
  return (
    <form className="h-[40px] flex">
      <input
        type="input"
        name="search"
        placeholder="Search"
        id="search"
        className="rounded-l-full bg-vdf-sec-black text-white px-[23px] focus:outline-none w-[400px]"
      />
      <button className="h-full rounded-r-full w-[65px] flex items-center justify-center bg-vdf-gray">
        <SearchIcon className="text-gray-300 mr-1" size={19} />
      </button>
    </form>
  );
}
