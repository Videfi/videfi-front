import MainLayout from "@/components/MainLayout";
import SettingBar from "@/components/setting/SettingBar";
import SettingDisplayName from "@/components/setting/SettingDisplayName";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function ProfileSetting() {
  return (
    <MainLayout>
      <div className={`${inter.className} w-full h-full`}>
        <div className="w-full px-10 py-5">
          <p className="text-gray-100 text-2xl">Profile setting</p>
        </div>
        <SettingBar />
        <SettingDisplayName />
      </div>
    </MainLayout>
  );
}