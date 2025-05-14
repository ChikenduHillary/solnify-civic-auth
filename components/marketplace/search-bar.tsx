"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <Input
        type="text"
        placeholder="Search your favourite NFTs"
        className="w-full bg-background border-gray-100/10 pl-12 py-6 text-white placeholder:text-gray-400 rounded-xl outline-none focus:border-gray-100/10"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
