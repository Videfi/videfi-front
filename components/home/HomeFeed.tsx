import React from "react";
import { useContentNFTsFeed } from "@/hooks/useContentNFTsFeed";
import IPFSVideoCard from "../IPFSVideoCard";

export default function HomeFeed() {
  const feedData = useContentNFTsFeed();

  return (
    <div className="grid grid-cols-3 gap-y-7 gap-x-10 h-full overflow-y-scroll">
      {feedData &&
        feedData.contentNFTs.map((nft, index) => (
          <IPFSVideoCard
            key={index}
            ipfsHash={nft.content.tokenURI}
            views={0}
            owner={nft.owner.id}
          />
        ))}
    </div>
  );
}
