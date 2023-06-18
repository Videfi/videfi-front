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
        {/* <CreateBar /> */}
        <StartMeet />
      </div>
    </MainLayout>
  );
}
