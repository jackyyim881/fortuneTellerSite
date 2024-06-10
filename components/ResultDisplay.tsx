"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MatchButton from "./MatchPeopleComponent";
import SwitchLanguage from "./SwitchLangauge";

const calculateCompatibility = (
  date1: string,
  time1: string,
  date2: string,
  time2: string
): {
  score: number;
  analysis1: string;
  analysis2: string;
  compatibilityAnalysis: string;
} => {
  const w1 = 0.25;
  const w2 = 0.25;
  const w3 = 0.25;
  const w4 = 0.25;

  const birth1 = new Date(date1);
  const birth2 = new Date(date2);
  const ageDiff = Math.abs(
    (birth1.getTime() - birth2.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
  );
  const ageMatch = Math.max(0, 100 - ageDiff * 5);

  const zodiacSign = (day: number, month: number): string => {
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "水瓶座";
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "雙魚座";
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "牡羊座";
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "金牛座";
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "雙子座";
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "巨蟹座";
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "獅子座";
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "處女座";
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22))
      return "天秤座";
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21))
      return "天蠍座";
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21))
      return "射手座";
    return "摩羯座";
  };

  const zodiacAnalysis = (sign: string): string => {
    const analyses: { [key: string]: string } = {
      水瓶座: "水瓶座以創新和進步著稱。",
      雙魚座: "雙魚座是富有同情心和藝術氣質的人。",
      牡羊座: "牡羊座是勇敢和充滿活力的。",
      金牛座: "金牛座是可靠和有耐心的。",
      雙子座: "雙子座是適應性強和外向的。",
      巨蟹座: "巨蟹座是直覺和多愁善感的。",
      獅子座: "獅子座是自信和慷慨的。",
      處女座: "處女座是分析和細緻的。",
      天秤座: "天秤座是外交和迷人的。",
      天蠍座: "天蠍座是充滿激情和足智多謀的。",
      射手座: "射手座是愛冒險和樂觀的。",
      摩羯座: "摩羯座是紀律嚴明和負責任的。",
    };
    return analyses[sign] || "沒有分析資料。";
  };

  const compatibilityAnalysis = (sign1: string, sign2: string): string => {
    const analyses: { [key: string]: string } = {
      水瓶座雙魚座:
        "水瓶座和雙魚座共享深厚的智慧聯繫，但可能在情感連接上有困難。",
      牡羊座金牛座: "牡羊座和金牛座有強烈的身體聯繫，但可能因為固執而衝突。",
      雙子座巨蟹座: "雙子座和巨蟹座有互補的關係，平衡彼此的優勢和弱點。",
      金牛座金牛座: "兩個金牛座在一起可以創造穩定和諧的關係。",
      雙子座雙子座:
        "兩個雙子座在一起可以有令人興奮和充滿活力的關係，充滿智力刺激。",
      巨蟹座巨蟹座: "兩個巨蟹座在一起可以形成深厚情感和滋養的關係。",
      獅子座獅子座:
        "兩個獅子座在一起可以創造充滿激情和戲劇性的關係，彼此互相仰慕。",
      處女座處女座:
        "兩個處女座在一起可以形成實際和高效的關係，專注於共同目標。",
      天秤座天秤座: "兩個天秤座在一起可以創造平衡和諧的關係，充滿相互尊重。",
      天蠍座天蠍座: "兩個天蠍座在一起可以形成充滿激情和深厚的關係。",
      射手座射手座:
        "兩個射手座在一起可以創造愛冒險和令人興奮的關係，充滿相互探索。",
      摩羯座摩羯座:
        "兩個摩羯座在一起可以形成紀律嚴明和目標導向的關係，專注於共同成功。",
      // 添加更多星座配對分析
    };
    return analyses[sign1 + sign2] || "沒有特定的配對分析資料。";
  };

  const sign1 = zodiacSign(birth1.getUTCDate(), birth1.getUTCMonth() + 1);
  const sign2 = zodiacSign(birth2.getUTCDate(), birth2.getUTCMonth() + 1);
  const analysis1 = zodiacAnalysis(sign1);
  const analysis2 = zodiacAnalysis(sign2);
  const compatibilityAnalysisResult = compatibilityAnalysis(sign1, sign2);

  const compatibilityChart: { [key: string]: number } = {
    水瓶座雙魚座: 80,
    牡羊座金牛座: 70,
    雙子座巨蟹座: 60,
    金牛座金牛座: 75,
    雙子座雙子座: 85,
    巨蟹座巨蟹座: 90,
    獅子座獅子座: 95,
    處女座處女座: 80,
    天秤座天秤座: 85,
    天蠍座天蠍座: 70,
    射手座射手座: 65,
    摩羯座摩羯座: 75,
  };

  const zodiacMatch =
    (compatibilityChart[sign1 + sign2] || 50) + (Math.random() * 10 - 5);

  const t1 = new Date(`1970-01-01T${time1}`);
  const t2 = new Date(`1970-01-01T${time2}`);
  const diffMinutes = Math.abs((t1.getTime() - t2.getTime()) / (1000 * 60));
  const timeMatch = Math.max(0, 100 - diffMinutes / 1.44);

  const currentYear = new Date().getUTCFullYear();
  const commonYears = Math.min(
    currentYear - birth1.getUTCFullYear(),
    currentYear - birth2.getUTCFullYear()
  );
  const commonYearsMatch = Math.min(100, commonYears * 5);

  const matchingPercentage =
    w1 * ageMatch + w2 * zodiacMatch + w3 * timeMatch + w4 * commonYearsMatch;
  return {
    score: Math.max(0, Math.min(100, matchingPercentage)),
    analysis1,
    analysis2,
    compatibilityAnalysis: compatibilityAnalysisResult,
  };
};
type SearchdataProps = {
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
}: SearchdataProps) {
  const router = useRouter();
  const [result, setResult] = useState<{
    score: number;
    analysis1: string;
    analysis2: string;
    compatibilityAnalysis: string;
  } | null>(null);

  useEffect(() => {
    if (date1 && date2) {
      const result = calculateCompatibility(
        date1 as string,
        time1 as string,
        date2 as string,
        time2 as string
      );
      setResult(result);
    }
  }, [date1, date2, time1, time2]);

  const handleBack = () => {
    router.push("/");
  };
  const handleMatch = () => {
    router.push("/match");
  };

  if (!date1 || !date2) {
    return <p className="text-red-500">請提供完整的信息來計算兼容性。</p>;
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
      <div className="">
        <SwitchLanguage />
      </div>
      <h2 className="text-xl font-bold mb-4">
        {date1} 和 {date2} 的兼容性
      </h2>
      {result !== null ? (
        <>
          <p className="text-2xl text-blue-600 font-semibold">
            兼容性分數: {(result.score / 10).toFixed(1)} 分
          </p>
          <p className="text-lg mt-4">個性分析：</p>
          <p className="text-md text-gray-700">{result.analysis1}</p>
          <p className="text-md text-gray-700">{result.analysis2}</p>
          <p className="text-lg mt-4">配對分析：</p>
          <p className="text-md text-gray-700">
            {result.compatibilityAnalysis}
          </p>
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
