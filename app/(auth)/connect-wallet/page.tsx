"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

interface WalletOption {
  id: string;
  name: string;
  icon: string;
  color: string;
}

const walletOptions: WalletOption[] = [
  {
    id: "metamask",
    name: "Metamask",
    icon: "🦊",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "walletconnect",
    name: "Wallet Connect",
    icon: "🔗",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "coinbase",
    name: "Coinbase",
    icon: "🔵",
    color: "from-blue-400 to-blue-500",
  },
];

function WalletButton({ wallet }: { wallet: WalletOption }) {
  return (
    <Button
      variant="outline"
      className="w-full bg-background border-gray-700 hover:bg-[#2a2a3c] hover:border-purple-500 transition-all"
      onClick={() => console.log(`Connecting to ${wallet.name}`)}
    >
      <div className="flex items-center gap-3 py-2">
        <span className="text-2xl">{wallet.icon}</span>
        <span className="text-lg">{wallet.name}</span>
      </div>
    </Button>
  );
}

export default function ConnectWallet() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="hidden md:block">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6uy5a8cL0dqvx93gD8WOSkI2lKlKKw.png"
              alt="Space station in purple galaxy"
              width={600}
              height={600}
              className="rounded-2xl"
            />
          </div>

          <div className="max-w-md mx-auto md:max-w-none w-full">
            <div className="space-y-8">
              <div className="space-y-4 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold">
                  Connect Wallet
                </h1>
                <p className="text-gray-400">
                  Choose a wallet you want to connect.
                  <br />
                  There are several wallet providers.
                </p>
              </div>

              <div className="space-y-4">
                {walletOptions.map((wallet) => (
                  <WalletButton key={wallet.id} wallet={wallet} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
