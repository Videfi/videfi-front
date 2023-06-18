import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createUser } from "@/services/polybase/user.polybase.service";
import { useCollection, usePolybase } from "@polybase/react";
import { formatDataFetch } from "@/utils/polybase.util";
import { getWalletClient } from "@/lib/viem";

export default function SettingDisplayName() {
  const polybase = usePolybase();
  const [name, setName] = useState("");
  const { data: User } = useCollection(polybase.collection("User"));
  console.log(formatDataFetch(User));

  useEffect(() => {
    const getAdd = async () => {
      return await getWalletClient().getAddresses();
    }
    if(User) {
      const address = getAdd();
      const name = formatDataFetch(User).find((user: any) => user.address === address[0]);
      setName(name.name);
    }
  }, [User]);

  const handleConfirm: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();
    const address = await getWalletClient().getAddresses();
    console.log(address[0]);
    await createUser({ name, address: address[0] });
  };

  return (
    <div className="px-10 py-5">
      <div className="grid grid-cols-3	space-x-5">
        <form className="flex-1 dark space-y-3 text-gray-300">
          <div>
            <p className="text-gray-200 text-2xl">Display name</p>
            <p className="text-xs text-[#686887]">
              Your display name will be seen by friends. Have fun with it!
            </p>
          </div>
          <Input
            type="text"
            placeholder={"Please your name..."}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            className="bg-indigo-600 text-white hover:bg-indigo-700 w-full"
            onClick={handleConfirm}
          >
            Confirm
          </Button>
        </form>
      </div>
    </div>
  );
}
