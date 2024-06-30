"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MatchButton from "./match-button";
import { calculateCompatibility } from "./compatibility-calculator";

type SearchDataProps = {
  date1: string;
  time1: string;
  date2: string;
  time2: string;
};

type CompatibilityResult = {
  score: number;
  analysis1: string;
  analysis2: string;
  compatibilityAnalysis: string;
};
async function saveCompatibility(postData) {
  try {
    const response = await fetch("/api/compatibility", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error("Failed to save compatibility calculation");
    }

    console.log("Saved compatibility calculation", postData);
  } catch (error) {
    console.error("Error saving compatibility calculation", error);
    throw error; // Rethrow to handle in the component
  }
}
export default function ResultDisplay({
  date1,
  time1,
  date2,
  time2,
}: SearchDataProps) {
  const router = useRouter();
  const [result, setResult] = useState<CompatibilityResult | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (date1 && date2 && time1 && time2) {
      const localResult = calculateCompatibility({
        date1,
        time1,
        date2,
        time2,
      });
      setResult(localResult);
      saveCompatibility({
        birthDateA: date1,
        birthTimeA: time1,
        birthDateB: date2,
        birthTimeB: time2,
        ...localResult,
      }).catch((error) => setError(error.message));
    }
  }, [date1, date2, time1, time2]);

  if (!date1 || !date2) {
    return <p className="text-red-500">請提供完整的信息來計算兼容性。</p>;
  }

  const handleClick = async () => {
    router.push("/");
  };

  return (
    <>
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-xl font-bold mb-4">
          {date1} 和 {date2} 的兼容性
        </h1>
        {error && <p className="text-red-500">{error}</p>}
        {result ? (
          <>
            <CompatibilityResult result={result} />
            <div className="space-x-4">
              <MatchButton />
              <button
                onClick={handleClick}
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
    </>
  );
}
function CompatibilityResult({ result }: any) {
  return (
    <>
      <div className="text-2xl text-blue-600 font-semibold">
        兼容性分數: {(result.score / 10).toFixed(1)} 分
      </div>
      <div className="text-lg mt-4">個性分析</div>
      <div className="text-md text-gray-700">{result.analysis1}</div>
      <div className="text-md text-gray-700">{result.analysis2}</div>
      <div className="text-lg mt-4">配對分析</div>
      <div className="text-md text-gray-700">
        {result.compatibilityAnalysis}
      </div>
    </>
  );
}
