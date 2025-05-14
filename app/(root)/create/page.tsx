"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { UploadArea } from "@/components/create-nft/upload-area";
import { Info, DollarSign, Globe } from "lucide-react";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { mplCore } from "@metaplex-foundation/mpl-core";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";

export default function CreateNFTPage() {
  const [, setFile] = useState<File | null>(null);
  // const [imageFile, setImageFile] = useState<File | null>(null);
  // const [imageUri] = await umi.uploader.upload([imageFile])

  const wallet = useWallet();
  const { connection } = useConnection();
  const umi = createUmi(connection)
    .use(walletAdapterIdentity(wallet))
    .use(mplCore());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Create New NFT
            </h1>
            <p className="text-gray-400">
              Upload your work (image, video, audio, or 3D art), add a title and
              description, and customize your NFT with properties, stats, and
              unlockable content.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Upload Section */}
            <div className="space-y-4">
              <Label className="text-lg">Upload file</Label>
              <UploadArea onFileSelect={setFile} />
            </div>

            {/* NFT Details */}
            <div className="space-y-6">
              <div className="space-y-4">
                <Label htmlFor="name" className="text-lg">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Item name"
                  className="bg-[#242435] border-gray-700 focus:border-purple-500"
                />
              </div>

              <div className="space-y-4">
                <Label htmlFor="description" className="text-lg">
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Provide a detailed description of your item"
                  className="bg-[#242435] border-gray-700 focus:border-purple-500 min-h-[150px]"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Label htmlFor="price" className="text-lg">
                    Price
                  </Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      placeholder="Enter price for one item"
                      className="bg-[#242435] border-gray-700 focus:border-purple-500 pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label htmlFor="royalties" className="text-lg">
                    Royalties
                  </Label>
                  <div className="relative">
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      %
                    </span>
                    <Input
                      id="royalties"
                      type="number"
                      min="0"
                      max="50"
                      placeholder="Suggested: 0%, 10%, 20%, 30%"
                      className="bg-[#242435] border-gray-700 focus:border-purple-500"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Label htmlFor="collection" className="text-lg">
                  Collection
                </Label>
                <div className="flex items-center gap-4 p-4 bg-[#242435] rounded-lg border border-gray-700">
                  <Globe className="w-10 h-10 text-purple-600" />
                  <div>
                    <h3 className="font-semibold">Create Collection</h3>
                    <p className="text-sm text-gray-400">
                      Group your NFTs into a collection
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="flex gap-4 p-4 bg-purple-600/10 rounded-lg border border-purple-600/20">
              <Info className="w-6 h-6 text-purple-600 flex-shrink-0" />
              <p className="text-sm text-purple-100">
                Once your item is minted, you will not be able to change any of
                its information.
              </p>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700"
              size="lg"
            >
              Create NFT
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
