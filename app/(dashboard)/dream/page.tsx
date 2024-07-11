import { Suspense } from "react";
import PaginationButton from "./_components/pagination-button";
import SearchBar from "./_components/search-button";
import { fetchAllDreamArticles } from "./actions";
import GroupArticles from "./_components/group-articles";

type Article = {
  title: string;
  content: string;
  authorId: number;
  category: string;
};

type ArticlesPageProps = {
  articles: Article[];
  totalArticles: number;
  currentPage: number;
  pageSize: number;
};

export default async function Page({
  searchParams,
}: {
  searchParams: { search: string; page?: number };
}) {
  const articles = await fetchAllDreamArticles();

  return (
    <div className="p-2">
      <div className="flex justify-between">
        <h1 className="text__title">夢境</h1>
        <div className="md:w-[400px]">
          <SearchBar />
        </div>
      </div>
      <p className="text_small_heading">
        夢境是睡眠時的一種心理現象，通常是在睡眠時出現的一系列感知、情感、思想、意識和幻覺的綜合體驗。
      </p>
      <div className="mt-10">
        <Suspense fallback={<div>Loading...</div>}>
          <GroupArticles articles={articles} page={1} search={""} />
        </Suspense>
      </div>
      {/* <PaginationButton prev={() => {}} next={() => {}} /> */}
    </div>
  );
}
