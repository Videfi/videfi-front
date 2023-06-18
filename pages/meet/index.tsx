import MainLayout from "@/components/MainLayout";
import CreateBar from "@/components/create/CreateBar";
import CreateVideo from "@/components/create/CreateVideo";
import StartMeet from "@/components/meet/index/StartMeet";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Meet() {
  return (
    <MainLayout>
      <div className={`${inter.className} w-full h-full`}>
        <div className="w-full px-10 py-5">
          <p className="text-gray-100 text-2xl">Create a new meeting</p>
        </div>
        {/* <CreateBar /> */}
        <StartMeet />
      </div>
    </MainLayout>
  );
}
