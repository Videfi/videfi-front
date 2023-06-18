import React from "react";
import { useContentNFTsFeed } from "@/hooks/useContentNFTsFeed";
import IPFSVideoCard from "../IPFSVideoCard";
import { RotateCwIcon } from "lucide-react";

export default function HomeFeed() {
  const feedData = useContentNFTsFeed();

  return (
    <div className="grid grid-cols-3 gap-y-7 gap-x-10 h-full overflow-y-scroll">
      {feedData ? (
        feedData.contentNFTs.map((nft, index) => (
          <IPFSVideoCard
            key={index}
            id={nft.id}
            ipfsHash={nft.content.tokenURI}
            views={0}
            owner={nft.owner.id}
          />
        ))
      ) : (
        <div className="w-full h-[150px] flex justify-center items-center">
          <p className="text-indigo-500 animate-spin text-5xl">
            <RotateCwIcon size={50} />
          </p>
        </div>
      )}
    </div>
  );
}
