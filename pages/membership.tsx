import MainLayout from "@/components/MainLayout";
import { CreateMemberShip } from "@/components/membership/CreateMembership";
import MembershipBar from "@/components/membership/MembershipBar";
import MembershipList from "@/components/membership/MembershipList";

import { Inter } from "next/font/google";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Membership() {
  return (
    <MainLayout>
      <div className={`${inter.className} w-full h-full overflow-y-scroll`}>
        <div className="flex pr-10">
          <div className="w-full px-10 py-5">
            <p className="text-gray-100 text-2xl">Memberships</p>
          </div>
          <CreateMemberShip />
        </div>
        <MembershipBar />
        <MembershipList />
      </div>
    </MainLayout>
  );
}
