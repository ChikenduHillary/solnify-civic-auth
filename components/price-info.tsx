import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

interface PriceInfoProps {
  price: string;
  highestBid: string;
  endingIn?: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export function PriceInfo({ price, highestBid, endingIn }: PriceInfoProps) {
  return (
    <div className="bg-backgroundSecondary rounded-2xl p-6 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-400 text-sm">Price</p>
          <p className="font-mono text-xl">{price} SOL</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Highest Bid</p>
          <p className="font-mono text-xl">{highestBid} SOL</p>
        </div>
      </div>
      {endingIn && (
        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4 text-gray-400" />
          <span>Auction ending in:</span>
          <span className="font-mono">
            {endingIn.hours}h {endingIn.minutes}m {endingIn.seconds}s
          </span>
        </div>
      )}
      <div className="flex gap-4">
        <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
          Place Bid
        </Button>
        <Button
          variant="outline"
          className="flex-1 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
        >
          View History
        </Button>
      </div>
    </div>
  );
}
