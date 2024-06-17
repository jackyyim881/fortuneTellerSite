"use client";
import ResultDisplay from "@/components/compatibility-result-display";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
export default function Page() {
  const [data, setData] = useState({
    date1: "",
    time1: "",
    date2: "",
    time2: "",
  });

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams?.toString());
  const date1 = params.get("date1");
  const time1 = params.get("time1");
  const date2 = params.get("date2");
  const time2 = params.get("time2");
  useEffect(() => {
    if (date1 && time1 && date2 && time2) {
      setData({
        date1: date1,
        time1: time1,
        date2: date2,
        time2: time2,
      });
    }
  }, [date1, time1, date2, time2]);
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-4xl mt-10 font-bold text-white mb-8">分析結果</h1>
        <ResultDisplay
          date1={data.date1}
          time1={data.time1}
          date2={data.date2}
          time2={data.time2}
        />
      </div>
    </div>
  );
}
