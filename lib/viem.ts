import { createPublicClient, createWalletClient, custom, http } from "viem";
import { goerli, mainnet, polygonMumbai } from "viem/chains";

export function getPublicClient() {
  return createPublicClient({
    chain: goerli,
    transport: custom((window as any).ethereum),
  });
}

export function getWalletClient() {
  return createWalletClient({
    chain: goerli,
    transport: custom((window as any).ethereum),
  });
}
