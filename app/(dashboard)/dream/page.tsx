"use client";
import Categories from "../../../components/dream-categories-items";
import SearchBar from "@/components/search-button";
import SearchResult from "@/components/search-result";
import { useSearchParams } from "next/navigation";

export default function Page() {
  // const search = useSearchParams().get("search");
  const searchParams = useSearchParams();
  function handleSearch() {
    const search = searchParams.get("search");
    return search;
  }
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
  return (
    <div className="font-bold p-4">
      <h1 className="text-4xl  text-white">夢境</h1>
      <p className="mt-7 text-md">
        夢境是睡眠時的一種心理現象，通常是在睡眠時出現的一系列感知、情感、思想、意識和幻覺的綜合體驗。
      </p>
      <div className="mt-8">
        <Categories data={data} />
      </div>
      <div className="w-full flex">
        <div className="mt-8 w-1/2">
          <SearchResult search={handleSearch} />
        </div>
        <div className="mt-8 w-1/2">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
