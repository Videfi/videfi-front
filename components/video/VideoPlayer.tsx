import React from "react";

export default function VideoPlayer({ id }: { id: string }) {
  if (!id) return null;

  return (
    <video controls className="w-full h-[420px] shadow bg-black rounded">
      <source
        src={`https://gateway.lighthouse.storage/ipfs/${id}`}
        type="video/webm"
      />
    </video>
  );
}
