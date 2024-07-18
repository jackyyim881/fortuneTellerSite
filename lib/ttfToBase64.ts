import fs from "fs";
import path from "path";

// Assuming you have a predefined list of allowed fonts
const allowedFonts = ["TaipeiSans.ttf"];

export const ttfToBase64 = (fontPath: string): string | null => {
  // Extract the font name from the path and check if it's allowed
  const fontName = path.basename(fontPath);
  if (!allowedFonts.includes(fontName)) {
    console.error(`Access to font "${fontName}" is not allowed.`);
    return null;
  }
  // in public/fonts folder
  try {
    const resolvedPath = path.resolve(
      process.cwd(),
      "public",
      "fonts",
      fontName
    );
    const fontBuffer = fs.readFileSync(resolvedPath);
    return fontBuffer.toString("base64");
  } catch (error) {
    console.error(`Error reading font file: ${error}`);
    return null;
  }
};
