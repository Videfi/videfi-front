import MainLayout from "@/components/MainLayout";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Upload() {
  return (
    <MainLayout>
      <div className={`flex ${inter.className}`}></div>
    </MainLayout>
  );
}
