import { searchArticlesGroupsUseCase } from "../actions";
import PaginationButton from "./pagination-button";

export default async function GroupArticles({ articles, search, page }) {
  const { data, perPage, total } = await searchArticlesGroupsUseCase(
    search ?? "",
    page
  );

  return (
    <>
      <div className=" grid grid-cols-1 gap-10 md:grid-cols-3">
        {articles.map((article) => (
          <div key={article.id} className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl text-gray-700 font-bold mb-2">
              {article.title}
            </h2>
            <p className="text-gray-700 text-xl leading-relaxed">
              {article.content}
            </p>
          </div>
        ))}
        <PaginationButton
          currentPage={page}
          totalPages={total}
          onPageChange={perPage}
        />
      </div>
    </>
  );
}
