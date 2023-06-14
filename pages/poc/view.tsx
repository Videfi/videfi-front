import POCLayout from "@/components/poc/POCLayout";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function View() {
  const { register, handleSubmit } = useForm();
  const [cid, setCid] = useState<null | string>(null);
  const onSubmit = (data: any) => setCid(data.cid);

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
        {cid && (
          <video controls autoPlay>
            <source
              src={`https://gateway.lighthouse.storage/ipfs/${cid}`}
              type="video/webm"
            />
          </video>
        )}
      </div>
    </POCLayout>
  );
}
