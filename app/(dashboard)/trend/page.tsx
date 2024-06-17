import SpinningWheel from "@/components/spinning-wheel";

export default function page() {
  return (
    <div className="font-bold text-2xl p-4 text-white">
      <h1>星座</h1>
      <p>
        星座是一種根據太陽在黃道上的位置來劃分的區域，每個區域都有一個對應的星座名稱。
      </p>
      <h1 className="text-center text-3xl font-bold my-8">
        Spin the Wheel to Test Your Luck!
      </h1>
      <SpinningWheel />
    </div>
  );
}
