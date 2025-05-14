import type { NextConfig } from "next";
import { createCivicAuthPlugin } from "@civic/auth-web3/nextjs";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  images: {
    domains: [
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      "lh3.googleusercontent.com",
    ],
  },
};

const withCivicAuth = createCivicAuthPlugin({
  clientId: `${process.env.CLIENT_ID}`,
  // oauthServer is not necessary for production.
  oauthServer: process.env.AUTH_SERVER || "https://auth.civic.com/oauth",
  ...(process.env.WEBPACK_ENABLE_SOLANA_WALLET_ADAPTER === "true"
    ? { enableSolanaWalletAdapter: true }
    : {}),
});

export default withCivicAuth(nextConfig);
