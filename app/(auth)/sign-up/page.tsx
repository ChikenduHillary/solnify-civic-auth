"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  }

  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="hidden md:block">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZjAStg1evjPx7Vcm9Hc7v9cBFljxLN.png"
              alt="Astronauts in space"
              width={600}
              height={600}
              className="rounded-2xl"
            />
          </div>

          <div className="max-w-md mx-auto md:max-w-none w-full">
            <div className="space-y-6">
              <div className="space-y-2 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold">
                  Create Account
                </h1>
                <p className="text-gray-400">
                  Welcome! Enter Your Details And Start Creating, Collecting And
                  Selling NFTs.
                </p>
              </div>

              <form onSubmit={onSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    placeholder="Enter username"
                    required
                    className="bg-background border-gray-700 focus:border-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    required
                    className="bg-background border-gray-700 focus:border-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    required
                    className="bg-background border-gray-700 focus:border-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm password"
                    required
                    className="bg-background border-gray-700 focus:border-purple-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>

                <p className="text-center text-gray-400">
                  Already have an account?{" "}
                  <Link
                    href="/sign-in"
                    className="text-purple-500 hover:text-purple-400"
                  >
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
