"use client";

import Link from "next/link";

type Categoryprops = {
  name: string;
  img: string;
};
export default function Categories({ data }: { data: Categoryprops[] }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between  rounded-md gap-x-4 gap-y-2 bg-white px-4 py-10 sm:px-6 xl:px-8">
      {data.map((category, index) => (
        <Link
          key={index}
          href={`/dream/${category.name}`}
          className="text-sm font-medium leading-6 text-gray-500"
        >
          <span
            className=" p-4  bg-neutral-200 rounded-md 
            text-black font-bold text-md hover:bg-slate-100 hover:text-slate-500 cursor-pointer
          
          "
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
