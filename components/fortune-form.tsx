"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function FortuneForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [year, setYear] = useState(2000);
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  const [hour, setHour] = useState(0);
  const router = useRouter();
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch("/api/calculate-fortune", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, gender, year, month, day, hour }),
    });

    const data = await response.json();
    // Handle the response data (e.g., display the results)

    console.log(data);

    router.push(
      `/test-results?name=${name}&gender=${gender}&year=${year}&month=${month}&day=${day}&hour=${hour}`
    );
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">在線算命</h2>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">姓名</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>
        <div className="flex space-x-2">
          <button
            type="button"
            className={`p-2 border rounded w-full ${
              gender === "male" ? "bg-red-600 text-white" : ""
            }`}
            onClick={() => setGender("male")}
          >
            男
          </button>
          <button
            type="button"
            className={`p-2 border rounded w-full ${
              gender === "female" ? "bg-red-600 text-white" : ""
            }`}
            onClick={() => setGender("female")}
          >
            女
          </button>
        </div>
        <div>
          <label className="block mb-2">生日</label>
          <div className="flex space-x-2">
            <select
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value))}
              className="p-2 border rounded"
            >
              {Array.from({ length: 2024 - 1900 + 1 }, (_, i) => 1900 + i).map(
                (year) => (
                  <option key={year} value={year}>
                    {year}年
                  </option>
                )
              )}
            </select>
            <select
              value={month}
              onChange={(e) => setMonth(parseInt(e.target.value))}
              className="p-2 border rounded"
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                <option key={month} value={month}>
                  {month}月
                </option>
              ))}
            </select>
            <select
              value={day}
              onChange={(e) => setDay(parseInt(e.target.value))}
              className="p-2 border rounded"
            >
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <option key={day} value={day}>
                  {day}日
                </option>
              ))}
            </select>
            <select
              value={hour}
              onChange={(e) => setHour(parseInt(e.target.value))}
              className="p-2 border rounded"
            >
              {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
                <option key={hour} value={hour}>
                  {hour}時
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            type="submit"
            className="bg-yellow-500 text-white py-2 px-4 rounded w-full"
          >
            馬上算命
          </button>
          <button
            type="button"
            className="bg-yellow-500 text-white py-2 px-4 rounded w-full"
          >
            稱骨算命
          </button>
        </div>
      </form>
    </div>
  );
}
