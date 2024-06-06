"use client";
import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function CompatibilityForm() {
  const [date1, setDate1] = useState<string>("");
  const [time1, setTime1] = useState<string>("00:00");
  const [date2, setDate2] = useState<string>("");
  const [time2, setTime2] = useState<string>("00:00");
  const router = useRouter();

  useEffect(() => {
    // 从本地存储中恢复数据
    const savedDate1 = localStorage.getItem("date1");
    const savedTime1 = localStorage.getItem("time1");
    const savedDate2 = localStorage.getItem("date2");
    const savedTime2 = localStorage.getItem("time2");

    if (savedDate1) setDate1(savedDate1);
    if (savedTime1) setTime1(savedTime1);
    if (savedDate2) setDate2(savedDate2);
    if (savedTime2) setTime2(savedTime2);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // 保存数据到本地存储
    localStorage.setItem("date1", date1);
    localStorage.setItem("time1", time1);
    localStorage.setItem("date2", date2);
    localStorage.setItem("time2", time2);
    router.push(
      `/result?date1=${date1}&time1=${time1}&date2=${date2}&time2=${time2}`
    );
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">愛情兼容性計算器</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            甲方 - 出生日期
          </label>
          <input
            type="date"
            value={date1}
            onChange={(e) => setDate1(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            時間（當地時間）
          </label>
          <input
            type="time"
            value={time1}
            onChange={(e) => setTime1(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            乙方 - 出生日期
          </label>
          <input
            type="date"
            value={date2}
            onChange={(e) => setDate2(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            時間（當地時間）
          </label>
          <input
            type="time"
            value={time2}
            onChange={(e) => setTime2(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          計算兼容性
        </button>
      </form>
    </div>
  );
}
