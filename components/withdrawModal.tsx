import React, { useState } from "react";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable  @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Connection } from "@solana/web3.js";

import { AlertTriangle, ArrowDownToLine, Wallet, X } from "lucide-react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useSolBalance } from "@/helpers/getSolBalance";
import { toast } from "sonner";
import { transferSol } from "@/helpers/transfer_token";
import { PublicKey } from "@solana/web3.js";
import { useUser } from "@civic/auth-web3/react";
import { Web3UserContextType } from "@civic/auth-web3";

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ExtendedWeb3UserContextType = Web3UserContextType & {
  solana?: {
    address: string;
    wallet: any; // Adjust the type according to your wallet type
  };
  isAuthenticated: boolean;
};

const WithdrawModal: React.FC<WithdrawModalProps> = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const userContext = useUser() as ExtendedWeb3UserContextType;

  console.log({ userContext });

  const wallet = userContext?.solana?.wallet;

  const publicKey = new PublicKey(
    userContext?.solana?.address || wallet.publicKey?.toString() || ""
  );
  const balance = useSolBalance(publicKey);

  console.log({ publicKey });

  const connection = new Connection(
    "https://api.devnet.solana.com",
    "confirmed"
  );

  const handleWithdraw = async () => {
    if (!amount || !address) {
      toast.error("Please fill in all fields");
      return;
    }

    const withdrawAmount = parseFloat(amount);
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
      toast.warning("Please enter a valid withdrawal amount");
      return;
    }

    if (withdrawAmount > balance) {
      toast.error("You don't have enough funds to withdraw this amount");
      return;
    }

    if (!address.trim() || address.length < 8) {
      toast("Please enter a valid wallet address");
      return;
    }

    try {
      setIsLoading(true);

      //   console.log(`Withdrawing ${amount} SOL to ${address}`);
      console.log(
        `Withdrawing ${amount} SOL to ${address} from ${publicKey.toString()}`
      );
      const signature = await transferSol(
        connection,
        wallet,
        address,
        parseFloat(amount)
      );

      toast.success(
        `Withdrawal successful! Signature: ${signature?.slice(0, 8)}...`
      );

      setAmount("");
      setAddress("");
      onClose();
    } catch (error) {
      console.error("Withdrawal failed:", error);
      toast.error("There was an error processing your withdrawal");
    } finally {
      setIsLoading(false);
    }
  };

  const handleMaxAmount = () => {
    setAmount(balance.toString());
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50">
      <div className="w-full max-w-sm mx-auto bg-gray-900/90 border border-white/10 rounded-lg p-6 shadow-xl relative">
        <div
          className="absolute text-white right-5 top-2 text-[16px] cursor-pointer"
          onClick={onClose}
        >
          &times;
        </div>
        <div className="flex items-center gap-2 text-xl font-semibold text-white">
          <ArrowDownToLine className="h-5 w-5 text-emerald-500" />
          Withdraw SOL
        </div>

        <p className="text-white/70 text-[11px] py-1">
          Transfer SOL from your game wallet to an external wallet
        </p>

        <div className="grid gap-4 py-4">
          <div className="space-y-0">
            <div className="flex items-center justify-between">
              <label
                htmlFor="amount"
                className="text-sm font-semibold text-white"
              >
                Amount
              </label>
              <span className="text-xs text-white/70 text-[10px]">
                Balance: {balance} SOL
              </span>
            </div>
            <div className="relative">
              <input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.0"
                className="w-full px-4 py-1.5 bg-gray-800/50 outline-[#008753] focus:outline-2 rounded-md text-white pr-20"
              />
              <button
                type="button"
                onClick={handleMaxAmount}
                className="absolute right-0 top-0 h-full px-3 text-xs text-emerald-500 hover:text-emerald-400 font-semibold text-[10px]"
              >
                MAX
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="address"
              className="text-sm font-semibold text-white"
            >
              Destination Address
            </label>
            <input
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Solana wallet address"
              className="w-full px-4 py-1.5 bg-gray-800/50  outline-[#008753] focus:outline-2 border-white/10 rounded-md text-white"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-2">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-1.5 bg-transparent border border-white/10 rounded-md text-white hover:bg-white/5 flex items-center justify-center text-[13px]"
          >
            <X className="mr-2 h-4 w-4" />
            Cancel
          </button>
          <button
            onClick={handleWithdraw}
            className="w-full sm:w-auto px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 rounded-md text-white flex items-center justify-center text-[13px] font-medium"
            disabled={isLoading}
          >
            <Wallet className="mr-2 h-4 w-4" />
            {isLoading ? "Processing..." : "Withdraw"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawModal;
