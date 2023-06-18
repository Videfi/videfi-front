import MainLayout from "@/components/MainLayout";
import { useRouter } from "next/router";
import ViewVideo from "@/components/video/ViewVideo";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Video() {
  const router = useRouter();
  const cid = router.query.cid;

  return (
    <MainLayout>
      <div className={`${inter.className} w-full h-full p-5`}>
        <ViewVideo cid={cid as string} />
      </div>
    </MainLayout>
  );
}
