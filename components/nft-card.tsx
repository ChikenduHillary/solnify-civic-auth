import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

interface NFTCardProps {
  image: string;
  title: string;
  creator: {
    name: string;
    avatar: string;
  };
  price: string;
  highestBid: string;
}

export function NFTCard({
  image,
  title,
  creator,
  price,
  highestBid,
}: NFTCardProps) {
  return (
    <Card className="bg-backgroundSecondary border-none overflow-hidden">
      <div className="aspect-square relative bottom-2">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 space-y-4">
        <h3 className="font-semibold text-lg text-white">{title}</h3>
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={creator.avatar} />
          </Avatar>
          <span className="text-sm text-gray-400">{creator.name}</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-gray-400 text-xs">Price</p>
            <p className="font-mono text-gray-100 text-lg font-semibold">
              {price} SOL
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-xs">Highest Bid</p>
            <p className="font-mono text-gray-100 text-lg font-semibold">
              {highestBid} SOL
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
