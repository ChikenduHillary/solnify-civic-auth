import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    userId: v.string(),
    username: v.optional(v.string()),
    profilePic: v.optional(v.string()),
    bio: v.optional(v.string()),
    joinedAt: v.number(),
  }).index("userId", ["userId"]),

  nfts: defineTable({
    mintAddress: v.string(),
    owner: v.string(),
    image: v.string(),
    name: v.string(),
    description: v.optional(v.string()),
    collectionId: v.optional(v.id("collections")),
    createdAt: v.number(),
  }).index("owner", ["owner"]),

  listings: defineTable({
    nftId: v.id("nfts"),
    seller: v.string(),
    price: v.number(), // maybe in lamports
    currency: v.string(), // e.g. "SOL"
    listedAt: v.number(),
    isActive: v.boolean(),
  }).index("nftId", ["nftId"]),

  favorites: defineTable({
    userId: v.id("users"),
    nftId: v.id("nfts"),
  }).index("userId_nftId", ["userId", "nftId"]),

  collections: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    creator: v.string(), // wallet address
    createdAt: v.number(),
  }).index("creator", ["creator"]),
});
