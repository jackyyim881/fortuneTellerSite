"use client";
import Categories from "./_components/dream-categories-items";
import SearchBar from "./_components/search-button";
import SearchResult from "./_components/search-result";
import { useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

const data = [
  { name: "人物", img: "/images/person.png" },
  { name: "生活", img: "/images/life.png" },
  { name: "物品", img: "/images/items.png" },
  { name: "身体", img: "/images/body.png" },
  { name: "动物", img: "/images/animals.png" },
  { name: "植物", img: "/images/plants.png" },
  { name: "鬼神", img: "/images/ghosts.png" },
  { name: "建筑", img: "/images/buildings.png" },
  { name: "自然", img: "/images/nature.png" },
  { name: "情爱", img: "/images/love.png" },
  { name: "梦文化", img: "/images/dream-culture.png" },
];
export default function Page() {
  const searchParams = useSearchParams();
  const handleSearch = useCallback(() => {
    return searchParams.get("search") || "";
  }, [searchParams]);

  const cachedDataCategories = useMemo(() => data, []);

  return (
    <div className="font-bold p-2">
      <div className="*:p-2">
        <h1 className="text__title">夢境</h1>
        <p className="text_small_heading">
          夢境是睡眠時的一種心理現象，通常是在睡眠時出現的一系列感知、情感、思想、意識和幻覺的綜合體驗。
        </p>
      </div>
      <div className="mt-8">
        <Categories data={cachedDataCategories} />
      </div>
      <div className="w-full space-x-4 md:flex">
        <div className="mt-8 md:w-full">
          <SearchResult search={handleSearch()} />
        </div>
        <div className="mt-8 md:w-full">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
