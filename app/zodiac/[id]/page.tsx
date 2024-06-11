"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams<{ id: string }>();
  const decodedId = decodeURIComponent(params.id);

  return (
    <div className="p-4">
      <h1 className="text-3xl">生肖</h1>
      <p className="mt-7">
        生肖是一种根据出生年份来划分的区域，每个区域都有一个对应的生肖名字。
      </p>
      <ul className="flex mt-7 space-x-4 ml-4">
        <li>{decodedId}</li> {/* Use the decoded ID here */}
      </ul>
    </div>
  );
}
