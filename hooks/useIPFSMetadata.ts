import { fetchMetadataFromIPFS, replaceIPFSUrl } from "@/lib/ipfs";
import { useEffect, useState } from "react";

export const useIPFSMetadata = (ipfsHash: string) => {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("0:00");
  const [thumbnail, setThumbnail] = useState("");
  const [videoCid, setVideoCid] = useState<string | null>(null);

  useEffect(() => {
    if (ipfsHash) {
      fetchMetadataFromIPFS(ipfsHash).then((res) => {
        const ipfsUrl = replaceIPFSUrl(res.image);

        setTitle(res.name);
        setDuration(res.duration.toString());
        setThumbnail(ipfsUrl);
        setVideoCid(res.videoCid)
      });
    }
  }, [ipfsHash]);

  return {
    title,
    duration,
    thumbnail,
    videoCid
  };
};
