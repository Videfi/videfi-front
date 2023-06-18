import React from "react";
import VideoCard from "../VideoCard";

export default function HomeFeed() {
  return (
    <div className="grid grid-cols-3 gap-y-7 gap-x-10 h-full overflow-y-scroll">
      {[1, 2, 3, 4, 5, 7, 8, 9, 10].map((cid, index) => (
        <VideoCard
          title="Hello, Wolrd !"
          duration="3:33"
          views={123}
          owner="helloworld.eth"
          thumbnail="https://i.ytimg.com/vi/5qap5aO4i9A/maxresdefault.jpg"
          createdAt="8 minutes ago"
          cid={cid.toString()}
          key={index}
        />
      ))}
    </div>
  );
}
