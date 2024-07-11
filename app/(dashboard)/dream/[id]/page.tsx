import { Suspense } from "react";
import { ArticleList } from "./_components/article-list";
import Loading from "@/app/loading";
import Link from "next/link";

export default async function DreamCategoryPage({
  params,
}: {
  params: { id: string };
}) {
  const DecodedChineseCategory = decodeURIComponent(params.id);
  console.log(DecodedChineseCategory);

  return (
    <>
      <div className="font-bold p-2">
        <div className="*:p-2">
          <Link href="/dream">
            <span className="text-blue-100 hover:underline">Back</span>
          </Link>
          <h1 className="  text__title">
            <Suspense fallback={<Loading />}>
              <ArticleList category={DecodedChineseCategory} />
            </Suspense>
          </h1>
        </div>
      </div>
    </>
  );
}
