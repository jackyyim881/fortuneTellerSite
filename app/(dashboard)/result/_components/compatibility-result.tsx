import { CompatibilityResult } from "./compatibility-calculator";

export default function CompatibilityResultComponent({
  result,
}: {
  result: CompatibilityResult;
}) {
  return (
    <>
      <div className="text-2xl text-blue-600 font-semibold">
        兼容性分數: {result.score.toFixed(1)} 分
      </div>
      <div className="text-lg mt-4">個性分析</div>
      <div className="text-md text-gray-700">{result.analysis1}</div>
      <div className="text-md text-gray-700">{result.analysis2}</div>
      <div className="text-lg mt-4">配對分析</div>
      <div className="text-md text-gray-700">
        {result.compatibilityAnalysis}
      </div>
    </>
  );
}
