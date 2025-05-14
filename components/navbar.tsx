"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { UserButton, useUser } from "@civic/auth-web3/react";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const WalletMultiButton = dynamic(
  () =>
    import("@solana/wallet-adapter-react-ui").then(
      (mod) => mod.WalletMultiButton
    ),
  { ssr: false }
);

export function Navbar() {
  const userContext = useUser();
  const userId = userContext?.user?.id;
  const router = useRouter();
  console.log(userContext);

  try {
    const dbUser = useQuery(api.users.getUser, {
      userId: userId ? userId : "",
    });
  } catch (error: any) {
    if (
      error.message?.includes("User not found") &&
      userContext?.isAuthenticated &&
      userId
    ) {
      router.push("/onboarding");
    } else {
      console.log("Error fetching user:", error.message || error);
    }
  }

  useEffect(() => {}, [userContext]);

  return (
    <nav className="flex items-center justify-between py-5 px-4 md:px-[50px]">
      <div className="flex items-center gap-3">
        <span className="text-xl font-bold">Solnify</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <Link
          href="/marketplace"
          className="text-sm hover:text-purple-500 transition-colors"
        >
          Marketplace
        </Link>
        <Link
          href="/rankings"
          className="text-sm hover:text-purple-500 transition-colors"
        >
          Rankings
        </Link>

        <div className="flex items-center gap-2">
          <div className="flex gap-2 items-center">
            <UserButton className=" h-[35px] civic-user-button hover:text-black text-sm flex items-center justify-center" />
            <WalletMultiButton
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--solana), var(--solana-light))",
                color: "white",
                height: "35px",
                padding: "10px 10px",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent side="right" className="bg-background text-white">
          <div className="flex flex-col gap-4 mt-8">
            <Link
              href="#"
              className="text-sm hover:text-purple-500 transition-colors"
            >
              Marketplace
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-purple-500 transition-colors"
            >
              Rankings
            </Link>

            <Button
              className="bg-red hover:bg-purple-700 w-full"
              onClick={() => {
                console.log("working");
              }}
            ></Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
