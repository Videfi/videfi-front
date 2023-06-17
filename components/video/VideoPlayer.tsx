import React from "react";

export default function VideoPlayer({ cid }: { cid: string }) {
  return (
    <video controls className="w-full h-[420px] shadow bg-black rounded">
      <source
        src={`https://gateway.lighthouse.storage/ipfs/${cid}`}
        type="video/webm"
      />
    </video>
  );
}
