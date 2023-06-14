import POCLayout from "@/components/poc/POCLayout";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import lighthouse from "@lighthouse-web3/sdk";
import { useWalletClient } from "wagmi";
import { signMessage } from "@wagmi/core";

export default function ViewEn() {
  const { data: walletClient } = useWalletClient();
  const { register, handleSubmit } = useForm();
  const [url, setUrl] = useState<null | string>(null);
  const onSubmit = (data: any) => decrypt(data.cid);

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

  const decrypt = async (cid: string) => {
    const sig = await encryptionSignature();
    if (!sig) return;

    const keyObject = await lighthouse.fetchEncryptionKey(
      cid,
      sig.publicKey,
      sig.signedMessage
    );

    if (!keyObject.data.key) return;

    const fileType = "video/quicktime";
    const decrypted = await lighthouse.decryptFile(
      cid,
      keyObject.data.key,
      fileType
    );

    const urlX = URL.createObjectURL(decrypted);
    setUrl(urlX);
  };

  return (
    <POCLayout>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex m-3 space-x-3">
          <Input
            {...register("cid", { required: true })}
            type="text"
            placeholder="CID"
          />
          <Button type="submit">View</Button>
        </form>
        {url && (
          <video controls autoPlay>
            <source src={`${url}`} type="video/webm" />
          </video>
        )}
      </div>
    </POCLayout>
  );
}
