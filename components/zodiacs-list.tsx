"use client";

import Image from "next/image";
import { useState } from "react";
import { Zodiac, Zodiacs } from "@/types/types";
import Link from "next/link";

export default function ZodiacsList({
  children,
  zodiacs,
}: {
  children: React.ReactNode;
  zodiacs: Zodiacs;
}) {
  const [selectedZodiac, setSelectedZodiac] = useState<Zodiac>(zodiacs[0]);

  return (
    <div className="">
      <nav className="bg-red-600 font-bold py-2 mb-4  rounded-md">
        <ul className="flex flex-wrap space-x-4  justify-around p-2  list-none">
          {zodiacs.map((zodiac, index) => (
            <li
              key={index}
              className="flex-1 text-center active:bg-red-700  rounded-md  bg-red-500 cursor-pointer p-2"
              onClick={() => setSelectedZodiac(zodiac)}
            >
              <div className="flex flex-col items-center">
                {zodiac.img ? (
                  <Image
                    src={zodiac.img}
                    alt={zodiac.name}
                    width={50}
                    height={50}
                  />
                ) : (
                  <span className="text-white">No Image</span>
                )}
                <Link href={`/stars/${zodiac.name}`} className="text-white">
                  {zodiac.name}
                </Link>
                <span className="text-white text-sm">{zodiac.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </nav>
      {selectedZodiac && (
        <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-purple-700 text-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 flex flex-col items-center mb-4 md:mb-0">
              <Image
                src={selectedZodiac.img}
                alt={selectedZodiac.name}
                className="rounded-full ring-2 ring-red-500"
                width={100}
                height={100}
              />
              <h2 className="text-4xl font-bold mt-2">{selectedZodiac.name}</h2>
              <h3 className="text-xl">({selectedZodiac.date})</h3>
            </div>
            <div className="w-full md:w-2/3 p-4">
              <div className="grid grid-cols-2 gap-4">
                <p>
                  <strong>關鍵詞:</strong> {selectedZodiac?.details.keyword}
                </p>
                <p>
                  <strong>主宰星:</strong> {selectedZodiac?.details.planet}
                </p>
                <p>
                  <strong>顏色:</strong> {selectedZodiac?.details.color}
                </p>
                <p>
                  <strong>寶石:</strong> {selectedZodiac?.details.gemstone}
                </p>
                <p>
                  <strong>元素:</strong> {selectedZodiac?.details.element}
                </p>
                <p>
                  <strong>性格特徵:</strong> {selectedZodiac?.details.traits}
                </p>
                <p>
                  <strong>配對星座:</strong>{" "}
                  {selectedZodiac?.details.compatibility}
                </p>
                <p>
                  <strong>幸運數字:</strong>{" "}
                  {selectedZodiac?.details.luckyNumber}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
