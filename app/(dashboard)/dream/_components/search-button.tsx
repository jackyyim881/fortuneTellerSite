"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchComponent() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    router.push(`/search?query=${search}`);
    setSearch("");
  };
  return (
    <div className="flex justify-center items-center">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border text-black border-gray-300 p-2 rounded-lg active:border-blue-500 focus:outline-none focus:border-blue-500"
      />
      <button
        className="bg-blue-300 text-black font-bold px-4 py-2 rounded-lg ml-2"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
