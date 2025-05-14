import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

interface CollectionProps {
  mainImage: string;
  thumbnail1: string;
  thumbnail2: string;
  title: string;
  creator: {
    name: string;
    avatar: string;
  };
}

function Collection({
  mainImage,
  thumbnail1,
  thumbnail2,
  title,
  creator,
}: CollectionProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="rounded-2xl overflow-hidden">
          <Image
            width={100}
            height={100}
            src={mainImage}
            alt={title}
            className="w-full aspect-square object-cover"
          />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-2xl overflow-hidden">
            <Image
              width={100}
              height={100}
              src={thumbnail1}
              alt={`${title} thumbnail 1`}
              className="w-full aspect-square object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              width={100}
              height={100}
              src={thumbnail2}
              alt={`${title} thumbnail 2`}
              className="w-full aspect-square object-cover"
            />
          </div>
          <div className="bg-purple-600 rounded-2xl flex items-center justify-center">
            <span className="text-white font-bold">1025+</span>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={creator.avatar} />
          </Avatar>
          <span className="text-sm text-gray-400">{creator.name}</span>
        </div>
      </div>
    </div>
  );
}

export function TrendingSection() {
  const collections = [
    {
      mainImage: "/images/dog.svg",
      thumbnail1: "/images/dog2.svg",
      thumbnail2: "/images/dog3.svg",
      title: "DSGN Animals",
      creator: {
        name: "MrFox",
        avatar: "/placeholder.svg",
      },
    },
    {
      mainImage: "/images/mushroom.svg",
      thumbnail1: "/images/mushroom2.svg",
      thumbnail2: "/images/mushroom3.svg",
      title: "Magic Mushrooms",
      creator: {
        name: "Shroomie",
        avatar: "/placeholder.svg",
      },
    },
    {
      mainImage: "/images/robo.svg",
      thumbnail1: "/images/robo2.svg",
      thumbnail2: "/images/robo3.svg",
      title: "Disco Machines",
      creator: {
        name: "BeKind2Robots",
        avatar: "/placeholder.svg",
      },
    },
  ];

  return (
    <section className="px-4 md:px-[50px] py-8 md:py-20">
      <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Trending Collection</h2>
        <p className="text-gray-400">
          Checkout Our Weekly Updated Trending Collection.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {collections.map((collection, index) => (
          <Collection key={index} {...collection} />
        ))}
      </div>
    </section>
  );
}
