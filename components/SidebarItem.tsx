import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  title: string;
  path: string;
  icon: LucideIcon;
  disabled: boolean;
}

export default function SidebarItem({ title, path, icon, disabled }: Props) {
  const router = useRouter();
  const isActive = router.pathname === path;

  const renderIcon = () => {
    const Icon = icon;
    return <Icon />;
  };

  const handleClick = () => {
    if (disabled) return;
    router.push(path);
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "w-full h-[45px] rounded-lg flex justify-start items-center px-5 text-gray-300 select-none",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        isActive
          ? "bg-vdf-menu-active text-indigo-400 cursor-default"
          : "hover:opacity-80"
      )}
    >
      {renderIcon()}
      <p className="ml-3 text-lg">{title}</p>
    </div>
  );
}
