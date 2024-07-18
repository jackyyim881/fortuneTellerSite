/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
interface Chance {
  href?: string | undefined;
  text?: string;
  img?: string | undefined;
}

export default function RandomChance({
  initialChances,
}: {
  initialChances: Chance[];
}) {
  const chances = initialChances;
  if (!chances || chances.length === 0) {
    return <div>加载中...</div>;
  }
  const htmRegex = /\.htm$/;

  return (
    <div className="container mx-auto  mt-5">
      <div className="border p-4 rounded">
        <h2 className=" menu__title mb-2">籤詩 / 祈福籤</h2>
        <ul className="flex flex-col bg-blue-300">
          {chances.map((chance, index) => (
            <li key={index} className="p-4">
              {chance.href && (
                <Link href={chance.href} passHref>
                  <span className=" bg-black p-2 text-white hover:underline cursor-pointer">
                    {chance.text || "View Details"}
                  </span>
                </Link>
              )}
              {chance.img && (
                <img
                  src={`http://www.chance.org.tw/${encodeURIComponent(
                    chance.img
                  )}`}
                  alt={chance.text || "Chance Image"}
                  width={200} // Specify appropriate width
                  height={200} // Specify appropriate height
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
