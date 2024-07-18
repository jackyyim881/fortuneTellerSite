import { Suspense } from "react";
import ResultDisplay from "./_components/compatibility-result-display";

type PageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};
export default async function Page({ searchParams }: PageProps) {
  const date1 = searchParams.date1 as string;
  const time1 = searchParams.time1 as string;
  const date2 = searchParams.date2 as string;
  const time2 = searchParams.time2 as string;
  if (!date1 || !date2 || !time1 || !time2) {
    return <p className="text-red-500">請提供完整的信息來計算兼容性。</p>;
  }

  return (
    <div className="w-full max-w-2xl text-center">
      <h1 className="text-4xl mt-10 font-bold text-white mb-8">分析結果</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ResultDisplay
          date1={date1}
          time1={time1}
          date2={date2}
          time2={time2}
        />
      </Suspense>
    </div>
  );
}
