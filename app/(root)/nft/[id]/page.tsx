import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Globe, Eye } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PriceInfo } from "@/components/price-info";
import { RelatedNFTs } from "@/components/related-nfts";

// Mock data for the example
const nftData = {
  title: "The Orbitians",
  image: "/images/space.svg",
  creator: {
    name: "Orbitian",
    avatar: "",
  },
  description: `
    The Orbitians is a collection of 10,000 unique NFTs on the Solana blockchain.

    There are some people who call them Orbitians, but they have been here longer than us. They are a peaceful race of interdimensional beings who have been living in orbit.

    The Holders are called Orbiters, because of their ability to orbit and protect the growth of their Orbitians. They are a peaceful race that has been here longer than us.

    They are here to help us grow and evolve, and they want to make sure we don't destroy ourselves in the process.
  `,
  price: "1.5",
  highestBid: "0.95",
  endingIn: {
    hours: 12,
    minutes: 30,
    seconds: 25,
  },
  tags: ["ANIMATION", "ILLUSTRATION", "MOON", "SPACE"],
};

const relatedNFTs = [
  {
    image: "/images/dog.svg",
    title: "Distant Galaxy",
    creator: {
      name: "Orbitian",
      avatar: "/placeholder.svg",
    },
    price: "1.63",
    highestBid: "0.33",
  },
];

export default function NFTPage() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />

      <main className="mx-auto w-full py-8">
        <div className="w-full">
          {/* NFT Image */}
          <div className="overflow-hidden w-full">
            <Image
              src={"/images/space.svg"}
              alt={nftData.title}
              width={800}
              height={800}
              className="w-full"
            />
          </div>

          {/* NFT Info */}
          <div className="container p-10 space-y-8 w-full">
            <div className="flex max-md:flex-col justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-4">{nftData.title}</h1>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">1.5K views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">0 in stock</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-8">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={nftData.creator.avatar} />
                  </Avatar>
                  <div>
                    <p className="text-gray-400 text-sm">Created By</p>
                    <p className="font-semibold">{nftData.creator.name}</p>
                  </div>
                </div>
              </div>
              <PriceInfo
                price={nftData.price}
                highestBid={nftData.highestBid}
                endingIn={nftData.endingIn}
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Description</h2>
              <p className="text-gray-400 whitespace-pre-line">
                {nftData.description}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {nftData.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    className="bg-backgroundSecondary hover:bg-[#2a2a3c] text-white"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 p-10">
          <RelatedNFTs artistName={nftData.creator.name} nfts={relatedNFTs} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
