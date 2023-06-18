import { Button } from "@/components/ui/button";
import {
  PictureInPictureIcon,
  PlusCircleIcon,
  UploadIcon,
  LoaderIcon,
} from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { storeImageNFT } from "@/lib/nftStorage";
import { getPublicClient, getWalletClient } from "@/lib/viem";
import { getContract } from "viem";
import { ADDRESSES } from "@/constants/addresses";
import { MemberCardDeployer } from "@/contracts/MemberCardDeployer";
import { useAccount } from "wagmi";
import { set } from "react-hook-form";

export function CreateMemberShip() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [tierName, setTierName] = useState("");
  const [duration, setDuration] = useState("");
  const [limitAmount, setLimitAmount] = useState("");
  const [price, setPrice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [paymentToken, setPaymentToken] = useState("");
  const [beneficiary, setBeneficiary] = useState("");
  const { address: userWalletAddress } = useAccount();
  const [open, setOpen] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      {domLoaded && (
        <Dialog open={open} onOpenChange={setOpen}>
          {userWalletAddress && (
            <DialogTrigger asChild>
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700 text-lg w-[120px] mt-8">
                <PlusCircleIcon className="mr-2 text-white" size={25} />
                Create
              </Button>
            </DialogTrigger>
          )}
          <DialogContent className="sm:max-w-[425px]">
            <p className="text-2xl">Create Membership</p>
            <div className="h-[1px] w-full bg-indigo-400" />
            <input
              id="upload-video"
              type="file"
              ref={inputRef}
              className="hidden"
              accept=".png, .jpg, .jpeg"
              onChange={(e) => {
                if (e.target?.files?.[0]) {
                  setSelectedFile(e.target?.files?.[0]);
                  setImagePreviewUrl(URL.createObjectURL(e.target?.files?.[0]));
                }
              }}
            />
            {!imagePreviewUrl && (
              <div className="w-full h-[200px] bg-vdf-black rounded-lg flex justify-center items-center text-gray-300 flex-col">
                <p className="text-gray-300">
                  Select your membership thumbnail
                </p>
                <p className="text-sm text-gray-400">
                  This picture will be used for your NFT Membership
                </p>

                <Button
                  onClick={() => {
                    if (inputRef.current) {
                      inputRef.current.click();
                    }
                  }}
                  className="bg-gray-500 text-white hover:bg-gray-600 text-sm mt-5"
                >
                  <UploadIcon className="mr-3" />
                  Select a Picture to Upload
                </Button>
              </div>
            )}
            {imagePreviewUrl && (
              <img
                onClick={() => {
                  if (inputRef.current) {
                    inputRef.current.click();
                  }
                }}
                src={imagePreviewUrl}
                alt="preview"
                className="cursor-pointer"
              />
            )}
            <Input
              placeholder="Tier Name"
              value={tierName}
              onChange={(e) => setTierName(e.target.value)}
            />
            <Input
              placeholder="Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
            <Input
              placeholder="Limit"
              value={limitAmount}
              onChange={(e) => setLimitAmount(e.target.value)}
            />
            <Input
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Input
              placeholder="Payment Token Address"
              value={paymentToken}
              onChange={(e) => setPaymentToken(e.target.value)}
            />
            <Input
              placeholder="Beneficiary (not required)"
              value={beneficiary}
              onChange={(e) => setBeneficiary(e.target.value)}
            />
            <Button
              onClick={async () => {
                setIsLoading(true);
                if (!selectedFile) return;
                const storeImageResult = await storeImageNFT(
                  selectedFile as File,
                  tierName,
                  tierName,
                  {}
                );
                const walletClient = getWalletClient();
                const [account] = await walletClient.getAddresses();
                if (!beneficiary) {
                  const { request } = await getPublicClient().simulateContract({
                    account,
                    address: ADDRESSES.goerli.MemberCardDeployer,
                    abi: MemberCardDeployer.abi,
                    functionName: "deploy",
                    args: [
                      tierName,
                      tierName,
                      storeImageResult.url,
                      BigInt(duration),
                      BigInt(limitAmount),
                      paymentToken as `0x${string}`,
                      BigInt(price),
                      "0x0000000000000000000000000000000000000000",
                      false,
                    ],
                  });
                  await walletClient.writeContract(request);
                }
                if (beneficiary) {
                  const { request } = await getPublicClient().simulateContract({
                    account,
                    address: ADDRESSES.goerli.MemberCardDeployer,
                    abi: MemberCardDeployer.abi,
                    functionName: "deploy",
                    args: [
                      tierName,
                      tierName,
                      storeImageResult.url,
                      BigInt(duration),
                      BigInt(limitAmount),
                      paymentToken as `0x${string}`,
                      BigInt(price),
                      beneficiary as `0x${string}`,
                      false,
                    ],
                  });
                  await walletClient.writeContract(request);
                }
                setOpen(false);
                setIsLoading(false);
              }}
              className="bg-indigo-600 text-white hover:bg-indigo-700 w-full"
              disabled={
                isLoading ||
                !tierName ||
                !duration ||
                !limitAmount ||
                !price ||
                !selectedFile ||
                !paymentToken
              }
            >
              {isLoading ? <LoaderIcon className="mr-3" /> : "Create"}
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
