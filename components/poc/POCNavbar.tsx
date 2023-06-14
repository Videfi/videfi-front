import React from "react";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function POCNavbar() {
  const router = useRouter();
  return (
    <div className="flex space-x-5 items-center">
      <p
        className="hover:cursor-pointer"
        onClick={() => router.push("/poc/upload")}
      >
        Upload
      </p>
      <p>|</p>
      <p
        className="hover:cursor-pointer"
        onClick={() => router.push("/poc/view")}
      >
        View
      </p>
      <p>|</p>
      <p
        className="hover:cursor-pointer"
        onClick={() => router.push("/poc/view-en")}
      >
        View Encrypted
      </p>
      <p>|</p>
      <p
        className="hover:cursor-pointer"
        onClick={() => router.push("/poc/edit")}
      >
        Edit
      </p>
      <ConnectButton />
    </div>
  );
}
