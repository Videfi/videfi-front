import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <div className="w-full h-[75px] bg-vdf-black flex items-center px-10 justify-between border-b border-gray-800 shadow-lg">
      <div className="flex items-center justify-center mr-20">
        <p className="font-bold text-white text-4xl ml-1.5">ViDEFi</p>
      </div>
      <Searchbar />
      <div className="flex justify-end">
        <ConnectButton />
      </div>
    </div>
  );
}
