import React, { useState } from "react";
import VideoCard from "./VideoCard";
import { useIPFSMetadata } from "@/hooks/useIPFSMetadata";

type IPFSVideoCardProps = {
  id: string;
  ipfsHash: string;
  views: number;
  owner: string;
};

export default function IPFSVideoCard({
  id,
  ipfsHash,
  views,
  owner,
}: IPFSVideoCardProps) {
  const { title, duration, thumbnail } = useIPFSMetadata(ipfsHash);

  const [createdAt, setCreatedAt] = useState("8 minutes ago");

  return (
    <VideoCard
      id={id}
      title={title}
      duration={duration}
      views={views}
      owner={owner}
      thumbnail={thumbnail}
      createdAt={createdAt}
    />
  );
}
