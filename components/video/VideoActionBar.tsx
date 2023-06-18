import React from "react";
import { Button } from "../ui/button";
import { ThumbsUp } from "lucide-react";

export default function VideoActionBar() {
  return (
    <div className="flex space-x-3">
      <Button className="bg-vdf-gray hover:bg-vdf-gray hover:opacity-70">
        Offer Ad
      </Button>
      <Button className="bg-vdf-gray hover:bg-vdf-gray hover:opacity-70">
        Buy
      </Button>
      <Button className="bg-vdf-gray hover:bg-vdf-gray hover:opacity-70">
        15/30 Mint
      </Button>
      <Button className="bg-vdf-gray hover:bg-vdf-gray hover:opacity-70">
        <ThumbsUp className="mr-2" size={20} />
        123
      </Button>
    </div>
  );
}
