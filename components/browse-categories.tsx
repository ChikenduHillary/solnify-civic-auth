import Link from "next/link";
import Image from "next/image";

// images
import art from "@/public/images/art.svg";
import collectibles from "@/public/images/collectibles.svg";
import music from "@/public/images/music.svg";
import photography from "@/public/images/photography.svg";
import video from "@/public/images/video.svg";
import utility from "@/public/images/utility.svg";
import sport from "@/public/images/sport.svg";
import virtual from "@/public/images/virtual.svg";

// icons
import basketball from "@/public/icons/basketball.svg";
import camera from "@/public/icons/camera.svg";
import magicwand from "@/public/icons/magicwand.svg";
import musicIcon from "@/public/icons/music.svg";
import pen from "@/public/icons/pen.svg";
import planet from "@/public/icons/planet.svg";
import videocamera from "@/public/icons/videocamera.svg";
import swatches from "@/public/icons/swatches.svg";

interface Category {
  image: string;
  name: string;
  gradient: string;
  icon: string;
}

const categories: Category[] = [
  {
    image: art,
    name: "Art",
    gradient: "from-purple-500 to-blue-500",
    icon: pen,
  },
  {
    image: collectibles,
    name: "Collectibles",
    gradient: "from-yellow-500 to-orange-500",
    icon: magicwand,
  },
  {
    image: music,
    name: "Music",
    gradient: "from-pink-500 to-purple-500",
    icon: musicIcon,
  },
  {
    image: photography,
    name: "Photography",
    gradient: "from-green-500 to-teal-500",
    icon: camera,
  },
  {
    image: video,
    name: "Video",
    gradient: "from-cyan-500 to-blue-500",
    icon: videocamera,
  },
  {
    image: utility,
    name: "Utility",
    gradient: "from-red-500 to-pink-500",
    icon: swatches,
  },
  {
    image: sport,
    name: "Sport",
    gradient: "from-yellow-500 to-green-500",
    icon: basketball,
  },
  {
    image: virtual,
    name: "Virtual Worlds",
    gradient: "from-purple-500 to-pink-500",
    icon: planet,
  },
];

export function BrowseCategories() {
  return (
    <section className="px-4 md:px-[50px] py-8 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">
        Browse Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {categories.map((category, index) => (
          <Link
            key={index}
            href="#"
            className="group relative overflow-hidden rounded-2xl aspect-square"
          >
            <div className={`absolute inset-0 opacity-60`} />
            <div className="absolute inset-0 backdrop-blur-sm" />
            <div className="relative h-[65%] flex flex-col items-center justify-center text-white">
              <div className="relative w-full">
                {/* First image (background, blurred) */}
                <Image
                  src={category.image}
                  width={100}
                  height={100}
                  alt={category.name}
                  className="w-full h-full object-cover blur-md"
                />

                {/* Second image (icon, positioned on top) */}
                <Image
                  src={category.icon}
                  width={70} // Adjust size as needed
                  height={70}
                  alt={`${category.name} icon`}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1 w-16 h-16"
                />
              </div>

              <div className="text-left p-3 rounded-b-xl bg-backgroundSecondary w-full h-14">
                <p className="font-semibold">{category.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
