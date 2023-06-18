import { ERC20 } from "@/contracts/ERC20";
import { getPublicClient, getWalletClient } from "@/lib/viem";

export const getAllowance = async (
  contractAddress: string,
  from: string,
  to: string
) => {
  const publicClient = getPublicClient();
  return publicClient.readContract({
    address: contractAddress as `0x${string}`,
    abi: ERC20.abi,
    functionName: "allowance",
    args: [from as `0x${string}`, to as `0x${string}`],
  });
};

export const approve = async (
  contractAddress: string,
  to: string,
  amount: bigint
) => {
  const walletClient = getWalletClient();
  const publicClient = getPublicClient();

  const [account] = await walletClient.getAddresses();

  const { request } = await publicClient.simulateContract({
    account,
    address: contractAddress as `0x${string}`,
    abi: ERC20.abi,
    functionName: "approve",
    args: [to as `0x${string}`, amount],
  });

  return walletClient.writeContract(request);
};
