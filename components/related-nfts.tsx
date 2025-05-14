import { Button } from "@/components/ui/button";
import { NFTCard } from "@/components/nft-card"; // Reusing the NFTCard component from artist page

interface RelatedNFTsProps {
  artistName: string;
  nfts: Array<{
    image: string;
    title: string;
    creator: {
      name: string;
      avatar: string;
    };
    price: string;
    highestBid: string;
  }>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function RelatedNFTs({ artistName, nfts }: RelatedNFTsProps) {
  return (
    <section className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">More From This Artist</h2>
        <Button
          variant="outline"
          className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
        >
          Go To Artist Page
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {nfts.map((nft, index) => (
          <NFTCard key={index} {...nft} />
        ))}
      </div>
    </section>
  );
}
