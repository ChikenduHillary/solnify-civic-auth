import Image from "next/image";
import { Button } from "@/components/ui/button";
// import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function Hero() {
  return (
    <div className="px-4 md:px-[50px] py-8 md:py-20">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between gap-10">
        <div className="max-w-[600px]">
          <h1 className="text-6xl font-bold leading-tight mb-8">
            Discover
            <br />
            Digital Art &
            <br />
            Collect NFTs
          </h1>
          <p className="text-lg text-gray-400 mb-10">
            NFT Marketplace UI Created With Anima For Figma. Collect, Buy And
            Sell Art From More Than 20k NFT Artists.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 mb-12">
            Get Started
          </Button>

          {/* <div className="flex gap-16">
            <div>
              <h3 className="text-3xl font-bold mb-1">240k+</h3>
              <p className="text-gray-400">Total Sale</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-1">100k+</h3>
              <p className="text-gray-400">Auctions</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-1">240k+</h3>
              <p className="text-gray-400">Artists</p>
            </div>
          </div> */}
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/images/spacewalking.svg"
              alt="Space Walking NFT"
              width={500}
              height={400}
              className="object-cover"
            />
          </div>
          {/* <div className="bg-backgroundSecondary rounded-b-2xl p-5">
            <h4 className="text-xl mb-2">Space Walking</h4>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="/placeholder.svg" />
              </Avatar>
              <span className="text-sm">AnimaKid</span>
            </div>
          </div> */}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col">
        <h1 className="text-[28px] font-bold leading-tight mb-6">
          Discover Digital Art & Collect NFTs
        </h1>

        <div className="rounded-t-2xl overflow-hidden">
          <Image
            src="/images/spacewalking.svg"
            alt="Space Walking NFT"
            width={500}
            height={400}
            className="object-cover"
          />
        </div>

        {/* <div className="bg-backgroundSecondary rounded-b-2xl p-4 mb-6">
          <h4 className="text-lg mb-2">Space Walking</h4>
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="/placeholder.svg" />
            </Avatar>
            <span className="text-sm">AnimaKid</span>
          </div>
        </div> */}

        <p className="text-base text-gray-400 mb-6">
          NFT Marketplace UI Created With Anima For Figma. Collect, Buy And Sell
          Art From More Than 20k NFT Artists.
        </p>

        <Button className="bg-purple-600 hover:bg-purple-700 w-full mb-8">
          Get Started
        </Button>

        <div className="grid grid-cols-3 gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-1">240k+</h3>
            <p className="text-sm text-gray-400">Total Sale</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-1">100k+</h3>
            <p className="text-sm text-gray-400">Auctions</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-1">240k+</h3>
            <p className="text-sm text-gray-400">Artists</p>
          </div>
        </div>
      </div>
    </div>
  );
}
