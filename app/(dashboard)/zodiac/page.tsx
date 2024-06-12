import Link from "next/link";

export default function Page() {
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

  return (
    <div className="p-4">
      <h1 className="text-3xl">生肖</h1>
      <p className="mt-7">
        生肖是一种根据出生年份来划分的区域，每个区域都有一个对应的生肖名字。
      </p>
      <ul className="flex mt-7 space-x-4 ml-4">
        {animals.map((animal) => (
          <Link href={`/zodiac/${animal.id}`} key={animal.name}>
            <li key={animal.id}>{animal.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
