"use client";

import { useState } from "react";
import { Zodiac, Zodiacs } from "@/types/types";
import Link from "next/link";
import clsx from "clsx";
import ZodiacDetails from "@/components/ui/actions_with_shared_borders";

export default function ZodiacsList({ zodiacs }: { zodiacs: Zodiacs }) {
  const [selectedZodiac, setSelectedZodiac] = useState<Zodiac>(zodiacs[0]);
  const handleSelectedZodiac = (zodiac: Zodiac) => {
    setSelectedZodiac(zodiac);
  };
  return (
    <div className="overflow-x-auto">
      <nav className="">
        <div className="flex -mb-px  space-x-4">
          {zodiacs.map((zodiac, index) => (
            <li
              key={index}
              className="flex-1 font-bold text-center list-none  cursor-pointer"
              onClick={() => handleSelectedZodiac(zodiac)}
            >
              <div className="text-[10px] sm:text-xs text-center truncate">
                {zodiac.date}
              </div>
              <div className="flex flex-col sm:text-sm  mt-4 items-center">
                <Link
                  href={`/stars/${zodiac.name}`}
                  className={clsx(
                    "whitespace-nowrap border-b-2 px-1 pb-4 md:text-md font-medium",
                    zodiac.name === selectedZodiac.name
                      ? "border-indigo-700 text-black"
                      : "border-transparent text-white hover:border-gray-300 hover:text-gray-200"
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
        </div>
      </nav>
      <div className="mt-6">
        {selectedZodiac && <ZodiacDetails selectedZodiac={selectedZodiac} />}
      </div>
    </div>
  );
}
