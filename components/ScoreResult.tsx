export default function ScoreResult({ score }: { score: number }) {
  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">评分结果</h1>
      {score ? (
        <p>
          您的评分是{" "}
          <span className="font-bold text-white text-1xl">{score}</span>。
        </p>
      ) : (
        <p>请输入评分进行搜索。</p>
      )}
    </div>
  );
}
