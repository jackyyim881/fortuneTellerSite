"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DreamSearchBar() {
  const [keyword, setKeyword] = useState("");

  const router = useRouter();

  const handleSearch = () => {
    router.push(`/dream?search=${keyword}`);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">夢見</h2>
      <div className="flex items-center">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="p-2 border rounded w-full"
          placeholder="请输入做梦内容的关键词，如'火'"
        />
      </div>
      <button
        onClick={handleSearch}
        className="   bg-slate-200 mt-4 text-black py-2 px-4 rounded ml-2  hover:bg-slate-300 "
      >
        解夢
      </button>
    </div>
  );
}
