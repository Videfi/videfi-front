import MainLayout from "@/components/MainLayout";
import CreateBar from "@/components/create/CreateBar";
import { YourContentTable } from "@/components/your-content/YourContentTable";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function YourContent() {
  return (
    <MainLayout>
      <div className={`${inter.className} w-full h-full`}>
        <div className="w-full px-10 py-5">
          <p className="text-gray-100 text-2xl">Your content</p>
        </div>
        <CreateBar />
        <YourContentTable />
      </div>
    </MainLayout>
  );
}
