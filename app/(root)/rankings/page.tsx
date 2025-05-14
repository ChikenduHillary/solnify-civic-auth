"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CreatorRow } from "@/components/rankings/creator-row";

const timeFilters = ["Today", "This Week", "This Month", "All Time"] as const;
type TimeFilter = (typeof timeFilters)[number];

const creators = [
  {
    rank: 1,
    name: "Jaydon Ekstrom Bothman",
    avatar: "/placeholder.svg",
    change: "+1.41%",
    nftsSold: "602",
    volume: "12.4",
  },
  {
    rank: 2,
    name: "Ruben Carder",
    avatar: "/placeholder.svg",
    change: "+1.41%",
    nftsSold: "602",
    volume: "12.4",
  },
  {
    rank: 3,
    name: "Alfredo Septimus",
    avatar: "/placeholder.svg",
    change: "+1.41%",
    nftsSold: "602",
    volume: "12.4",
  },
  {
    rank: 4,
    name: "Davis Franci",
    avatar: "/placeholder.svg",
    change: "+1.41%",
    nftsSold: "602",
    volume: "12.4",
  },
  {
    rank: 5,
    name: "Livia Rosser",
    avatar: "/placeholder.svg",
    change: "+1.41%",
    nftsSold: "602",
    volume: "12.4",
  },
  {
    rank: 6,
    name: "Kianna Donin",
    avatar: "/placeholder.svg",
    change: "+1.41%",
    nftsSold: "602",
    volume: "12.4",
  },
];

export default function RankingsPage() {
  const [activeFilter, setActiveFilter] = useState<TimeFilter>("Today");

  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Top Creators
            </h1>
            <p className="text-gray-400">
              Check out top ranking NFT artists on the NFT Marketplace.
            </p>
          </div>

          {/* Time Filter Tabs */}
          <div className="mb-5 border-gray-700">
            <div className="gap-4 flex justify-between">
              {timeFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-4 text-sm font-medium relative ${
                    activeFilter === filter
                      ? "text-white border-b-2 border-b-gray-100/30"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {filter}
                  {activeFilter === filter && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Table Header */}
          <div className="flex items-center justify-between border-[1px] p-3 text-sm text-gray-400 border-gray-100/10 rounded-2xl">
            <div className="flex items-center gap-4">
              <span className="w-8">#</span>
              <span>Artist</span>
            </div>
            <div className="hidden md:block">Change</div>
            <div className="hidden md:block text-right w-24">NFTs Sold</div>
            <div className="text-right w-32">Volume</div>
          </div>

          {/* Creators List */}
          <div className="mt-5 space-y-3">
            {creators.map((creator) => (
              <CreatorRow key={creator.rank} {...creator} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
