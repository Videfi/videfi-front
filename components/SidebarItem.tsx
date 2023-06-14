import { cn } from "@/lib/utils";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  title: string;
  path: string;
  icon: React.ReactNode;
}

export default function SidebarItem({ title, path, icon }: Props) {
  const router = useRouter();
  const isActive = router.pathname === path;
  return (
    <div
      className={cn(
        "w-full h-[45px] rounded-lg flex justify-start items-center px-5 text-gray-300",
        isActive
          ? "bg-vdf-menu-active text-indigo-400 cursor-not-allowed"
          : "hover:opacity-80 cursor-pointer"
      )}
    >
      {icon}
      <p className="ml-3 text-lg">{title}</p>
    </div>
  );
}
