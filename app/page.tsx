"use client";
import CompatibilityForm from "../components/CompatibilityForm";

export default function page() {
  const onSubmit = (e: any) => {
    e.preventDefault();
    const data = fetch("/api/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <main className="">
      <div className="  max-w-4xl mx-auto p-4">
        <div className="   text-center">
          <h1 className="  font-bold text-black text-4xl mb-8">
            愛情兼容性計算機
          </h1>
          <CompatibilityForm />
          <button
            onClick={onSubmit}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            計算
          </button>
        </div>
      </div>
    </main>
  );
}
