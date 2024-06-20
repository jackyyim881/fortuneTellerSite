"use client";
import CompatibilityForm from "./compatibility-form";

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto p-4">
      <div className="">
        <h1 className=" md:text-3xl text-center mt-2 font-bold tracking-tight text-gray-900 sm:text-2xl">
          愛情兼容性計算機
        </h1>
      </div>
      <div className="m-4">
        <CompatibilityForm compatibility={{ title: "愛情兼容性計算器" }} />
      </div>
    </main>
  );
}
