"use client";
import CompatibilityForm from "../components/CompatibilityForm";

export default function page() {
  return (
    <main className="">
      <div className="  max-w-4xl mx-auto p-4">
        <div className="   text-center">
          <h1 className="  font-bold text-black text-4xl mb-8">
            愛情兼容性計算機
          </h1>
          <CompatibilityForm />
        </div>
      </div>
    </main>
  );
}
