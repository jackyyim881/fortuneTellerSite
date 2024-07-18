"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

export default function SearchComponent() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    router.push(`/search?search_query=${search}`);
    setSearch("");
  };
  return (
    <div className="flex items-center rounded-lg overflow-hidden">
      <div className="relative w-full">
        <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900" />
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="block w-full pl-10 rounded-l-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <button
        className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset bg-blue-300 hover:bg-blue-500 transition duration-300"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
