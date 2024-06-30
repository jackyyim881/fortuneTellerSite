"use client";
import CompatibilityForm from "./compatibility-form";

export default function Page() {
  return (
    <main className="p-2">
      <div className="text-center">
        <h1 className="text__title">愛情兼容性計算機</h1>
      </div>
      <div className="mt-6 leading-8">
        <CompatibilityForm compatibility={{ title: "愛情兼容性計算器" }} />
      </div>
    </main>
  );
}
