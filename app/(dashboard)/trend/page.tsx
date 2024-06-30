import SpinningWheel from "./_components/spinning-wheel";

export default function page() {
  return (
    <div className="font-bold  p-2 text-white">
      <div className="*:p-2">
        <h1 className="text__title">星座</h1>
        <p className="text_small_heading">
          星座是一種根據太陽在黃道上的位置來劃分的區域，每個區域都有一個對應的星座名稱。
        </p>
        <h1 className="text-center text-3xl font-bold my-8">
          抽今天的幸運數字是
        </h1>
        <SpinningWheel />
      </div>
    </div>
  );
}
