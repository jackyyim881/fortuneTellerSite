"use client";
import CompatibilityForm from "@/components/compatibility-form";

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className=" text-center font-bold text-black text-4xl mb-8">
        愛情兼容性計算機
      </h1>
      <CompatibilityForm compatibility={{ title: "愛情兼容性計算器" }} />
    </main>
  );
}
