"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SEARCH_PARAMS = {
  name: "",
  gender: "" as "male" | "female",
  year: "",
  month: "",
  day: "",
  hour: "",
} as const;
type SearchParamsType = keyof typeof SEARCH_PARAMS;

type FortuneData = {
  [key in SearchParamsType]: string;
};

export default function Page() {
  const searchParams = useSearchParams();
  const [result, setResult] = useState<string | null>(null);

  async function fetchFortune(data: FortuneData) {
    const response = await fetch("/api/calculate-fortune", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return await response.json();
  }
  const params = Object.keys(SEARCH_PARAMS).reduce((acc, key) => {
    const value = searchParams.get(key) || "";
    return { ...acc, [key]: value };
  }, {} as FortuneData);

  useEffect(() => {
    const allParamsPresent = Object.values(params).every(Boolean);
    if (allParamsPresent) {
      const fetchData = async () => {
        const result = await fetchFortune(params);
        setResult(result.fortune);
      };

      fetchData();
    }
  }, [params]);
  if (Object.values(params).some((param) => !param)) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          算命結果
        </h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              個人信息
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              您的個人詳細信息和算命結果。
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">姓名</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {params.name}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">性別</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {params.gender === "male" ? "男" : "女"}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">生日</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {`${params.year}年${params.month}月${params.day}日 ${params.hour}時`}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">算命結果</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {result ? (
                    result
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      正在計算中...
                    </span>
                  )}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
