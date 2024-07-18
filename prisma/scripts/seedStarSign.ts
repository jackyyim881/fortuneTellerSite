import prisma from "../../lib/prisma";
import sampleData from "./sampleData.json";
export async function seedStarSigns() {
  try {
    for (const starSign of sampleData.starSigns) {
      await prisma.starSign.upsert({
        where: { name: starSign.name },
        update: {},
        create: { name: starSign.name },
      });
    }
  } catch (error) {
    console.error("Error inserting star signs:", error);
  }
}
