"use client";

import clsx from "clsx";
import Link from "next/link";

type Category = {
  name: string;
  img: string;
};

type CategoryProps = {
  data: Category[];
  activeCategory: string | null;
  onCategoryClick: (category: string) => void;
};

export default function Categories({
  data,
  activeCategory,
  onCategoryClick,
}: CategoryProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center sm:justify-start  p-2 rounded-md ">
      {data.map((category, index) => (
        <Link
          key={index}
          href={`/dream/${category.name}`}
          className="w-full sm:w-auto"
          onClick={() => onCategoryClick(category.name)}
        >
          <span
            className={clsx(
              "block text-center text-sm font-bold px-4 py-2 rounded-lg shadow transition duration-300 ease-in-out",
              {
                "bg-blue-600 text-white": activeCategory === category.name,
                "bg-gray-200 text-gray-500 hover:bg-blue-500 hover:text-white":
                  activeCategory !== category.name,
              }
            )}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
