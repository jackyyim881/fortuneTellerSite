"use client";
import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { LocalStorage } from "./local-storage-data";
import { saveCompatibilityCalculation } from "@/utils/saveCompatibilityCalculation";
import { useUser } from "@clerk/nextjs";
type SearchdataProps = {
  date1: string;
  time1: string;
  date2: string;
  time2: string;
};

type CompatibilityProps = {
  compatibility: any;
  href?: string;
  title?: string;
};

export default function CompatibilityForm({ href, title }: CompatibilityProps) {
  const router = useRouter();
  const [inputs, setInputs] = useState<SearchdataProps>({
    date1: "",
    time1: "00:00",
    date2: "",
    time2: "00:00",
  });

  useEffect(() => {
    const keysToStateMap = {};
    for (const key in keysToStateMap) {
      const savedValue = localStorage.getItem(key);
      if (savedValue) {
        setInputs((prev) => ({
          ...prev,
          [key]: savedValue,
        }));
      }
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    const dataToStore = {
      date1: inputs.date1,
      time1: inputs.time1,
      date2: inputs.date2,
      time2: inputs.time2,
    };
    e.preventDefault();
    LocalStorage(dataToStore);
    // const submit = await saveCompatibilityCalculation(date1);
    router.push(
      `/result?date1=${inputs.date1}&time1=${inputs.time1}&date2=${inputs.date2}&time2=${inputs.time2}`
    );
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl text-center font-bold mb-6">{title}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="label__text">甲方 - 出生日期</label>
          <input
            type="date"
            value={inputs.date1}
            onChange={(e) => setInputs({ ...inputs, date1: e.target.value })}
            required
            className="input"
          />
        </div>
        <div className="mb-6">
          <label className="label__text">時間（當地時間）</label>
          <input
            type="time"
            value={inputs.time1}
            onChange={(e) => setInputs({ ...inputs, time1: e.target.value })}
            className="input"
          />
        </div>
        <div className="mb-6">
          <label className="label__text">乙方 - 出生日期</label>
          <input
            type="date"
            value={inputs.date2}
            onChange={(e) => setInputs({ ...inputs, date2: e.target.value })}
            required
            className="input"
          />
        </div>
        <div className="mb-6">
          <label className="label__text">時間（當地時間）</label>
          <input
            type="time"
            value={inputs.time2}
            onChange={(e) => setInputs({ ...inputs, time2: e.target.value })}
            className="input"
          />
        </div>
        <button type="submit" className="button__primary">
          計算兼容性
        </button>
      </form>
    </div>
  );
}
