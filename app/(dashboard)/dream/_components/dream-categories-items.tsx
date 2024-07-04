"use client";

import Link from "next/link";

type Categoryprops = {
  name: string;
  img: string;
};
export default function Categories({ data }: { data: Categoryprops[] }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center sm:justify-start bg-slate-50 p-4 rounded-md shadow-md">
      {data.map((category, index) => (
        <Link
          key={index}
          href={`/dream/${category.name}`}
          className="w-full sm:w-auto"
        >
          <span
            className="block text-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out          
          "
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
