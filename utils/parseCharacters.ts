import fs from "fs";
import path from "path";

export type Character = {
  zi: string;
  strokeCount: number;
  mandarin_pinyin: string;
  english: string;
  radical: string;
};

export async function parseCharacters(): Promise<Character[]> {
  const filePath = path.join(process.cwd(), "public/data", "zi-dataset.tsv");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const lines = fileContent.split("\n").slice(1); // 跳過標題行

  return lines.map((line) => {
    const [zi, strokeCount, , mandarin_pinyin, , english, radical] =
      line.split("\t");
    return {
      zi,
      strokeCount: parseInt(strokeCount),
      mandarin_pinyin,
      english,
      radical,
    };
  });
}
