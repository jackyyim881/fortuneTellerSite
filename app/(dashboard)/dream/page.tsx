import { Suspense } from "react";
import SearchBar from "./_components/search-button";
import GroupArticles from "./_components/group-articles";

export default async function Page({
  searchParams,
}: {
  searchParams: { search?: string; page?: string };
}) {
  const search = searchParams.search || "";
  const page = parseInt(searchParams.page || "1", 10);

  return (
    <div className="p-2 mt-5">
      <div className="flex justify-between">
        <h1 className="menu__title">夢境</h1>
        <div className="md:w-[400px]">
          <SearchBar />
        </div>
      </div>
      <p className="text_small_heading">
        夢境是睡眠時的一種心理現象，通常是在睡眠時出現的一系列感知、情感、思想、意識和幻覺的綜合體驗。
      </p>
      <div className="mt-10">
        <Suspense fallback={<div>Loading...</div>}>
          <GroupArticles search={search} page={page} />
        </Suspense>
      </div>
    </div>
  );
}
