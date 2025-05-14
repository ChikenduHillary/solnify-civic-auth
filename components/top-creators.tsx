import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RocketIcon } from "lucide-react";

interface Creator {
  id: number;
  name: string;
  avatar: string;
  totalSales: string;
}

const creators: Creator[] = [
  {
    id: 1,
    name: "Keepitreal",
    avatar: "/images/dog.svg",
    totalSales: "34.53",
  },
  { id: 2, name: "DigiLab", avatar: "/images/dog.svg", totalSales: "34.53" },
  {
    id: 3,
    name: "GravityOne",
    avatar: "/images/dog.svg",
    totalSales: "34.53",
  },
  { id: 4, name: "Juanie", avatar: "/images/dog.svg", totalSales: "34.53" },
  { id: 5, name: "BlueWhale", avatar: "/images/dog.svg", totalSales: "34.53" },
  { id: 6, name: "Mr Fox", avatar: "/images/dog.svg", totalSales: "34.53" },
  { id: 7, name: "Shroomie", avatar: "/images/dog.svg", totalSales: "34.53" },
  { id: 8, name: "Robotica", avatar: "/images/dog.svg", totalSales: "34.53" },
  {
    id: 9,
    name: "RustyRobot",
    avatar: "/images/dog.svg",
    totalSales: "34.53",
  },
  { id: 10, name: "AnimaKid", avatar: "/images/dog.svg", totalSales: "34.53" },
  { id: 11, name: "Dotgu", avatar: "/images/dog.svg", totalSales: "34.53" },
  { id: 12, name: "Ghiblier", avatar: "/images/dog.svg", totalSales: "34.53" },
];

export function TopCreators() {
  return (
    <section className="px-4 md:px-[50px] py-8 md:py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 md:mb-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Top Creators</h2>
          <p className="text-gray-400">
            Checkout Top Rated Creators on The NFT Marketplace
          </p>
        </div>
        <Button
          variant="outline"
          className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
        >
          <RocketIcon className="w-4 h-4 mr-2" />
          View Rankings
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {creators.map((creator) => (
          <div   key={creator.id}>
          <Card
            className="bg-backgroundSecondary border-none p-4 hover:bg-backgroundSecondary/80 transition-colors"
          >
            <div className="relative text-center">
              <span className="absolute text-gray-100/60 w-8 h-8 bg-background rounded-full flex items-center justify-center text-sm">
                {creator.id}
              </span>
              <div className="flex flex-col items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={creator.avatar} />
                </Avatar>
                <div className="space-y-1">
                  <h3 className="font-semibold text-white">{creator.name}</h3>
                  <div className="text-sm ">
                    <span className="text-gray-100/50">Total Sales: </span>
                    <span className="font-mono text-gray-100">{creator.totalSales} SOL</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card
            className="bg-backgroundSecondary hidden border-none p-4 hover:bg-backgroundSecondary/80 transition-colors"
          >
            <div className="relative">
              <span className="absolute -top-6 -left-6 w-8 h-8 bg-background rounded-full flex items-center justify-center text-sm">
                {creator.id}
              </span>
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={creator.avatar} />
                </Avatar>
                <div className="space-y-1">
                  <h3 className="font-semibold">{creator.name}</h3>
                  <div className="text-sm">
                    <span className="text-gray-400">Total Sales: </span>
                    <span className="font-mono">{creator.totalSales} SOL</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
