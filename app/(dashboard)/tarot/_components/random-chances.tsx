/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Chance {
  href?: string | undefined;
  text?: string;
  img?: string | undefined;
}

export default function RandomChance() {
  const [chances, setChances] = useState<Chance[]>([]);

  useEffect(() => {
    const fetchChances = async () => {
      try {
        const response = await fetch("/api/chance");
        const data = await response.json();
        console.log(data);
        setChances(data);
      } catch (error) {
        console.error("Failed to fetch chances:", error);
      }
    };
    fetchChances();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="border p-4 rounded">
        <h2 className="text-xl font-bold mb-2">籤詩 / 祈福籤</h2>
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
