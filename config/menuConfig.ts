import {
  HomeIcon,
  LucidePlaySquare,
  RadioIcon,
  MessagesSquare,
  PlusSquare,
  MonitorCheckIcon,
  BoxIcon,
  CircleDollarSignIcon,
  NetworkIcon,
} from "lucide-react";

const TOP_NAV_ITEM = [
  { title: "Home", path: "/", icon: HomeIcon, disabled: false },
  {
    title: "Subscription",
    path: "/subscription",
    icon: LucidePlaySquare,
    disabled: true,
  },
  { title: "Live", path: "/live", icon: RadioIcon, disabled: true },
  { title: "Meet", path: "/meet", icon: MessagesSquare, disabled: true },
];

const MID_NAV_ITEM = [
  { title: "Create", path: "/create", icon: PlusSquare, disabled: false },
  {
    title: "Your Content",
    path: "/your-content",
    icon: MonitorCheckIcon,
    disabled: false,
  },
  {
    title: "Membership",
    path: "/membership",
    icon: BoxIcon,
    disabled: false,
  },
];

const BOTTOM_NAV_ITEM = [
  {
    title: "DAO",
    path: "/dao",
    icon: NetworkIcon,
    disabled: true,
  },
  {
    title: "Revenue",
    path: "/revenue",
    icon: CircleDollarSignIcon,
    disabled: true,
  },
];

export { TOP_NAV_ITEM, MID_NAV_ITEM, BOTTOM_NAV_ITEM };
