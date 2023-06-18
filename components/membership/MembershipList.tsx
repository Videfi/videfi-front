import React from "react";
import MembershipCard from "./MembershipCard";

export default function MembershipList() {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-10 h-full px-10 pt-5 gap-y-7 pb-10">
        {[1, 2, 3, 4, 5].map((index) => (
          <MembershipCard
            tier="Gold"
            duration="1 Year Duration"
            owner="helloworld.eth"
            thumbnail="https://i.ytimg.com/vi/5qap5aO4i9A/maxresdefault.jpg"
            items="10/100"
            price="0.1 ETH"
            key={index}
          />
        ))}
      </div>
    </>
  );
}
