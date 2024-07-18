import { seedArticles, seedCategories } from "./seedArticles";
import { seedQuestionsTest } from "./seedQuestions";
import { seedStarSigns } from "./seedStarSign";
import jsonData from "./articlesTestData.json";
import jsonContentData from "./articlesTestContentData.json";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // await seedCategories(jsonData.categories);
  // await seedArticles(jsonContentData.articles);
  await seedQuestionsTest();

  // await seedStarSigns();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
