import { auth } from "@clerk/nextjs/server";
import TarotRandomCard from "./_components/tarot-random-card-btn";
import Link from "next/link";

export default async function Page() {
  const { userId } = auth();

  return (
    <div className="p-4">
      <h1 className="menu__title">塔羅牌</h1>
      {userId ? (
        <TarotRandomCard />
      ) : (
        <div
          className="bg-yellow-100 mt-5 border-l-4 border-yellow-500 text-yellow-700 p-4"
          role="alert"
        >
          <p className="font-bold">注意</p>
          <p>您需要登錄才能使用塔羅牌功能。</p>
          <Link
            href="/sign-in"
            className="mt-2 inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
          >
            登錄
          </Link>
        </div>
      )}
    </div>
  );
}
