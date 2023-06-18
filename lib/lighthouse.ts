import lighthouse from "@lighthouse-web3/sdk";

const LIGHT_HOUSE_KEY = process.env.NEXT_PUBLIC_LIGHT_HOUSE_KEY || "";

export const uploadFileToLighthouse = (
  file: File,
  uploadProgressCallback?: ((data: any) => void) | undefined
) => {
  console.log({ LIGHT_HOUSE_KEY });
  return lighthouse.upload([file], LIGHT_HOUSE_KEY, uploadProgressCallback);
};

export const getLighthouseIPFSUrl = (ipfsHash: string) => {
  const baseUrl = "https://gateway.lighthouse.storage/ipfs";
  return `${baseUrl}/${ipfsHash}`;
};
