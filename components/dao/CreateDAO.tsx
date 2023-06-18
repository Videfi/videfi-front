import { Button } from "@/components/ui/button";
import { PlusCircleIcon, UploadIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import Image from "next/image";
import { getPublicClient, getWalletClient } from "@/lib/viem";
import { getAddress } from "viem";
import { storeImageNFT } from "@/lib/nftStorage";
import { ADDRESSES } from "@/constants/addresses";
import { VidefiDAODeployer } from "@/contracts/VidefiDAODeployer";

export function CreateDAO() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [daoName, setDaoName] = useState("");
  const [governanceTokenAddress, setGovernanceTokenAddress] = useState("");
  const [rewardTokenAddress, setRewardTokenAddress] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log({
      daoName,
      governanceTokenAddress,
      rewardTokenAddress,
      selectedFile,
    });
    if (!selectedFile) {
      return;
    }

    const result = await storeImageNFT(
      selectedFile,
      daoName,
      `Governacne Community: for ${daoName} | Reward: ${rewardTokenAddress}`,
      { Governance: governanceTokenAddress, Reward: rewardTokenAddress }
    );

    console.log(result);

    const walletClient = getWalletClient();
    const publicClient = getPublicClient();
    const [account] = await walletClient.getAddresses();

    const { request } = await publicClient.simulateContract({
      account,
      address: ADDRESSES.goerli.VidefiContentDeployer,
      abi: VidefiDAODeployer.abi,
      functionName: "deploy",
      args: [
        daoName,
        result.ipnft.toString(),
        governanceTokenAddress as any,
        rewardTokenAddress as any,
      ],
    });

    const hash = await walletClient.writeContract(request);

    const transaction = await publicClient.waitForTransactionReceipt({
      hash,
    });

    if (transaction.status === "success") {
      alert("Create content success");
    } else {
      alert("Transaction reverted");
    }

    setIsLoading(false);
  };

  const handleImageUploaded = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setSelectedFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleClickUpload = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-indigo-600 text-white hover:bg-indigo-700 text-lg w-[120px] mt-8">
          <PlusCircleIcon className="mr-2 text-white" size={25} />
          Create
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form className="space-y-3" onSubmit={handleFormSubmit}>
          <p className="text-2xl">Create DAO</p>
          <div className="h-[1px] w-full bg-indigo-400" />
          <div className="w-full h-[200px] bg-vdf-black rounded-lg flex justify-center items-center text-gray-300 flex-col">
            {selectedFile ? (
              <div className="">
                <Image
                  src={URL.createObjectURL(selectedFile)}
                  alt="UploadedImage"
                  className="rounded-lg"
                  width={370}
                  height={190}
                />
              </div>
            ) : (
              <div className="flex justify-center items-center flex-col">
                <p className="text-gray-300">Select your DAO Image</p>
                <p className="text-sm text-gray-400">
                  This picture will be used for your DAO Community
                </p>
                <div>
                  <input
                    required
                    id="upload-image"
                    type="file"
                    ref={inputRef}
                    className="hidden"
                    onChange={handleImageUploaded}
                  />
                  <Button
                    type="button"
                    className="bg-gray-500 text-white hover:bg-gray-600 text-sm mt-5"
                    onClick={handleClickUpload}
                  >
                    <UploadIcon className="mr-3" />
                    Select a Picture to Upload
                  </Button>
                </div>
              </div>
            )}
          </div>
          <Input
            required
            placeholder="DAO Name"
            value={daoName}
            onChange={(e) => setDaoName(e.target.value)}
          />
          <Input
            required
            placeholder="Governance Token Address"
            value={governanceTokenAddress}
            onChange={(e) => setGovernanceTokenAddress(e.target.value)}
          />
          <Input
            required
            placeholder="Reward Token Address"
            value={rewardTokenAddress}
            onChange={(e) => setRewardTokenAddress(e.target.value)}
          />
          <Button
            disabled={isLoading}
            className="bg-indigo-600 text-white hover:bg-indigo-700 w-full"
          >
            {isLoading ? <div className="animate-spin">V</div> : "Create"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
