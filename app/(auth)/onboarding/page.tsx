"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Footer } from "@/components/footer";
import { Loader2 } from "lucide-react";
import { useUser } from "@civic/auth-web3/react";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userHasWallet } from "@civic/auth-web3";

import { api } from "@/convex/_generated/api";

interface OnboardingFormValues {
  username: string;
  email: string;
  bio: string;
  twitter: string;
  instagram: string;
  website: string;
}

export default function OnboardingPage() {
  const userContext = useUser();
  const router = useRouter();
  const createUser = useMutation(api.users.createUser);

  const imageUrl = userContext?.user?.picture;
  console.log(imageUrl);
  const userId = userContext?.user?.id;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<OnboardingFormValues>({
    defaultValues: {
      username: "",
      email: "",
      bio: "",
      twitter: "",
      instagram: "",
      website: "",
    },
  });

  const onSubmit = async (data: OnboardingFormValues) => {
    const { username, bio } = data;

    if (!userId) {
      console.error("User ID is required");
      return;
    }

    try {
      await createUser({
        userId,
        username,
        bio,
        profilePic: imageUrl,
      });

      if (userContext.user && !userHasWallet(userContext)) {
        await userContext.createWallet();
      }

      toast.success("Profile created successfully.");

      router.push(`artist/${userId}`);
    } catch (error) {
      console.error("Error creating user:", error);
      return;
    }
    console.log("User created successfully");
  };

  useEffect(() => {
    if (userContext?.user) {
      setValue("username", userContext.user.name || "");
      setValue("email", userContext.user.email || "");
    }
  }, [userContext, setValue]);

  return (
    <div className="min-h-screen bg-background text-white">
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Complete Your Profile
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="relative w-32 h-32">
                  {/* <div className="w-full h-full bg-[#242435] rounded-full flex items-center justify-center border-2 border-dashed border-gray-700">
                    <ImageIcon className="w-8 h-8 text-gray-400" />
                  </div> */}
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      alt="Profile Picture"
                      className="absolute inset-0 w-full h-full rounded-full object-cover"
                      width={128}
                      height={128}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Your unique username"
                  className="bg-[#242435] border-gray-700 focus:border-purple-500"
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 3,
                      message: "Username must be at least 3 characters",
                    },
                    maxLength: {
                      value: 50,
                      message: "Username must be less than 50 characters",
                    },
                  })}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  className="bg-[#242435] border-gray-700 focus:border-purple-500"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself"
                  className="bg-[#242435] border-gray-700 focus:border-purple-500 min-h-[100px]"
                  {...register("bio", {
                    maxLength: {
                      value: 500,
                      message: "Bio must be less than 500 characters",
                    },
                  })}
                />
                {errors.bio && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.bio.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="twitter">Twitter</Label>
                <Input
                  id="twitter"
                  placeholder="Your Twitter profile URL"
                  className="bg-[#242435] border-gray-700 focus:border-purple-500"
                  {...register("twitter", {
                    pattern: {
                      value: /^https?:\/\/.+/,
                      message: "Invalid URL",
                    },
                  })}
                />
                {errors.twitter && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.twitter.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="instagram">Instagram</Label>
                <Input
                  id="instagram"
                  placeholder="Your Instagram profile URL"
                  className="bg-[#242435] border-gray-700 focus:border-purple-500"
                  {...register("instagram", {
                    pattern: {
                      value: /^https?:\/\/.+/,
                      message: "Invalid URL",
                    },
                  })}
                />
                {errors.instagram && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.instagram.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  placeholder="Your personal website URL"
                  className="bg-[#242435] border-gray-700 focus:border-purple-500"
                  {...register("website", {
                    pattern: {
                      value: /^https?:\/\/.+/,
                      message: "Invalid URL",
                    },
                  })}
                />
                {errors.website && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.website.message}
                  </p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Profile...
                </>
              ) : (
                "Create Profile"
              )}
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
