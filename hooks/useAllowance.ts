import { getAllowance } from "@/services/contracts/erc20";
import { useEffect, useState } from "react";
import { formatEther } from "viem";

export const useAllowance = (address: string, from: string, to: string) => {
  const [allowance, setAllowance] = useState<number | null>(null);

  useEffect(() => {
    if (address && from && to) {
      getAllowance(address, from, to).then((res) => {
        setAllowance(Number(formatEther(res)));
      });
    }
  }, [address, from, to]);

  return allowance;
};
