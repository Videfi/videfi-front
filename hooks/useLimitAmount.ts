import { getLimitAmount } from "@/services/contracts/videfiContent";
import { useEffect, useState } from "react";

export const useLimitAmount = (address: string) => {
  const [limitAmount, setLimitAmount] = useState<number | null>(null);

  useEffect(() => {
    if (address) {
      getLimitAmount(address).then((res) => {
        setLimitAmount(Number(res));
      });
    }
  }, [address]);

  return limitAmount;
};
