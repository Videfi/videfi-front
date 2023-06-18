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
import { UploadIcon, VideoIcon } from "lucide-react";
import { storeImageNFT } from "@/lib/nftStorage";
import { parseEther } from "viem";
import { getPublicClient, getWalletClient } from "@/lib/viem";
import { VidefiContentDeployer } from "@/contracts/VidefiContentDeployer";
import { ADDRESSES } from "@/constants/addresses";
import { uploadFileToLighthouse } from "@/lib/lighthouse";
import { createVideoAll } from "@/services/polybase/video.polybase.service";

export default function CreateVideo() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState<string | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputImageRef = useRef<HTMLInputElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [limit, setLimit] = useState("1");
  const [price, setPrice] = useState("0");
  const [paymentToken, setPaymentToken] = useState(
    "0x2d2da8809eC403136c851d402FB94255326c28F3"
  );
  const [duration, setDuration] = useState(0); // seconds

  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Read video duration
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const updateDuration = () => {
        setDuration(video.duration);
      };

      video.addEventListener("loadedmetadata", updateDuration);

      return () => video.removeEventListener("loadedmetadata", updateDuration);
    }
  }, [selectedFile]);

  // Video input handlers
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

  // Image input handlers
  const handleClickImageUpload = () => {
    if (inputImageRef.current) {
      inputImageRef.current.click();
    }
  };

  const handleChangeImageFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("File type not supported. Please upload an image file.");
      } else {
        setSelectedImageFile(file);
        setImagePreviewUrl(URL.createObjectURL(file));
      }
    }

    if (event.target) event.target.value = "";
  };

  // Upload handlers
  const progressCallback = (progressData: any) => {
    const percentageDone =
      100 - +(progressData?.total / progressData?.uploaded)?.toFixed(2);
    setUploadProgress(percentageDone);
  };

  const handleUpload: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();
    setUploading(true);
    if (selectedFile && selectedImageFile) {
      const lighthouseResult = await uploadFileToLighthouse(
        selectedFile,
        progressCallback
      );

      const nftMetadata = {
        duration,
        videoCid: lighthouseResult.data.Hash,
      };

      const result = await storeImageNFT(
        selectedImageFile,
        title,
        description,
        nftMetadata
      );

      console.log({ result });

      const walletClient = getWalletClient();
      const publicClient = getPublicClient();

      const [account] = await walletClient.getAddresses();

      const { request } = await publicClient.simulateContract({
        account,
        address: ADDRESSES.goerli.VidefiContentDeployer,
        abi: VidefiContentDeployer.abi,
        functionName: "deploy",
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
        ],
      });

      const hash = await walletClient.writeContract(request);

      const transaction = await publicClient.waitForTransactionReceipt({
        hash,
      });

      console.log(transaction);

      if (transaction.status === "success") {
        const name = transaction.logs[0].address || "";
        createVideoAll({ address: name, duration: duration.toString(), index: +limit });
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
        <div className="w-[700px] py-8 bg-vdf-black rounded-lg flex justify-center items-center text-gray-300 flex-col">
          <div>
            {selectedFile ? (
              <div className="w-full">
                {videoPreviewUrl && (
                  <div>
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
                  </div>
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

          <div className="mb-4">
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

          {imagePreviewUrl && (
            <div>
              <img src={imagePreviewUrl} alt="Image preview" width="200" />
            </div>
          )}

          <div>
            <input
              id="upload-cover-image"
              type="file"
              ref={inputImageRef}
              className="hidden"
              accept="image/*"
              onChange={handleChangeImageFile}
            />
            <Button
              className="bg-gray-500 text-white hover:bg-gray-600 text-sm mt-5"
              onClick={handleClickImageUpload}
            >
              <UploadIcon className="mr-3" />
              Select Video Cover Image to Upload
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
            className="bg-indigo-600 text-white hover:bg-indigo-700 w-full"
            onClick={handleUpload}
          >
            {uploading ? (
              <>
                <span>Uploading ({uploadProgress}/100%)</span>
              </>
            ) : (
              <>
                <UploadIcon className="mr-3" size={17} />
                Upload
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
