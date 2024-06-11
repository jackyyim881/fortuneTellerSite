"use client";
import Categories from "@/components/dream/categories";
import SearchBar from "@/components/dream/searchbar";
import SearchResult from "@/components/SearchResult";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const search = useSearchParams().get("search");

  return (
    <div className="font-bold p-4">
      <h1 className="text-4xl  text-white">夢境</h1>
      <p className="mt-7 text-md">
        夢境是睡眠時的一種心理現象，通常是在睡眠時出現的一系列感知、情感、思想、意識和幻覺的綜合體驗。
      </p>
      <div className="mt-8">
        <Categories />
      </div>
      <div className="w-full flex">
        <div className="mt-8 w-1/2">
          <SearchResult search={search} />
        </div>
        <div className="mt-8 w-1/2">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
