import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FooterNewsletter() {
  return (
    <section className="px-4 md:px-[50px] py-8 md:py-20">
      <div className="bg-backgroundSecondary rounded-2xl p-6 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/astro.svg"
              alt="Astronaut reading newspaper"
              width={425}
              height={310}
              className="rounded-2xl w-full"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Join Our Weekly Digest
            </h2>
            <p className="text-gray-400">
              Get Exclusive Promotions & Updates Straight To Your Inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
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
      </div>
    </section>
  );
}
