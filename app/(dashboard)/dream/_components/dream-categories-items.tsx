"use client";

import Link from "next/link";

type Categoryprops = {
  name: string;
  img: string;
};
export default function Categories({ data }: { data: Categoryprops[] }) {
  return (
    <div className="  space-x-4 space-y-4 py-4 bg-white rounded-lg shadow-md  ">
      {data.map((category, index) => (
        <Link key={index} href={`/dream/${category.name}`} className=" ">
          <span
            className=" ml-4 px-4 py-2  bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out
          
          "
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
