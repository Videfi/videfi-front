import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EyeOffIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";
import Image from "next/image";
import VideoCard from "./VideoCard";
import { fetchFromIPFS, fetchMetadataFromIPFS, replaceIPFSUrl } from "@/lib/ipfs";

type IPFSVideoCardProps = {
  ipfsHash: string;
  views: number;
  owner: string;
};

export default function IPFSVideoCard({
  ipfsHash,
  views,
  owner,
}: IPFSVideoCardProps) {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("0:00");
  const [thumbnail, setThumbnail] = useState("");
  const [cid, setCid] = useState("");
  const [createdAt, setCreatedAt] = useState("8 minutes ago");

  const [watchable, setWatchable] = useState(false);

  useEffect(() => {
    const randomMock = Math.random() >= 0.4;
    setWatchable(randomMock);
  }, [watchable]);

  useEffect(() => {
    fetchMetadataFromIPFS(ipfsHash).then((res) => {
      const ipfsUrl = replaceIPFSUrl(res.image);

      console.log({ipfsUrl});

      setTitle(res.name);
      setDuration(res.duration.toString());
      setThumbnail(ipfsUrl);
      setCid(res.videoCid);
    });
  }, [ipfsHash]);

  return (
    <VideoCard
      title={title}
      duration={duration}
      views={views}
      owner={owner}
      thumbnail={thumbnail}
      createdAt={createdAt}
      cid={cid}
    />
  );
}
