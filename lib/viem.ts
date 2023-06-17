import { createPublicClient, createWalletClient, custom, http } from "viem";
import { mainnet, polygonMumbai } from "viem/chains";

export function getPublicClient() {
  return createPublicClient({
    chain: polygonMumbai,
    transport: custom((window as any).ethereum),
  });
}

export function getWalletClient() {
  return createWalletClient({
    chain: polygonMumbai,
    transport: custom((window as any).ethereum),
  });
}
