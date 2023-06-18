import React from "react";
import MembershipCard from "./MembershipCard";

export default function MembershipList() {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-10 h-full px-10 pt-5 gap-y-7 pb-10">
        {[
          {
            tier: "Gold",
            owner: "blackpink.eth",
            duration: "1 Year Duration",
            thumbnail: "/images/blink-member.png",
            items: "20/30",
            price: "0.5 ETH",
          },
          {
            tier: "Silver",
            owner: "blackpink.eth",
            duration: "1 Year Duration",
            thumbnail: "/images/blink-member.png",
            items: "10/50",
            price: "0.3 ETH",
          },
          {
            tier: "Bronze",
            owner: "blackpink.eth",
            duration: "1 Year Duration",
            thumbnail: "/images/blink-member.png",
            items: "15/100",
            price: "0.15 ETH",
          },
        ].map((membership, index) => (
          <MembershipCard
            tier={membership.tier}
            duration={membership.duration}
            owner={membership.owner}
            thumbnail={membership.thumbnail}
            items={membership.items}
            price={membership.price}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
