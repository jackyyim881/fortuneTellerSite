import Link from "next/link";
import { searchArticlesGroupsUseCase } from "../actions";
import { Button } from "@/components/Button";

export default async function GroupArticles({ search, page = 1 }) {
  const { data: articles, totalPages } = await searchArticlesGroupsUseCase(
    search ?? "",
    page
  );

  return (
    <>
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {page > 1 && (
            <Button variant="solid">
              <Link
                href={`?page=${page - 1}&search=${search ?? ""}`}
                className="block w-full h-full"
              >
                Previous
              </Link>
            </Button>
          )}
          {page < totalPages && (
            <Button variant="solid" className="">
              <Link
                href={`?page=${page + 1}&search=${search ?? ""}`}
                className="block w-full h-full"
              >
                Next
              </Link>
            </Button>
          )}
        </div>
        <p className="text-sm text-white border p-2  rounded-full">
          Page {page} of {totalPages}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
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
      </div>
    </>
  );
}
