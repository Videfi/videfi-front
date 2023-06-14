import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import lighthouse from "@lighthouse-web3/sdk";
import { useWalletClient } from "wagmi";
import { signMessage } from "@wagmi/core";
import POCLayout from "@/components/poc/POCLayout";

export default function Upload() {
  const { data: walletClient } = useWalletClient();

  const progressCallback = (progressData: any) => {
    let percentageDone =
      100 - +(progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
  };

  const uploadFile = async (file: any) => {
    const output = await lighthouse.upload(
      file,
      "bf592c78.6d5a926fcdc147098e5d8f831ade8ce0",
      progressCallback
    );
    console.log("File Status:", output);
    console.log("https://gateway.lighthouse.storage/ipfs/" + output.data.Hash);
  };

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

  const uploadFileEncrypted = async (file: any) => {
    const sig = await encryptionSignature();
    if (!sig) return;
    console.log({ sig });
    const response = await lighthouse.uploadEncrypted(
      file,
      "bf592c78.6d5a926fcdc147098e5d8f831ade8ce0",
      sig.publicKey as unknown as string,
      sig.signedMessage as unknown as string,
      progressCallback
    );
    console.log(response);
  };

  return (
    <POCLayout>
      <div className={`flex ${inter.className}`}>
        <div>
          <p>Upload: Normal</p>
          <input onChange={(e) => uploadFile(e.target.files)} type="file" />
        </div>
        <div>
          <p>Upload: Encrypted</p>
          <input
            onChange={(e) => uploadFileEncrypted(e.target.files)}
            type="file"
          />
        </div>
      </div>
    </POCLayout>
  );
}
