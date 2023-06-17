import MainLayout from "@/components/MainLayout";
import CreateBar from "@/components/create/CreateBar";
import CreateVideo from "@/components/create/CreateVideo";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Create() {
  return (
    <MainLayout>
      <div className={`${inter.className} w-full h-full`}>
        <div className="w-full px-10 py-5">
          <p className="text-gray-100 text-2xl">Create your content</p>
        </div>
        <CreateBar />
        <CreateVideo />
      </div>
    </MainLayout>
  );
}
