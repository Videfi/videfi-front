import { getTotalSupply } from "@/services/contracts/videfiContent";
import { useEffect, useState } from "react";

export const useTotalSupply = (address: string) => {
  const [totalSupply, setTotalSupply] = useState<number | null>(null);

  useEffect(() => {
    if (address) {
      getTotalSupply(address).then((res) => {
        setTotalSupply(Number(res));
      });
    }
  }, [address]);

  return totalSupply;
};
