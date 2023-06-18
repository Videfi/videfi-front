import { cn } from "@/lib/utils";
import Image from "next/image";

type DaoCardProps = {
  thumbnail: string;
  name: string;
  daoAddr: string;
};

export default function DaoCard({ thumbnail, name, daoAddr }: DaoCardProps) {
  const handleStake = async () => {};
  const handleUnStake = async () => {};
  const handleClaim = async () => {};

  return (
    <div
      className={cn(
        "w-[360px] h-[260px] bg-vdf-black rounded-lg text-gray-200 shadow cursor-default"
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
          <p className="text-sm">{name}</p>
        </div>
      </div>

      <div className="bg-gray-700 h-[1px] mb-2 w-full mt-0" />
      <div className="flex w-full justify-between py-3">
        <div className="flex justify-center items-center flex-1 cursor-pointer hover:opacity-70">
          <p className="text-gray-400">Stake</p>
        </div>
        <div className="flex justify-center items-center flex-1 border-x border-gray-700 cursor-pointer hover:opacity-70">
          <p className="text-gray-400">Un-Stake</p>
        </div>
        <div className="flex justify-center items-center flex-1 cursor-pointer hover:opacity-70">
          <p className="text-gray-400">Claim</p>
        </div>
      </div>
    </div>
  );
}
