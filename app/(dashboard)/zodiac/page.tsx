import Link from "next/link";
import { useMemo } from "react";

const animals = [
  { id: "龙", name: "龙", icon: "🐉" },
  { id: "蛇", name: "蛇", icon: "🐍" },
  { id: "马", name: "马", icon: "🐎" },
  { id: "羊", name: "羊", icon: "🐑" },
  { id: "猴", name: "猴", icon: "🐒" },
  { id: "鸡", name: "鸡", icon: "🐓" },
  { id: "狗", name: "狗", icon: "🐕" },
  { id: "猪", name: "猪", icon: "🐖" },
  { id: "鼠", name: "鼠", icon: "🐁" },
  { id: "牛", name: "牛", icon: "🐂" },
  { id: "虎", name: "虎", icon: "🐅" },
  { id: "兔", name: "兔", icon: "🐇" },
];
export default function Page() {
  const MemoizedAnimalsCategories = useMemo(() => animals, []);
  return (
    <div className="font-bold p-2">
      <div className="*:p-2">
        <h1 className="text__title">生肖</h1>
        <p className="text_small_heading">
          生肖是一种根据出生年份来划分的区域，每个区域都有一个对应的生肖名字。
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
