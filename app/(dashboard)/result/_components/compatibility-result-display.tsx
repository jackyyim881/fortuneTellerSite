import { calculateCompatibility } from "./compatibility-calculator";
import CompatibilityResultComponent from "./compatibility-result";
import MatchButton from "./match-button";

export default async function ResultDisplay({
  date1,
  time1,
  date2,
  time2,
}: {
  date1: string;
  time1: string;
  date2: string;
  time2: string;
}) {
  const result = await calculateCompatibility({ date1, time1, date2, time2 });

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
      <h1 className="text-xl font-bold mb-4">
        {date1} 和 {date2} 的兼容性
      </h1>
      <CompatibilityResultComponent result={result} />
      <MatchButton />
    </div>
  );
}
