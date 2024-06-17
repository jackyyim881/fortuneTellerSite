"use client";
import EditComponent from "@/components/edit-component";
import CardComponent from "@/components/ui/Card";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const params = useParams<{ id: string }>();
  const decodedId = decodeURIComponent(params.id);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className="p-4 ">
      <h1 className="text-3xl font-bold">生肖</h1>
      <div className="flex  items-center">
        <p className="mt-7 ">
          生肖是一种根据出生年份来划分的区域，每个区域都有一个对应的生肖名字。
        </p>
        <EditComponent isEditing={isEditing} toggleEditing={toggleEditing} />
      </div>
      <ul className="flex mt-7 space-x-4 ml-4">
        <li>{decodedId}</li> {/* Use the decoded ID here */}
      </ul>

      <div className="bg-white  max-w-[500px] p-4 mt-5 rounded-md">
        <label
          className="block mb-2 p-4    border-b-[0.5px]  text-md font-medium text-gray-900 dark:text-white"
          htmlFor="file_input"
        >
          Upload file
        </label>
        <input
          type="file"
          id="file_input"
          className="p-4     rounded-md file:mr-5 file:py-1 file:px-3 file:border-[1px] file:rounded-md    file:text-xs file:font-medium
   file:bg-stone-50 file:text-stone-700"
        />
      </div>
      <div className="mt-5 grid grid-cols-3 gap-4">
        <CardComponent
          title="生肖"
          description="生肖是一种根据出生年份来划分的区域，每个区域都有一个对应的生肖名字。"
          img="/images/zodiac.png"
          href="/zodiac"
          isEditing={isEditing}
        />
      </div>
    </div>
  );
}
