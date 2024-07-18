import Link from "next/link";
import { useMemo } from "react";
import { animals } from "./animals_list";
export default function Page() {
  const MemoizedAnimalsCategories = useMemo(() => animals, []);
  return (
    <div className="font-bold p-2">
      <div className="*:p-2">
        <h1 className="menu__title">生肖</h1>
        <p className="text_small_heading">
          生肖是一種根據出生年份來劃分的區域，每個區域都有一個對應的生肖名字。
        </p>
      </div>
      <ul className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {MemoizedAnimalsCategories.map((animal) => (
          <li
            key={animal.id}
            className="bg-white p-4 rounded-md shadow-md hover:bg-gray-100 flex items-center"
          >
            <Link href={`/zodiac/${animal.id}`} className="flex items-center">
              <span className="mr-2">{animal.icon}</span>
              {animal.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
