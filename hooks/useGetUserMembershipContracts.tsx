import { MembershipContractType } from "@/types/membershipContract.type";
import { useEffect, useState } from "react";

export default function useGetUserMembershipContracts() {
  const [membershipContracts, setMembershipContracts] = useState<
    MembershipContractType[]
  >([]);

  useEffect(() => {
    async function getMembershipContractAddresses() {
      setTimeout(() => {
        setMembershipContracts([
          {
            contractAddress: "0x0",
            name: "BRONZE NFT",
          },
          {
            contractAddress: "0x1",
            name: "GOLD NFT",
          },
        ]);
      }, 3000);
    }

    getMembershipContractAddresses();
  }, []);

  return membershipContracts;
}
