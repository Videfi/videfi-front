import React from "react";
import VideoPlayer from "./VideoPlayer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import VideoActionBar from "./VideoActionBar";
import VideoCard from "../VideoCard";
import { useContent } from "@/hooks/useContent";
import { useIPFSMetadata } from "@/hooks/useIPFSMetadata";
import { truncateWalletAddress } from "@/utils/truncate.util";

export default function ViewVideo({ id }: { id: string }) {
  const contentData = useContent(id);

  const title = contentData?.contentNFT?.content.contentName || "Untitled";
  const owner = contentData?.contentNFT?.owner.id || "No owner";
  const tokenURI = contentData?.contentNFT?.content.tokenURI;

  const { videoCid } = useIPFSMetadata(tokenURI!);

  return (
    <div className="w-full h-full flex">
      <div className="w-[800px] h-full">
        <VideoPlayer id={videoCid!} />
        <p className="mt-3 text-2xl text-gray-300">{title}</p>
        <div className="flex space-x-3 items-center mt-3">
          <Avatar className="dark text-gray-300">
            <AvatarImage src="https://github.com/shadcn.png-x" />
            <AvatarFallback className="bg-indigo-500">CN</AvatarFallback>
          </Avatar>
          <div className="w-full flex justify-between">
            <div>
              <p className="text-gray-300">
                {truncateWalletAddress(owner, 25)}
              </p>
              <p className="text-gray-400 text-sm">8 minutes ago</p>
            </div>
            <VideoActionBar id={id} like={123} />
          </div>
        </div>
        <Separator className="mt-3 bg-vdf-gray" />
      </div>
      <div className="h-full flex-1 flex flex-col overflow-y-scroll items-center space-y-5 pl-5">
        {[1, 2].map((id, index) => (
          <VideoCard
            title="Hello, Wolrd !"
            duration="444"
            views={123}
            owner="helloworld.eth"
            thumbnail="https://i.ytimg.com/vi/5qap5aO4i9A/maxresdefault.jpg"
            createdAt="8 minutes ago"
            id={id.toString()}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
