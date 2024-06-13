"use client";

import Link from "next/link";

type Categoryprops = {
  name: string;
  img: string;
};
export default function Categories({ data }: { data: Categoryprops[] }) {
  return (
    <div className="flex bg-slate-100 p-4  space-x-4">
      {data.map((category, index) => (
        <Link key={index} href={`/dream/${category.name}`} className="flex">
          <span className=" p-4 bg-white "> {category.name}</span>
        </Link>
      ))}
    </div>
  );
}
