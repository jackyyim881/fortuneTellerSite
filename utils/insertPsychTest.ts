import { PrismaClient } from "@prisma/client";
import { PsychTest, TestCreationResult } from "../types/psychTest";

const prisma = new PrismaClient();

export async function insertPsychTest(
  testData: PsychTest
): Promise<TestCreationResult> {
  return await prisma.test.create({
    data: {
      title: testData.title,
      description: testData.description,
      questions: {
        create: testData.questions.map((q) => ({
          question: q.question,
          type: q.type,
          category: q.category,
          instructions: q.instructions,
          options: {
            create: q.options.map((opt) => ({ text: opt })),
          },
        })),
      },
    },
    include: {
      questions: {
        include: {
          options: true,
        },
      },
    },
  });
}
