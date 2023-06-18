import axios from "axios";

const BASE_URL = `https://ipfs.io/ipfs`;

export const fetchMetadataFromIPFS = (ipfsHash: string) => {
  return axios
    .get(`${BASE_URL}/${ipfsHash}/metadata.json`)
    .then((res) => res.data);
};

export const fetchFromIPFS = (ipfsHash: string) => {
  return axios.get(`${BASE_URL}/${ipfsHash}`).then((res) => res.data);
};

export const replaceIPFSUrl = (ipfsUrl: string) => {
  return ipfsUrl.replace("ipfs://", BASE_URL + "/");
};
