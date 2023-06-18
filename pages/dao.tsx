import MainLayout from "@/components/MainLayout";
import { CreateDAO } from "@/components/dao/CreateDAO";
import DAOBar from "@/components/dao/DAOBar";
import DaoCard from "@/components/dao/DaoCard";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function DAO() {
  return (
    <MainLayout>
      <div className={`${inter.className} w-full h-full overflow-y-scroll`}>
        <div className="flex pr-10">
          <div className="w-full px-10 py-5">
            <p className="text-gray-100 text-2xl mt-5">DAO</p>
          </div>
          <CreateDAO />
        </div>
        <DAOBar />
        <div className="h-full w-full p-5 grid grid-cols-3 gap-3">
          <DaoCard
            thumbnail="https://zipmex.com/static/4da29a1a3c35bad2f2b4af35aa349db8/1bbe7/APECOIN-explained.jpg"
            name="Ape DAO"
            daoAddr={"0x"}
          />
        </div>
      </div>
    </MainLayout>
  );
}
