import { mutation, query } from "./_generated/server";
import { ConvexError } from "convex/values";
import { v } from "convex/values";

export const generateUploadUrl = mutation({
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const createUser = mutation({
  args: {
    userId: v.string(),
    username: v.optional(v.string()),
    profilePic: v.optional(v.string()),
    bio: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = args.userId;

    if (!userId) {
      throw new ConvexError({
        message: "User ID is required",
        code: 400,
        severity: "high",
      });
    }

    await ctx.db.insert("users", {
      userId,
      username: args.username,
      bio: args.bio,
      profilePic: args.profilePic,
      joinedAt: Date.now(),
    });
  },
});

export const getUser = query({
  args: {
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .first();

    console.log(args.userId);
    console.log({ user });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  },
});
