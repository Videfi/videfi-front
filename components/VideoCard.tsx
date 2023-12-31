import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EyeOffIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";
import Image from "next/image";
import { truncateWalletAddress } from "@/utils/truncate.util";
import { durationFormatter } from "@/utils/durationFormatter.util";
import { generateRandomTimeAgoString } from "@/utils/timeMock.util";

type VideoCardProps = {
  id: string;
  title: string;
  views: number;
  owner: string;
  duration: string;
  thumbnail: string;
  createdAt: string;
};

export default function VideoCard({
  id,
  title,
  views,
  owner,
  duration,
  thumbnail,
  createdAt,
}: VideoCardProps) {
  const [watchable, setWatchable] = useState(true);

  const router = useRouter();

  const [datsAgoMock, setDatsAgoMock] = useState("8 minutes ago");
  useEffect(() => {
    const randomMock = generateRandomTimeAgoString();
    setDatsAgoMock(`${randomMock}`);
  }, []);

  // useEffect(() => {
  //   const randomMock = Math.random() >= 0.4;
  //   setWatchable(randomMock);
  // }, [watchable]);

  return (
    <div
      onClick={() => watchable && router.push(`/video/${id}`)}
      className={cn(
        "w-[360px] h-[300px] bg-vdf-black rounded-lg text-gray-200 shadow",
        watchable ? "cursor-pointer" : "cursor-not-allowed"
      )}
    >
      <div
        className={cn(
          "w-[360px] h-[200px] bg-indigo-500 rounded-t-lg relative"
        )}
      >
        <div className="w-[360px] h-[200px] absolute">
          <Image
            src={thumbnail}
            fill={true}
            alt="thumbnail"
            className={cn("rounded-t-lg", !watchable && "opacity-50")}
          />
        </div>
        {watchable ? (
          <div className="bg-black px-1.5 py-0.5 text-sm absolute bottom-2 right-2">
            {durationFormatter(+duration)}
          </div>
        ) : (
          <div className="select-none w-[360px] h-[200px] absolute rounded-t-lg flex items-center justify-center flex-col text-white">
            <EyeOffIcon />
            <p className="text-center mt-2">
              You need to subscribe to the Owner <br />
              Or own this NFT to watch it.
            </p>
          </div>
        )}
      </div>
      <div className="w-full h-[100px] flex space-x-3 p-4">
        <Avatar className="dark">
          <AvatarImage src="https://github.com/shadcn.png-x" />
          <AvatarFallback className="bg-indigo-500">CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="">{title}</p>
          <p className="text-gray-400 text-sm">
            {truncateWalletAddress(owner, 25)}
          </p>
          <p className="text-gray-400 text-sm">
            {views} views - {datsAgoMock}
          </p>
        </div>
      </div>
    </div>
  );
}
