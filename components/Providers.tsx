"use client";

import React, { useState } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { clusterApiUrl } from "@solana/web3.js";
import { CivicAuthProvider } from "@civic/auth-web3/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import "@solana/wallet-adapter-react-ui/styles.css";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const ReactQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ConnectionProvider endpoint={clusterApiUrl("devnet")}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <CivicAuthProvider>
              <ConvexProvider client={convex}>{children}</ConvexProvider>;
            </CivicAuthProvider>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </QueryClientProvider>
  );
};

export default ReactQueryClientProvider;
