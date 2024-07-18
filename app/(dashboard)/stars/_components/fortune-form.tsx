"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Moon, Sun, User, Calendar, Clock } from "lucide-react";

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

    return (
      data &&
      router.push(
        `/test-results?name=${name}&gender=${gender}&year=${year}&month=${month}&day=${day}&hour=${hour}`
      )
    );
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-100 p-8 rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800">
        在線算命
      </h2>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div className="relative">
          <label
            htmlFor="name"
            className="text-sm font-medium text-gray-700 mb-1 block"
          >
            姓名
          </label>
          <div className="relative">
            <User
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
              placeholder="請輸入您的姓名"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            性別
          </label>
          <div className="flex space-x-4">
            <button
              type="button"
              className={`flex-1 py-3 px-4 rounded-md transition duration-150 ease-in-out ${
                gender === "male"
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => setGender("male")}
            >
              <Sun className="inline-block mr-2" size={18} /> 男
            </button>
            <button
              type="button"
              className={`flex-1 py-3 px-4 rounded-md transition duration-150 ease-in-out ${
                gender === "female"
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => setGender("female")}
            >
              <Moon className="inline-block mr-2" size={18} /> 女
            </button>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            出生日期和時間
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative">
              <Calendar
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <select
                value={year}
                onChange={(e) => setYear(parseInt(e.target.value))}
                className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out appearance-none"
              >
                {Array.from(
                  { length: 2024 - 1900 + 1 },
                  (_, i) => 1900 + i
                ).map((year) => (
                  <option key={year} value={year}>
                    {year}年
                  </option>
                ))}
              </select>
            </div>
            <select
              value={month}
              onChange={(e) => setMonth(parseInt(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out appearance-none"
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
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out appearance-none"
            >
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <option key={day} value={day}>
                  {day}日
                </option>
              ))}
            </select>
            <div className="relative">
              <Clock
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <select
                value={hour}
                onChange={(e) => setHour(parseInt(e.target.value))}
                className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out appearance-none"
              >
                {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}時
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            馬上算命
          </button>
          <button
            type="button"
            className="flex-1 bg-white text-indigo-600 py-3 px-6 rounded-md border border-indigo-600 hover:bg-indigo-50 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            稱骨算命
          </button>
        </div>
      </form>
    </div>
  );
}
