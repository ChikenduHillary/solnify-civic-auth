"use client";

import { useParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArtistProfile } from "@/components/artist-profile";
import { NFTCard } from "@/components/nft-card";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useWallet } from "@solana/wallet-adapter-react";

// Mock data
const nfts = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PpxrUVDAzRE55i7BnUUHdYeoHfVHm0.png",
    title: "Distant Galaxy",
    creator: {
      name: "Animakid",
      avatar: "/placeholder.svg",
    },
    price: "1.63",
    highestBid: "0.33",
  },
];

export default function ArtistPage() {
  const params = useParams<{ userId: string }>();
  const userId = params.userId;
  const { publicKey } = useWallet();
  console.log("Public Key:", publicKey?.toString());
  console.log({ userId });

  // Fetch user data from Convex
  const dbUser = useQuery(api.users.getUser, { userId: userId || "" });

  if (!userId) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />

      <main>
        {dbUser ? (
          <ArtistProfile
            name={dbUser.username || "Unknown Artist"}
            avatar={dbUser.profilePic || "/placeholder.svg"}
            stats={{
              volume: "250",
              nftsSold: "500",
              followers: "1000",
            }}
            bio={dbUser.bio || "No bio available."}
            walletAddress={"wertwertwer"}
          />
        ) : (
          <div>Loading artist profile...</div>
        )}

        <div className="px-4 md:px-8 py-8">
          <Tabs defaultValue="created" className="w-full">
            <TabsList className="bg-background border-b border-gray-700 w-full justify-start rounded-none h-auto p-0">
              <TabsTrigger
                value="created"
                className="px-6 py-4 data-[state=active]:border-gray-100 rounded-none data-[state=active]:bg-transparent data-[state=active]:text-gray-100 data-[state=active]:border-b-2 focus:border-gray-100"
              >
                Created
                <span className="ml-2 px-2 py-1 bg-backgroundSecondary rounded-lg">
                  302
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="owned"
                className="px-6 py-4 data-[state=active]:border-gray-100 rounded-none data-[state=active]:bg-transparent data-[state=active]:text-gray-100 data-[state=active]:border-b-2 focus:border-gray-100"
              >
                Owned
                <span className="ml-2 px-2 py-1 bg-background rounded-lg">
                  67
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="collection"
                className="px-6 py-4 data-[state=active]:border-gray-100 rounded-none data-[state=active]:bg-transparent data-[state=active]:text-gray-100 data-[state=active]:border-b-2 focus:border-gray-100"
              >
                Collection
                <span className="ml-2 px-2 py-1 bg-background rounded-lg">
                  4
                </span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="created" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {nfts.map((nft, index) => (
                  <NFTCard key={index} {...nft} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="owned" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Owned NFTs */}
              </div>
            </TabsContent>
            <TabsContent value="collection" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Collection NFTs */}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
}
