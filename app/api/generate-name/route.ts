import { NextResponse, NextRequest } from "next/server";
import fs from "fs/promises";

// 简单的风水改名规则示例
const fengshuiRules = (name: string): string => {
  const elements = ["金", "木", "水", "火", "土"];
  const vowels = ["a", "e", "i", "o", "u"];
  const randomVowel = vowels[Math.floor(Math.random() * vowels.length)];
  const randomElement = elements[Math.floor(Math.random() * elements.length)];

  // 根据名字的长度来决定添加的元素
  const elementChar = name.length % elements.length;
  const newName = name
    .split("")
    .map((char, index) => {
      if (index === elementChar) {
        return randomElement;
      }
      return vowels.includes(char.toLowerCase()) ? randomVowel : char;
    })
    .join("");
  return newName;
};
// declare const parseTsv: <T>(tsvFilepath: string) => T[];
// type stokeCount = {
//   zi: string;
//   stroke: number;
// };
// const stokeCounts: stokeCount[] = parseTsv<stokeCount>("data/zi-dataset.tsv");

export async function GET(request: NextRequest) {
  const name = request.nextUrl.searchParams.get("name");
  console.log(name);
  if (!name || typeof name !== "string") {
    return NextResponse.json({ error: "Invalid name" }, { status: 400 });
  }

  const newName = fengshuiRules(name);
  return NextResponse.json({ originalName: name, newName }, { status: 200 });
}
