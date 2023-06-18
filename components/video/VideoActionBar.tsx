import React from "react";
import { Button } from "../ui/button";
import { ThumbsUp } from "lucide-react";
import { mint } from "@/services/contracts/videfiContent";
import { getPublicClient } from "@/lib/viem";
import { useAllowance } from "@/hooks/useAllowance";
import { useAccount } from "wagmi";
import { useLimitAmount } from "@/hooks/useLimitAmount";
import { useTotalSupply } from "@/hooks/useTotalSupply";
import { approve } from "@/services/contracts/erc20";
import { ADDRESSES } from "@/constants/addresses";
import { formatEther, parseEther } from "viem";

const baseUrlOpensea = "https://testnets.opensea.io/assets/goerli";

type PropsType = {
  id: string;
  like: number;
};

export default function VideoActionBar({ id, like }: PropsType) {
  const [nftAddress, nftId] = (id || "").split("-");
  const openseaUrl = `${baseUrlOpensea}/${nftAddress}/${nftId}`;

  const account = useAccount();
  const allowance = useAllowance(
    ADDRESSES.goerli.USDT,
    account?.address as string,
    nftAddress
  );
  const limitAmount = useLimitAmount(nftAddress);
  const totalSupply = useTotalSupply(nftAddress);

  console.log({ allowance })

  const handleMint = async () => {
    const publicClient = getPublicClient();

    if (!allowance || allowance <= 0) {
      const hash = await approve(
        ADDRESSES.goerli.USDT,
        nftAddress,
        parseEther(`${10000000}`)
      );
      await publicClient.waitForTransactionReceipt({
        hash,
      });
    }

    const hash = await mint(nftAddress);
    const transaction = await publicClient.waitForTransactionReceipt({
      hash,
    });

    if (transaction.status === "success") {
      alert("Mint content successfully");
    } else {
      alert("Mint content failed");
    }
  };

  return (
    <div className="flex space-x-3">
      <Button className="bg-vdf-gray hover:bg-vdf-gray hover:opacity-70">
        Offer Ad
      </Button>
      <a href={openseaUrl} target="_blank">
        <Button className="bg-vdf-gray hover:bg-vdf-gray hover:opacity-70">
          Buy
        </Button>
      </a>
      <Button
        className="bg-vdf-gray hover:bg-vdf-gray hover:opacity-70"
        onClick={handleMint}
      >
        <span>
          {totalSupply}/{limitAmount} Mint
        </span>
      </Button>
      <Button className="bg-vdf-gray hover:bg-vdf-gray hover:opacity-70">
        <ThumbsUp className="mr-2" size={20} />
        {like}
      </Button>
    </div>
  );
}
