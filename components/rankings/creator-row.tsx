import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { TrendingUp } from "lucide-react";

interface CreatorRowProps {
  rank: number;
  name: string;
  avatar: string;
  change: string;
  nftsSold: string;
  volume: string;
}

export function CreatorRow({
  rank,
  name,
  avatar,
  change,
  nftsSold,
  volume,
}: CreatorRowProps) {
  return (
    <div className="flex items-center justify-between p-2 bg-backgroundSecondary rounded-lg transition-colors">
      <div className="flex items-center gap-4">
        <span className=" h-6 p-1 w-fit min-w-6 rounded-full text-sm flex items-center justify-center text-gray-400 bg-background">
          {rank}
        </span>
        <div className="flex items-center justify-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={avatar} />
          </Avatar>
          <span className="font-semibold text-sm">{name}</span>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-2 text-green-500">
        <TrendingUp className="w-4 h-4" />
        {change}
      </div>
      <div className="hidden md:block text-right w-24">{nftsSold}</div>
      <div className="text-right w-32 font-mono">{volume} SOL</div>
    </div>
  );
}
