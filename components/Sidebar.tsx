import React from "react";
import SidebarItem from "./SidebarItem";
import {
  HomeIcon,
  LucidePlaySquare,
  RadioIcon,
  MessagesSquare,
  PlusSquare,
  MonitorCheckIcon,
  BoxIcon,
  CircleDollarSignIcon,
} from "lucide-react";

const TopNavItems = [
  { title: "Home", path: "/", icon: <HomeIcon /> },
  { title: "Subscription", path: "/subscription", icon: <LucidePlaySquare /> },
  { title: "Live", path: "/live", icon: <RadioIcon /> },
  { title: "Meet", path: "/meet", icon: <MessagesSquare /> },
];

const MidNavItems = [
  { title: "Create", path: "/create", icon: <PlusSquare /> },
  { title: "Your Content", path: "/content", icon: <MonitorCheckIcon /> },
  { title: "Membership", path: "/membership", icon: <BoxIcon /> },
];

const BottomNavItems = [
  { title: "Revenue", path: "/revenue", icon: <CircleDollarSignIcon /> },
];

export default function Sidebar() {
  return (
    <div className="w-[250px] h-full bg-vdf-black border-r border-gray-800 shadow-lg px-7 py-5">
      <div className="space-y-1.5">
        {TopNavItems.map((item, index) => (
          <SidebarItem
            key={index}
            title={item.title}
            path={item.path}
            icon={item.icon}
          />
        ))}
      </div>
      <div className="my-3 w-full h-[1px] bg-gray-800" />
      {MidNavItems.map((item, index) => (
        <SidebarItem
          key={index}
          title={item.title}
          path={item.path}
          icon={item.icon}
        />
      ))}
      <div className="my-3 w-full h-[1px] bg-gray-800" />
      {BottomNavItems.map((item, index) => (
        <SidebarItem
          key={index}
          title={item.title}
          path={item.path}
          icon={item.icon}
        />
      ))}
    </div>
  );
}
