import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type Props = {
  children: JSX.Element;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="h-screen w-full bg-vdf-black">
      <Navbar />
      <div className="flex w-full h-full overflow-hidden">
        <Sidebar />
        <div className="flex-1 h-full bg-vdf-sec-black">{children}</div>
      </div>
    </div>
  );
}
