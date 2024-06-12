"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

async function fetchFortune(data: any) {
  const response = await fetch("/api/calculate-fortune", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return await response.json();
}

export default function Page() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const gender = searchParams.get("gender");
  const year = searchParams.get("year");
  const month = searchParams.get("month");
  const day = searchParams.get("day");
  const hour = searchParams.get("hour");
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    if (name && gender && year && month && day && hour) {
      const fetchData = async () => {
        const data = { name, gender, year, month, day, hour };
        const result = await fetchFortune(data);
        setResult(result.fortune);
      };

      fetchData();
    }
  }, [name, gender, year, month, day, hour]);

  if (!name || !gender || !year || !month || !day || !hour) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mt-4 text-center font-bold mb-4">算命結果</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <p>
          <strong>姓名:</strong> {name}
        </p>
        <p>
          <strong>性別:</strong> {gender === "male" ? "男" : "女"}
        </p>
        <p>
          <strong>生日:</strong> {`${year}年${month}月${day}日 ${hour}時`}
        </p>
        <p>
          <strong>結果:</strong> {result ? result : "Fetching result..."}
        </p>
      </div>
    </div>
  );
}
