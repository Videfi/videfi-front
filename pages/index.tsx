import MainLayout from "@/components/MainLayout";
import HomeFeed from "@/components/home/HomeFeed";
import TagSelector from "@/components/home/TagSelector";
import { Inter } from "next/font/google";
import { ContentQueryDocument, ContentQueryQuery, execute } from '../.graphclient'
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [data, setData] = useState<ContentQueryQuery>()

  useEffect(() => {
    execute(ContentQueryDocument, {}).then((result) => {
      setData(result?.data)
    })
  }, [setData]);

  console.log(data);

  return (
    <MainLayout>
      <div className={`${inter.className} w-full h-full`}>
        <div className="flex justify-center items-center flex-col h-full w-full px-10 py-5 pb-10">
          <TagSelector />
          <HomeFeed />
        </div>
      </div>
    </MainLayout>
  );
}
