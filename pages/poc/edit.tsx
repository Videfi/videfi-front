import POCLayout from "@/components/poc/POCLayout";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import lighthouse from "@lighthouse-web3/sdk";
import { useWalletClient } from "wagmi";
import { signMessage } from "@wagmi/core";

export default function Edit() {
  const { data: walletClient } = useWalletClient();
  const { register, handleSubmit } = useForm();

  const encryptionSignature = async () => {
    const address = await walletClient?.getAddresses();
    if (!address) return;
    const messageRequested = (await lighthouse.getAuthMessage(address[0])).data
      .message;
    const signedMessage = await signMessage({ message: messageRequested });
    return {
      signedMessage: signedMessage,
      publicKey: address[0],
    };
  };

  const editCondition = async (cid: string, nftAddr: string) => {
    const conditions = [
      {
        id: 1,
        chain: "Mumbai",
        method: "balanceOf",
        standardContractType: "ERC721",
        contractAddress: nftAddr,
        returnValueTest: { comparator: ">=", value: "1" },
        parameters: [":userAddress"],
      },
    ];

    const aggregator = "([1])";
    const sig = await encryptionSignature();
    if (!sig) return;

    const response = await lighthouse.applyAccessCondition(
      sig.publicKey,
      cid,
      sig.signedMessage,
      conditions,
      aggregator
    );

    console.log(response);
  };

  const onSubmit = (data: any) => editCondition(data.cid, data.nftAddr);

  return (
    <POCLayout>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex m-3 space-x-3">
          <Input
            {...register("nftAddr", { required: true })}
            type="text"
            placeholder="NFT Address"
          />
          <Input
            {...register("cid", { required: true })}
            type="text"
            placeholder="CID"
          />
          <Button type="submit">Edit</Button>
        </form>
      </div>
    </POCLayout>
  );
}
