import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

type VideoCardProps = {
  tier: string;
  owner: string;
  duration: string;
  thumbnail: string;
  items: string;
  price: string;
};

export default function MembershipCard({
  tier,
  owner,
  duration,
  thumbnail,
  items,
  price,
}: VideoCardProps) {
  return (
    <div
      className={cn(
        "w-[360px] h-[340px] bg-vdf-black rounded-lg text-gray-200 shadow cursor-default"
      )}
    >
      <div
        className={cn(
          "w-[360px] h-[200px] bg-indigo-500 rounded-t-lg relative"
        )}
      >
        <Image
          src={thumbnail}
          fill={true}
          alt="thumbnail"
          className="rounded-t"
        />
        <div className="absolute top-3 right-3 px-2 py-1 bg-indigo-500 rounded-lg">
          {tier}
        </div>
      </div>
      <div className="w-full flex space-x-3 p-4">
        <Avatar className="dark">
          <AvatarImage src="https://github.com/shadcn.png-x" />
          <AvatarFallback className="bg-indigo-500">CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="">{owner}</p>
          <p className="text-gray-400 text-sm">{duration}</p>
        </div>
      </div>
      <div className="bg-gray-700 h-[1px] mb-2 w-full mt-0" />
      <div className="flex w-full justify-between px-4">
        <div>
          <p className="text-gray-400">Items</p>
          <p>{items}</p>
        </div>
        <div>
          <div>
            <p className="text-gray-400">Price</p>
            <p>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
