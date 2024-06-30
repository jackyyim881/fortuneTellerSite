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
    <div className="flex items-center  rounded-lg overflow-hidden">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 text-gray-700"
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
