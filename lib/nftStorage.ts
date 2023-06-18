// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { NFTStorage, File } from 'nft.storage'

// Paste your NFT.Storage API key into the quotes:
const NFT_STORAGE_KEY = process.env.NEXT_PUBLIC_NFT_STORAGE_API_KEY || "";

export async function storeImageNFT(image: File, name: string, description: string, metadata: any) {
    // create a new NFTStorage client using our API key
    const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })

    // call client.store, passing in the image & metadata
    return nftstorage.store({
        image,
        name,
        description,
        ...metadata
    })
}
