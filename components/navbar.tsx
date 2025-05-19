"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Copy } from "lucide-react"; // Import the Copy icon
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { UserButton, useUser } from "@civic/auth-web3/react";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { userHasWallet, Web3UserContextType } from "@civic/auth-web3";

type ExtendedWeb3UserContextType = Web3UserContextType & {
  solana?: {
    address: string;
  };
  isAuthenticated: boolean;
};

export function Navbar() {
  const userContext = useUser() as ExtendedWeb3UserContextType;
  const userId = userContext?.user?.id;
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const isAuthenticated = userContext?.isAuthenticated;
  const publicKey = userContext?.solana?.address;
  console.log(userContext);

  const handleCopy = () => {
    if (publicKey) {
      navigator.clipboard.writeText(publicKey).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      });
    }
  };

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 5)}...${address.slice(-5)}`;
  };

  try {
    const dbUser = useQuery(api.users.getUser, userId ? { userId } : "skip");
    console.log({ dbUser });
  } catch (error: any) {
    if (error && userId) {
      router.push("/onboarding");
    } else {
      console.log("Error fetching user:", error.message || error);
    }
  }

  useEffect(() => {
    const createWallet = async () => {
      if (userContext.user && !userHasWallet(userContext)) {
        await userContext.createWallet();
      }
    };

    createWallet();
  }, [userContext, publicKey, userId]);

  return (
    <nav className="flex items-center justify-between py-5 px-4 md:px-[50px]">
      <div className="flex items-center gap-3">
        <Link href="/">
          {" "}
          <span className="text-xl font-bold">Solnify</span>{" "}
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <Link
          href="/marketplace"
          className="text-sm hover:text-purple-500 transition-colors"
        >
          Marketplace
        </Link>
        <Link
          href="/rankings"
          className="text-sm hover:text-purple-500 transition-colors"
        >
          Rankings
        </Link>

        <div className="flex items-center gap-2">
          <div className="flex gap-2 items-center">
            <UserButton className=" h-[35px] civic-user-button hover:text-black text-sm flex items-center justify-center" />
            {publicKey && isAuthenticated ? (
              <div className="flex flex-col items-start gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 bg-backgroundSecondary border border-gray-700 text-white px-3 py-1 rounded-md hover:bg-gray-700 transition"
                >
                  <Copy className="w-4 h-4" />
                  {copied ? "Copied!" : shortenAddress(publicKey)}
                </button>
              </div>
            ) : isAuthenticated && !publicKey ? (
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 bg-backgroundSecondary border border-gray-700 text-white px-3 py-1 rounded-md hover:bg-gray-700 transition"
              >
                Loading wallet...
              </button>
            ) : (
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 bg-backgroundSecondary border border-gray-700 text-white px-3 py-1 rounded-md hover:bg-gray-700 transition"
              >
                Sign in to create wallet
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent side="right" className="bg-background text-white">
          <div className="flex flex-col gap-4 mt-8">
            <Link
              href="#"
              className="text-sm hover:text-purple-500 transition-colors"
            >
              Marketplace
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-purple-500 transition-colors"
            >
              Rankings
            </Link>

            <Button
              className="bg-red hover:bg-purple-700 w-full"
              onClick={() => {
                console.log("working");
              }}
            ></Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
