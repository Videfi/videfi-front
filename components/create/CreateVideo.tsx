import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { UploadIcon, VideoIcon } from "lucide-react";

export default function CreateVideo() {
  return (
    <div className="px-10 py-5">
      <div className="flex space-x-5">
        <div className="w-[700px] h-[470px] bg-vdf-black rounded-lg flex justify-center items-center text-gray-300 flex-col">
          <VideoIcon size={100} />
          <p className="text-gray-300">Select video file to upload</p>
          <p className="text-sm text-gray-400">
            Your video will be published after you press upload
          </p>
          <Button className="bg-gray-500 text-white hover:bg-gray-600 text-sm mt-5">
            <UploadIcon className="mr-3" />
            Select Video File to Upload
          </Button>
        </div>
        <form className="flex-1 dark space-y-3 text-gray-300">
          <p className="text-gray-200 text-2xl">Details</p>
          <Input type="text" placeholder="Title" />
          <Textarea placeholder="Type your description here." />
          <Input type="number" placeholder="Limit Records" />
          <Input type="number" placeholder="Price" />
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
          <Button className="bg-indigo-600 text-white hover:bg-indigo-700 w-full text-lg">
            <UploadIcon className="mr-3" />
            Upload
          </Button>
        </form>
      </div>
    </div>
  );
}
