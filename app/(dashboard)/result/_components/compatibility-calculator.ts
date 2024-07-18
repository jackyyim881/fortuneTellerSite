"use server";

import {
  zodiacSign,
  zodiacAnalysis,
  compatibilityAnalysis,
  compatibilityScore,
} from "@/utils/zodiac";

export type CompatibilityResult = {
  score: number;
  analysis1: string;
  analysis2: string;
  compatibilityAnalysis: string;
};

type SearchDataProps = {
  date1: string;
  time1: string;
  date2: string;
  time2: string;
};

export async function calculateCompatibility({
  date1,
  time1,
  date2,
  time2,
}: SearchDataProps): Promise<CompatibilityResult> {
  // Simulate some async operation (e.g., database lookup or external API call)
  await new Promise((resolve) => setTimeout(resolve, 100));

  const [birth1, birth2] = [new Date(date1), new Date(date2)];

  const [sign1, sign2] = [
    zodiacSign(birth1.getUTCDate(), birth1.getUTCMonth() + 1),
    zodiacSign(birth2.getUTCDate(), birth2.getUTCMonth() + 1),
  ];
  const [analysis1, analysis2] = [zodiacAnalysis(sign1), zodiacAnalysis(sign2)];

  const ageDiff = Math.abs(
    (birth1.getTime() - birth2.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
  );
  const ageMatch = Math.max(0, 100 - ageDiff * 5);
  const compatibilityAnalysisResult = compatibilityAnalysis(sign1, sign2);

  const zodiacMatch =
    compatibilityScore(sign1, sign2) + (Math.random() * 10 - 5);
  const [t1, t2] = [
    new Date(`1970-01-01T${time1}`),
    new Date(`1970-01-01T${time2}`),
  ];
  const diffMinutes = Math.abs((t1.getTime() - t2.getTime()) / (1000 * 60));
  const timeMatch = Math.max(0, 100 - diffMinutes / 1.44);

  const currentYear = new Date().getUTCFullYear();
  const commonYears = Math.min(
    currentYear - birth1.getUTCFullYear(),
    currentYear - birth2.getUTCFullYear()
  );
  const commonYearsMatch = Math.min(100, commonYears * 5);

  const w1 = 0.25,
    w2 = 0.25,
    w3 = 0.25,
    w4 = 0.25;
  const matchingPercentage =
    w1 * ageMatch + w2 * zodiacMatch + w3 * timeMatch + w4 * commonYearsMatch;

  return {
    score: Math.max(0, Math.min(100, matchingPercentage)),
    analysis1,
    analysis2,
    compatibilityAnalysis: compatibilityAnalysisResult,
  };
}
