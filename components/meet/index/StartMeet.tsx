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
import { useEventListener, useHuddle01 } from "@huddle01/react";
import { useAccount } from "wagmi";
import axios from "axios";
import { HuddleIframe, useEventListner } from "@huddle01/iframe";
import {
  useAudio,
  useLobby,
  useMeetingMachine,
  usePeers,
  useRoom,
  useVideo,
  useRecording,
} from "@huddle01/react/hooks";

import { useDisplayName } from "@huddle01/react/app-utils";
import { Audio, Video } from "@huddle01/react/components";
import { iframeApi } from "@huddle01/iframe";

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
  const { address: userWalletAddress } = useAccount();
  const [roomId, setRoomId] = useState<string>("");
  const [meetingTitle, setMeetingTitle] = useState<string>("");
  const [meetingLink, setMeetingLink] = useState<string>("");
  const [joinRoomId, setJoinRoomId] = useState<string>("");

  React.useEffect(() => {
    setIsMounted(true);
    initialize(process.env.NEXT_PUBLIC_HUDDLE_PROJECT_ID as string);
  }, []);
  const { joinLobby } = useLobby();
  useEventListner("lobby:initialized", () => {
    iframeApi.initialize({
      redirectUrlOnLeave: window.location.href,
      wallets: ["*"],
    });
  });

  return (
    <>
      {isMounted && !roomId && (
        <div className="w-full px-10 py-5">
          <p className="text-gray-100 text-2xl">Create a new meeting</p>
        </div>
      )}
      {isMounted && !userWalletAddress && (
        <div className="px-10 py-5">
          <div className="flex space-x-5">
            <p className="text-gray-200 text-2xl">Please login first</p>
          </div>
        </div>
      )}
      {isMounted && !isInitialized && (
        <div className="px-10 py-5">
          <div className="flex space-x-5">
            <p className="text-gray-200 text-2xl">Initializing Huddle01</p>
          </div>
        </div>
      )}
      {isMounted && userWalletAddress && isInitialized && !roomId && (
        <div className="px-10 py-5">
          <div className="flex space-x-5">
            <form className="flex-1 dark space-y-3 text-gray-300">
              <p className="text-gray-200 text-2xl">Meeting title</p>
              <Input
                type="text"
                placeholder="Title"
                value={meetingTitle}
                onChange={(e) => setMeetingTitle(e.target.value)}
              />
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
                type="button"
                disabled={!meetingTitle}
                onClick={async () => {
                  const response = await axios.post(
                    "https://api.huddle01.com/api/v1/create-iframe-room",
                    {
                      title: "Huddle01-Test",
                      roomLocked: false,
                    },
                    {
                      headers: {
                        "Content-Type": "application/json",
                        "x-api-key": process.env.NEXT_PUBLIC_HUDDLE_API_KEY,
                      },
                    }
                  );
                  console.log("response.data.data.meetingLink", response.data);
                  const roomId = response.data.data.roomId;
                  const meetingLink = response.data.data.meetingLink;
                  setRoomId(roomId);
                  setMeetingLink(meetingLink);
                }}
                className="bg-indigo-600 text-white hover:bg-indigo-700 w-full text-lg"
              >
                Create
              </Button>
            </form>
          </div>
        </div>
      )}

      {isMounted && userWalletAddress && isInitialized && roomId && (
        <div>
          {/* <p>iframe link {`https://iframe.huddle01.com/${roomId}`} </p>
          <p>meetingLink {meetingLink}</p> */}
          <p>room id: {roomId}</p>
          <HuddleIframe
            roomUrl={`https://iframe.huddle01.com/${roomId}`}
            // roomUrl={`https://iframe.huddle01.com`}
            // roomUrl={meetingLink}
            className="w-full aspect-video"
          />
        </div>
      )}
      <hr />
      {!roomId && (
        <div className="px-10 py-5">
          <div className="flex space-x-5">
            <form className="flex-1 dark space-y-3 text-gray-300">
              <p className="text-gray-200 text-2xl">Join a meeting</p>
              <p className="text-gray-200 text-xl">Room Id</p>
              <Input
                type="text"
                placeholder="Title"
                value={joinRoomId}
                onChange={(e) => setJoinRoomId(e.target.value)}
              />
              <Button
                type="button"
                onClick={async () => {
                  setRoomId(joinRoomId);
                }}
                className="bg-indigo-600 text-white hover:bg-indigo-700 w-full text-lg pt-3"
              >
                Join
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
