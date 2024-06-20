import Link from "next/link";
import { useMemo } from "react";

const animals = [
  { id: "鼠", name: "鼠" },
  { id: "牛", name: "牛" },
  { id: "虎", name: "虎" },
  { id: "兔", name: "兔" },
  { id: "龙", name: "龙" },
  { id: "蛇", name: "蛇" },
  { id: "马", name: "马" },
  { id: "羊", name: "羊" },
  { id: "猴", name: "猴" },
  { id: "鸡", name: "鸡" },
  { id: "狗", name: "狗" },
  { id: "猪", name: "猪" },
];
export default function Page() {
  const MemoizedAnimalsCategories = useMemo(() => animals, []);
  return (
    <div className="font-bold p-2">
      <div className="*:p-2">
        <h1 className="text-3xl">生肖</h1>
        <p className="text-base font-semibold leading-6 text-gray-900">
          生肖是一种根据出生年份来划分的区域，每个区域都有一个对应的生肖名字。
        </p>
      </div>
      <ul className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {MemoizedAnimalsCategories.map((animal) => (
          <Link href={`/zodiac/${animal.id}`} key={animal.name}>
            <li
              key={animal.id}
              className="bg-white p-4 rounded-md shadow-md hover:bg-gray-100"
            >
              {animal.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
