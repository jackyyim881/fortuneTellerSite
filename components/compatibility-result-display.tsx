"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MatchButton from "./match-button";
import { calculateCompatibility } from "./compatibility/compatibility-calculator";
import { saveCompatibilityCalculation } from "@/utils/saveCompatibilityCalculation";
import { useUser } from "@clerk/nextjs";

type SearchDataProps = {
  date1: string;
  time1: string;
  date2: string;
  time2: string;
};
export default function ResultDisplay({
  date1,
  time1,
  date2,
  time2,
}: SearchDataProps) {
  const clerkUser = useUser();
  const router = useRouter();
  const [result, setResult] = useState<{
    score: number;
    analysis1: string;
    analysis2: string;
    compatibilityAnalysis: string;
  } | null>(null);

  useEffect(() => {
    if (date1 && date2) {
      const result = calculateCompatibility({ date1, time1, date2, time2 });
      setResult(result);

      console.log("Saved compatibility calculation", result);
    }
  }, [date1, date2, time1, time2]);

  const handleBack = () => {
    router.push("/");
  };

  if (!date1 || !date2) {
    return <p className="text-red-500">請提供完整的信息來計算兼容性。</p>;
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
      <h2 className="text-xl font-bold mb-4">
        {date1} 和 {date2} 的兼容性
      </h2>
      {result !== null ? (
        <>
          <div className="text-2xl text-blue-600 font-semibold">
            兼容性分數: {(result.score / 10).toFixed(1)} 分
          </div>
          <div className="text-lg mt-4">個性分析：</div>
          <div className="text-md text-gray-700">{result.analysis1}</div>
          <div className="text-md text-gray-700">{result.analysis2}</div>
          <div className="text-lg mt-4">配對分析：</div>
          <div className="text-md text-gray-700">
            {result.compatibilityAnalysis}
          </div>
          <div className=" space-x-4">
            <MatchButton />
            <button
              onClick={handleBack}
              className="mt-4 bg-blue-600 font-bold text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              返回
            </button>
          </div>
        </>
      ) : (
        <p>計算中...</p>
      )}
    </div>
  );
}
