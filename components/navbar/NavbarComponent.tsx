import Link from "next/link";

export default function NavbarComponent() {
  return (
    <nav className="bg-red-600 py-2">
      <ul className="flex justify-around m-0 p-0 list-none">
        <li className="flex-1 text-center">
          <Link
            href="/"
            className="text-white text-lg px-4 py-2 block hover:bg-red-700 rounded"
          >
            首頁
          </Link>
        </li>
        <li className="flex-1 text-center">
          <Link
            href="/stars"
            className="text-white text-lg px-4 py-2 block hover:bg-red-700 rounded"
          >
            星座
          </Link>
        </li>
        <li className="flex-1 text-center">
          <Link
            href="/trend"
            className="text-white text-lg px-4 py-2 block hover:bg-red-700 rounded"
          >
            運勢
          </Link>
        </li>
        <li className="flex-1 text-center">
          <Link
            href="/zodiac"
            className="text-white text-lg px-4 py-2 block hover:bg-red-700 rounded"
          >
            生肖
          </Link>
        </li>
        <li className="flex-1 text-center">
          <Link
            href="/dream"
            className="text-white text-lg px-4 py-2 block hover:bg-red-700 rounded"
          >
            周公解夢
          </Link>
        </li>
        <li className="flex-1 text-center">
          <Link
            href="/psychology-test"
            className="text-white text-lg px-4 py-2 block hover:bg-red-700 rounded"
          >
            心理測試
          </Link>
        </li>
        <li className="flex-1 text-center">
          <Link
            href="/fengshui"
            className="text-white text-lg px-4 py-2 block hover:bg-red-700 rounded"
          >
            風水命理
          </Link>
        </li>
        <li className="flex-1 text-center">
          <Link
            href="/blood-type"
            className="text-white text-lg px-4 py-2 block hover:bg-red-700 rounded"
          >
            血型
          </Link>
        </li>
        <li className="flex-1 text-center">
          <Link
            href="/tarot"
            className="text-white text-lg px-4 py-2 block hover:bg-red-700 rounded"
          >
            塔羅牌
          </Link>
        </li>
        <li className="flex-1 text-center">
          <Link
            href="/naming"
            className="text-white text-lg px-4 py-2 block hover:bg-red-700 rounded"
          >
            起名
          </Link>
        </li>
        <li className="flex-1 text-center">
          <Link
            href="/special"
            className="text-white text-lg px-4 py-2 block hover:bg-red-700 rounded"
          >
            專題
          </Link>
        </li>
        <li className="flex-1 text-center">
          <Link
            href="/more"
            className="text-white text-lg px-4 py-2 block hover:bg-red-700 rounded"
          >
            更多
          </Link>
        </li>
      </ul>
    </nav>
  );
}
