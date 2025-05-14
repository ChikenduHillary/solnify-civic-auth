import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DiscIcon as Discord, Youtube, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-backgroundSecondary text-white">
      <div className="container mx-auto px-4 md:px-[50px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* NFT Marketplace Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">NFT Marketplace</h3>
            <p className="text-gray-400">
              NFT marketplace UI created with Anima for Figma.
            </p>
            <p className="text-gray-400">Join our community</p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="hover:text-purple-500 transition-colors"
              >
                <Discord className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="hover:text-purple-500 transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="hover:text-purple-500 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="hover:text-purple-500 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Explore */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Rankings
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Connect a wallet
                </Link>
              </li>
            </ul>
          </div>

          {/* Join Our Weekly Digest */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Join Our Weekly Digest</h3>
            <p className="text-gray-400">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email here"
                className="bg-white text-black"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-sm">
            © NFT Market. Use this template freely.
          </p>
        </div>
      </div>
    </footer>
  );
}
