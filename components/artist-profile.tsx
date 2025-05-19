"use client";
/* eslint-disable  @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Globe,
  Twitter,
  Instagram,
  DiscIcon as Discord,
  Copy,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import WithdrawModal from "@/components/withdrawModal";
import { PublicKey } from "@solana/web3.js";
import { useSolBalance } from "@/helpers/getSolBalance";
import { useUser } from "@civic/auth-web3/react";
import { Web3UserContextType } from "@civic/auth-web3";

interface ProfileStats {
  volume: string;
  nftsSold: string;
  followers: string;
}

interface ArtistProfileProps {
  name: string;
  avatar: string;
  stats: ProfileStats;
  bio: string;
  walletAddress: string; // Add walletAddress as a prop
}

type ExtendedWeb3UserContextType = Web3UserContextType & {
  solana?: {
    address: string;
    wallet: any; // Adjust the type according to your wallet type
  };
  isAuthenticated: boolean;
};

export function ArtistProfile({
  name,
  avatar,
  stats,
  bio,
  walletAddress,
}: ArtistProfileProps) {
  const [copied, setCopied] = useState(false);
  const [openWithdrawal, setOpenWithdrawal] = useState(false);
  const userContext = useUser() as ExtendedWeb3UserContextType;

  // Always call hooks in the same order!
  const publicKey = userContext?.solana?.address
    ? new PublicKey(userContext.solana.address)
    : null;
  const balance = useSolBalance(publicKey);

  const closeWithdrawModal = () => setOpenWithdrawal(false);
  const openWithdrawModal = () => setOpenWithdrawal(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!userContext?.solana?.address) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <span>Loading wallet info...</span>
      </div>
    );
  }

  return (
    <>
      {openWithdrawal && (
        <WithdrawModal isOpen={openWithdrawal} onClose={closeWithdrawModal} />
      )}
      <div className="space-y-8">
        {/* Banner */}
        <div className="h-[300px] relative">
          <Image
            src={"/images/imagecover.svg"}
            width={2000}
            height={2000}
            quality={1}
            alt="cover photo"
            className="w-[100vw] h-full object-cover"
          />
          <div className="absolute -bottom-16 left-4 md:left-8">
            <Avatar className="h-32 rounded-3xl w-32 border-4 border-[#1F1D2B]">
              <AvatarImage src={avatar} />
            </Avatar>
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-20 px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-4">{name}</h1>
              <div className="flex gap-8 mb-6">
                <div>
                  <p className="text-3xl font-bold">{stats.volume}+</p>
                  <p className="text-gray-400">Volume</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">{stats.nftsSold}+</p>
                  <p className="text-gray-400">NFTs Sold</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">{stats.followers}+</p>
                  <p className="text-gray-400">Followers</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Button
                variant="outline"
                className="bg-backgroundSecondary border-gray-700"
                onClick={handleCopy}
              >
                <Copy className="w-4 h-4 mr-2" />
                {copied ? "Copied!" : "Copy Address"}
              </Button>
              <Button
                variant="outline"
                className="bg-backgroundSecondary border-gray-700"
                onClick={openWithdrawModal}
              >
                Withdraw your earnings
              </Button>
            </div>
          </div>

          {/* Wallet Address */}
          <div className="mt-4">
            <p className="text-gray-400 text-sm">Solana Balance</p>
            <p className="text-white text-sm break-all">{balance}</p>
          </div>

          <div className="flex gap-4 my-8">
            <Link href="#" className="text-gray-400 hover:text-white">
              <Globe className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Discord className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Instagram className="w-6 h-6" />
            </Link>
          </div>

          <p className="text-gray-400 max-w-2xl">{bio}</p>
        </div>
      </div>
    </>
  );
}
