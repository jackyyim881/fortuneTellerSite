"use server";

import { parseCharacters, Character } from "@/utils/parseCharacters";

type NameInput = {
  name: string;
};

export async function generateName(formData: FormData): Promise<string> {
  try {
    const characters = await parseCharacters();
    console.log(`Total characters parsed: ${characters.length}`);

    if (characters.length === 0) {
      console.error("No characters were parsed from the TSV file.");
      return "解析錯誤";
    }

    const input: NameInput = {
      name: formData.get("name") as string,
    };
    const element = calculateElement(input);
    console.log(`Calculated element: ${element}`);

    // 選擇符合五行的字
    const suitableChars = characters.filter(
      (char) =>
        char && // 確保字符對象存在
        isCharSuitableForElement(char, element) &&
        char.strokeCount >= 3 &&
        char.strokeCount <= 15
    );

    console.log(`Suitable characters: ${suitableChars.length}`);

    if (suitableChars.length === 0) {
      console.log("No suitable characters found. Returning default name.");
      return "無適合字";
    }

    // 隨機選擇兩個字作為名
    const firstName = getRandomChar(suitableChars);
    const secondName = getRandomChar(suitableChars);

    if (!firstName || !secondName) {
      console.error("Failed to get random characters.");
      return "選字錯誤";
    }

    console.log(`Generated name: ${firstName}${secondName}`);

    return firstName + secondName;
  } catch (error) {
    console.error("Error in generateName:", error);
    return "生成錯誤";
  }
}

function getRandomChar(chars: Character[]): string {
  const char = chars[Math.floor(Math.random() * chars.length)];
  if (!char || !char.zi) {
    console.error("Invalid character object:", char);
    return "錯";
  }
  return char.zi;
}

function calculateElement(input: NameInput): string {
  // 這裡應該實現真正的五行計算邏輯
  // 為了示例，我們隨機返回一個元素
  const elements = ["金", "木", "水", "火", "土"];
  return elements[Math.floor(Math.random() * elements.length)];
}

function isCharSuitableForElement(char: Character, element: string): boolean {
  // 這裡應該實現真正的字符與五行匹配邏輯
  // 為了示例，我們假設某些部首對應某些元素
  const elementRadicals: { [key: string]: string[] } = {
    金: ["金", "钅"],
    木: ["木", "竹"],
    水: ["水", "氵"],
    火: ["火", "灬"],
    土: ["土", "石"],
  };

  return elementRadicals[element].includes(char.radical);
}
