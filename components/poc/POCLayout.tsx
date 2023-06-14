import React from "react";
import POCNavbar from "./POCNavbar";

type Props = {
  children: JSX.Element;
};

export default function POCLayout({ children }: Props) {
  return (
    <div className="flex items-center flex-col min-h-screen w-full space-y-5 pt-10">
      <POCNavbar />
      {children}
    </div>
  );
}
