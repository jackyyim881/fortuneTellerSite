"use server";

import path from "path";
import fs from "fs";

export async function sendFileAction() {
  return { success: "true" };
}

export async function getZodaics({ zodiacName }: any) {
  const filePath = path.join(process.cwd(), "public", "zodiacs.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  const zodiacSigns = data.zodiacSigns;

  const filteredZodiac = zodiacSigns.filter((zodiac: any) => {
    return zodiac.name === zodiacName;
  });

  return filteredZodiac;
}
