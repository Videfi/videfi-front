import React from "react";
import SidebarItem from "./SidebarItem";
import {
  BOTTOM_NAV_ITEM,
  MID_NAV_ITEM,
  TOP_NAV_ITEM,
} from "@/config/menuConfig";

export default function Sidebar() {
  return (
    <div className="w-[270px] h-full bg-vdf-black border-r border-gray-800 shadow-lg px-7 py-5">
      <div className="space-y-1.5">
        {TOP_NAV_ITEM.map((item, index) => (
          <SidebarItem
            key={index}
            title={item.title}
            path={item.path}
            icon={item.icon}
            disabled={item.disabled}
          />
        ))}
      </div>
      <div className="my-3 w-full h-[1px] bg-gray-800" />
      {MID_NAV_ITEM.map((item, index) => (
        <SidebarItem
          key={index}
          title={item.title}
          path={item.path}
          icon={item.icon}
          disabled={item.disabled}
        />
      ))}
      <div className="my-3 w-full h-[1px] bg-gray-800" />
      {BOTTOM_NAV_ITEM.map((item, index) => (
        <SidebarItem
          key={index}
          title={item.title}
          path={item.path}
          icon={item.icon}
          disabled={item.disabled}
        />
      ))}
    </div>
  );
}
