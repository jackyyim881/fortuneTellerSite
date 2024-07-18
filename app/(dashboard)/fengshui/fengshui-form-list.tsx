"use client";
// components/Form.tsx
import React, { useState } from "react";
import InputField from "@/components/ui/InputField";
import { AstrologyData } from "@/types/fengshuiTypes";
export default function Form({ submitData }) {
  const [results, setResults] = useState<AstrologyData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  async function handleSubmit(formData: FormData) {
    setError(null);
    setIsProcessing(true);
    const responseString = await submitData(formData);
    const response = JSON.parse(responseString);
    if (response.success) {
      setResults(response.data);
    } else {
      setError(response.error);
    }
  }
  if (error) {
    return (
      <div className="text-red-500">
        <h2>Error:</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (results) {
    return (
      <div className=" relative left-0  p-2">
        <h2 className="text-black text-xl">紫星成功！</h2>

        <div>
          <h3>Result:</h3>
        </div>
        <button onClick={() => setResults(null)}>Clear</button>
        <div>
          <ul>
            {results.palaces.map((palace, index) => (
              <li key={index}>
                {palace.earthlyBranch}
                <ul>
                  {palace.majorStars.map((star, starIndex) => (
                    <li key={starIndex}>
                      {star.name} ({star.brightness})
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <>
      <form className="mt-6 space-y-4" action={handleSubmit}>
        <InputField
          label="阳历日期 (YYYY-M-D)"
          name="solarDateStr"
          type="date"
          date="2001-01-01"
          required
        />
        <InputField
          label="出生时辰序号 (0~12)"
          name="timeIndex"
          type="number"
          required
          min={0}
          max={12}
        />
        <InputField
          label="性别 (男/女)"
          name="gender"
          type="select"
          required
          options={[
            { value: "男", label: "男" },
            { value: "女", label: "女" },
          ]}
        />
        <InputField
          label="是否调整闰月"
          name="fixLeap"
          type="select"
          options={[
            { value: "true", label: "是" },
            { value: "false", label: "否" },
          ]}
        />
        <InputField
          label="语言"
          name="language"
          type="select"
          options={[
            { value: "zh-CN", label: "简体中文" },
            { value: "zh-TW", label: "繁体中文" },
            { value: "en-US", label: "English (US)" },
            { value: "ko-KR", label: "한국어" },
            { value: "ja-JP", label: "日本語" },
          ]}
        />
        <button
          type="submit"
          disabled={isProcessing}
          className="mt-4 w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {isProcessing ? "Processing..." : "Get Astrolabe"}
        </button>
      </form>
    </>
  );
}
