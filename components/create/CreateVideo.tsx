import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { LoaderIcon, UploadIcon, VideoIcon } from "lucide-react";
import { dataURLtoFile } from "@/lib/fileUtils";
import { storeVideoNFT } from "@/lib/nftStorage";
import { parseEther } from "viem";
import { VidefiContent } from "@/contracts/VidefiContent";
import { getPublicClient, getWalletClient } from "@/lib/viem";

export default function CreateVideo() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState<string | null>(null);
  const [imagePreviewFile, setImagePrevieFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [limit, setLimit] = useState("1");
  const [price, setPrice] = useState("0");
  const [paymentToken, setPaymentToken] = useState("");

  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (!videoRef.current || !selectedFile) {
      return;
    }

    const handleLoadedData = () => {
      if (!videoRef.current) {
        return;
      }

      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const url = canvas.toDataURL();
        const imageFile = dataURLtoFile(
          url,
          `${selectedFile?.name}_thumbnail.png`
        );
        setImagePrevieFile(imageFile);
      }
    };

    videoRef.current.addEventListener("loadeddata", handleLoadedData);

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("loadeddata", handleLoadedData);
      }
    };
  }, [selectedFile]);

  const handleClickUpload = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      console.log(file.type);
      if (!file.type.startsWith("video/")) {
        alert("File type not supported. Please upload a video file.");
      } else {
        console.log("Update state");
        setSelectedFile(file);
        setVideoPreviewUrl(URL.createObjectURL(file));
      }
    }

    if (event.target) event.target.value = "";
  };

  const handleUpload: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();
    setUploading(true);
    if (selectedFile && imagePreviewFile) {
      const result = await storeVideoNFT(
        selectedFile,
        imagePreviewFile,
        title,
        description
      );

      const walletClient = getWalletClient();
      const [account] = await walletClient.getAddresses();

      const hash = await walletClient.deployContract({
        abi: VidefiContent.abi,
        account,
        args: [
          title,
          title.slice(0, 5).toUpperCase(),
          result.ipnft.toString(),
          BigInt(limit),
          paymentToken as `0x${string}`,
          parseEther(`${+price}`),
          account,
          false,
          [],
          [],
          account,
        ],
        bytecode: VidefiContent.bytecode.object as `0x${string}`,
      });

      const publicClient = getPublicClient();
      const transaction = await publicClient.waitForTransactionReceipt({
        hash,
      });

      if (transaction.status === "success") {
        alert("Create content success");
      } else {
        alert("Transaction reverted");
      }
    }

    setUploading(false);
  };

  return (
    <div className="px-10 py-5">
      <div className="flex space-x-5">
        <div className="w-[700px] h-[470px] bg-vdf-black rounded-lg flex justify-center items-center text-gray-300 flex-col">
          <div>
            {selectedFile ? (
              <div className="w-full">
                {videoPreviewUrl && (
                  <video
                    key={selectedFile?.lastModified}
                    width="560"
                    height="240"
                    controls
                    ref={videoRef}
                  >
                    <source src={videoPreviewUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            ) : (
              <div className="flex justify-center items-center flex-col">
                <VideoIcon size={100} />
                <p className="text-gray-300">Select video file to upload</p>
                <p className="text-sm text-gray-400">
                  Your video will be published after you press upload
                </p>
              </div>
            )}
          </div>

          <div>
            <input
              id="upload-video"
              type="file"
              ref={inputRef}
              className="hidden"
              accept="video/mp4,video/webm,video/quicktime"
              onChange={handleFileChange}
            />
            <Button
              className="bg-gray-500 text-white hover:bg-gray-600 text-sm mt-5"
              onClick={handleClickUpload}
            >
              <UploadIcon className="mr-3" />
              Select Video File to Upload
            </Button>
          </div>
        </div>
        <form className="flex-1 dark space-y-3 text-gray-300">
          <p className="text-gray-200 text-2xl">Details</p>
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Type your description here."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Limit records"
            onChange={(e) => setLimit(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Payment token address"
            value={paymentToken}
            onChange={(e) => setPaymentToken(e.target.value)}
          />
          <Select defaultValue="0x0">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Access Control" />
            </SelectTrigger>
            <SelectContent className="dark">
              <SelectGroup>
                <SelectItem value="0x0">Free - Public</SelectItem>
                {/* <SelectLabel>NFT Access</SelectLabel> */}
                <SelectItem value="0x1">GOLD NFT</SelectItem>
                <SelectItem value="0x2">SILVER NFT</SelectItem>
                <SelectItem value="0x3">BRONZE NFT</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button
            className="bg-indigo-600 text-white hover:bg-indigo-700 w-full text-lg"
            onClick={handleUpload}
          >
            {uploading ? (
              <>
                <LoaderIcon className="mr-3" />
              </>
            ) : (
              <>
                <UploadIcon className="mr-3" />
                Upload
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
