import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface NFTCardProps {
  id: string;
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
  id,
  image,
  title,
  creator,
  price,
  highestBid,
}: NFTCardProps) {
  return (
    <Link href={`/nft/${id}`}>
      <div className="bg-background rounded-2xl overflow-hidden transition-transform hover:scale-[1.02]">
        <div className="aspect-square relative bottom-2">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="p-5 space-y-4">
          <h3 className="font-semibold text-lg">{title}</h3>
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={creator.avatar} />
            </Avatar>
            <span className="text-sm text-gray-400">{creator.name}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-700">
            <div>
              <p className="text-gray-400 text-xs">Price</p>
              <p className="font-mono">{price} SOL</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">Highest Bid</p>
              <p className="font-mono">{highestBid} SOL</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
