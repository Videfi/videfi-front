import { VidefiContent } from "@/contracts/VidefiContent";
import { getPublicClient, getWalletClient } from "@/lib/viem";

export const mint = async (contractAddress: string) => {
  const walletClient = getWalletClient();
  const publicClient = getPublicClient();

  const [account] = await walletClient.getAddresses();

  const { request } = await publicClient.simulateContract({
    account,
    address: contractAddress as `0x${string}`,
    abi: VidefiContent.abi,
    functionName: "safeMint",
    args: [account],
  });

  return walletClient.writeContract(request);
};

export const getTotalSupply = async (contractAddress: string) => {
  const publicClient = getPublicClient();

  return publicClient.readContract({
    address: contractAddress as `0x${string}`,
    abi: VidefiContent.abi,
    functionName: "totalSupply",
  });
};

export const getLimitAmount = async (contractAddress: string) => {
  const publicClient = getPublicClient();

  return publicClient.readContract({
    address: contractAddress as `0x${string}`,
    abi: VidefiContent.abi,
    functionName: "limitAmount"
  });
};
