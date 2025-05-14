"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SearchBar } from "@/components/marketplace/search-bar";
import { NFTCard } from "@/components/marketplace/nft-card";

// Mock data
const nfts = [
  {
    id: "magic-mushroom-0325",
    image: "/images/mushroom.svg",
    title: "Magic Mushroom 0325",
    creator: {
      name: "Shroomie",
      avatar: "/placeholder.svg",
    },
    price: "1.63",
    highestBid: "0.33",
  },
  {
    id: "happy-robot-032",
    image: "/images/robo.svg",
    title: "Happy Robot 032",
    creator: {
      name: "BeKind2Robots",
      avatar: "/placeholder.svg",
    },
    price: "1.63",
    highestBid: "0.33",
  },
  {
    id: "happy-robot-033",
    image: "/images/dog.svg",
    title: "Happy Robot 032",
    creator: {
      name: "BeKind2Robots",
      avatar: "/placeholder.svg",
    },
    price: "1.63",
    highestBid: "0.33",
  },
];

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeTab, setActiveTab] = useState("nfts");

  const filteredNFTs = nfts.filter(
    (nft) =>
      nft.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      nft.creator.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />

      <main className="container mx-auto px-4 pt-8 md:pt-16">
        <div className="max-w-3xl mx-auto mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Browse Marketplace
          </h1>
          <p className="text-gray-400">
            Browse through more than 50k NFTs on the NFT Marketplace.
          </p>
        </div>

        <div className="mb-8">
          <SearchBar onSearch={setSearchQuery} />
        </div>

        <Tabs defaultValue="nfts" className="">
          <TabsList className="bg-transparent border-b border-gray-100/10 w-full justify-around rounded-none h-auto p-0">
            <TabsTrigger
              value="nfts"
              onClick={() => setActiveTab("nfts")}
              className="px-6 py-4 data-[state=active]:bg-transparent font-semibold text-gray-100/50 data-[state=active]:text-gray-100 data-[state=active]:border-gray-100/50 border-none rounded-xl"
            >
              NFTs
              <span className="ml-2 px-2 py-1 bg-backgroundSecondary rounded-lg">
                308
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="collections"
              onClick={() => setActiveTab("collections")}
              className="px-6 py-4 data-[state=active]:bg-transparent font-semibold text-gray-100/50 data-[state=active]:text-gray-100 data-[state=active]:border-gray-100/50 border-none rounded-xl"
            >
              Collections
              <span className="ml-2 px-2 py-1 bg-backgroundSecondary rounded-lg">
                67
              </span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </main>
      <div className="grid grid-cols-1 p-5 sm:grid-cols-2 bg-backgroundSecondary border-b-2 border-background lg:grid-cols-3 gap-8">
        {filteredNFTs.map((nft) => (
          <NFTCard key={nft.id} {...nft} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
