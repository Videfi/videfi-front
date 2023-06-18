import React, { useEffect, useState } from "react";
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
import useGetUserMembershipContracts from "@/hooks/useGetUserMembershipContracts";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { MembershipContractType } from "@/types/membershipContract.type";
import { useHuddle01 } from "@huddle01/react";

interface MembershipContractWithIsCheckType extends MembershipContractType {
  isCheck: boolean;
}

export default function StartMeet() {
  const membershipContracts = useGetUserMembershipContracts();
  const [membershipContractsWithIsCheck, setMembershipContractsWithIsCheck] =
    useState<MembershipContractWithIsCheckType[]>([]);
  useEffect(() => {
    if (
      membershipContracts.length > 0 &&
      membershipContractsWithIsCheck.length === 0
    ) {
      setMembershipContractsWithIsCheck(
        membershipContracts.map((membershipContract) => ({
          ...membershipContract,
          isCheck: false,
        }))
      );
    }
  }, [membershipContracts, membershipContractsWithIsCheck]);
  const [isMounted, setIsMounted] = useState(false);
  const { initialize, isInitialized } = useHuddle01();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <div className="px-10 py-5">
          <div className="flex space-x-5">
            <form className="flex-1 dark space-y-3 text-gray-300">
              <p className="text-gray-200 text-2xl">Meeting title</p>
              <Input type="text" placeholder="Title" />
              <div className="py-3">
                <p className="text-gray-200 text-xl mb-3">Membership access</p>
                <form>
                  {membershipContractsWithIsCheck.map(
                    (membershipContract, index) => (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "10px",
                        }}
                        key={`checkbox${index}`}
                      >
                        <Checkbox.Root
                          className="CheckboxRoot"
                          checked={membershipContract.isCheck}
                          id={`c${index}`}
                          onCheckedChange={(e) => {
                            setMembershipContractsWithIsCheck(
                              membershipContractsWithIsCheck.map(
                                (membershipContract, i) => {
                                  if (i === index) {
                                    return {
                                      ...membershipContract,
                                      isCheck: e as boolean,
                                    };
                                  }
                                  return membershipContract;
                                }
                              )
                            );
                          }}
                        >
                          <Checkbox.Indicator className="CheckboxIndicator">
                            <CheckIcon />
                          </Checkbox.Indicator>
                        </Checkbox.Root>
                        <label className="Label" htmlFor={`c${index}`}>
                          {membershipContract.name}
                        </label>
                      </div>
                    )
                  )}
                </form>
              </div>
              <Button
                onClick={() => {
                  initialize("YR9bN_je2O1tVcxAd8dBg9ZMTwf44qGa");
                }}
                className="bg-indigo-600 text-white hover:bg-indigo-700 w-full text-lg"
              >
                Start
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
