import { Button } from "@/components/ui/button";
import { PictureInPictureIcon, PlusCircleIcon, UploadIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function CreateMemberShip() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-indigo-600 text-white hover:bg-indigo-700 text-lg w-[120px] mt-8">
          <PlusCircleIcon className="mr-2 text-white" size={25} />
          Create
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <p className="text-2xl">Create Membership</p>
        <div className="h-[1px] w-full bg-indigo-400" />
        <div className="w-full h-[200px] bg-vdf-black rounded-lg flex justify-center items-center text-gray-300 flex-col">
          <p className="text-gray-300">Select your membership thumbnail</p>
          <p className="text-sm text-gray-400">
            This picture will be used for your NFT Membership
          </p>
          <Button className="bg-gray-500 text-white hover:bg-gray-600 text-sm mt-5">
            <UploadIcon className="mr-3" />
            Select a Picture to Upload
          </Button>
        </div>
        <Input placeholder="Tier Name" />
        <Input placeholder="Duration" />
        <Input placeholder="Limit" />
        <Input placeholder="Price" />
        <Button className="bg-indigo-600 text-white hover:bg-indigo-700 w-full">
          Create
        </Button>
      </DialogContent>
    </Dialog>
  );
}
