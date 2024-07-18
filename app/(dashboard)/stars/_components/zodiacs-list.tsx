"use client";

import { Zodiac, Zodiacs } from "@/types/types";
import Link from "next/link";
import clsx from "clsx";
type ZodiacsListProps = {
  zodiacs: Zodiacs;
  selectedZodiac: Zodiac;
  onSelectZodiac: (zodiac: Zodiac) => void;
};

export default function ZodiacsList({
  zodiacs,
  selectedZodiac,
  onSelectZodiac,
}: ZodiacsListProps) {
  return (
    <nav className="">
      <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        {zodiacs.map((zodiac, index) => (
          <li
            key={index}
            className="flex-shrink-0 grow bg-white sm:bg-transparent p-2  rounded-md  font-bold text-center list-none cursor-pointer"
            onClick={() => onSelectZodiac(zodiac)}
          >
            <div className="text-base  sm:text-xs text-center truncate">
              {zodiac.date}
            </div>
            <div className="flex flex-col  items-center mt-1 sm:mt-4">
              <Link
                href={`/stars/${zodiac.name}`}
                className={clsx(
                  "whitespace-nowrap border-b-2 px-1 pb-2 sm:pb-4 text-base  sm:text-xs md:text-md font-medium",
                  zodiac.name === selectedZodiac.name
                    ? "border-indigo-700 text-black"
                    : "border-transparent text-gray hover:border-gray-300 hover:text-gray-200"
                )}
                aria-current={
                  zodiac.name === selectedZodiac.name ? "page" : undefined
                }
              >
                {zodiac.name}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
