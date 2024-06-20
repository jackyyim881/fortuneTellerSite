"use client";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");

  const handleGenerateName = async () => {
    const response = await fetch(
      `http://localhost:3000/api/generate-name?name=${name}`
    );
    if (response.ok) {
      const data = await response.json();
      setNewName(data.newName);
    } else {
      console.error("Error generating name");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-4">
      <h1 className="text-4xl font-bold mb-8">风水改名</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="输入你的名字"
        className="p-2 border rounded w-full max-w-md"
      />
      <button
        onClick={handleGenerateName}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        生成新名字
      </button>
      {newName && (
        <div className="mt-8 p-4 bg-white rounded shadow-md max-w-md">
          <h2 className="text-2xl font-bold mb-2">新名字</h2>
          <p className="text-lg">{newName}</p>
        </div>
      )}
    </div>
  );
}
