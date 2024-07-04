"use server";

import { PsychTest, Question } from "@/types/psychTest";
import prisma from "@/lib/prisma";
export async function fetchPsychTestQuestions(): Promise<PsychTest> {
  const testMetadata = await prisma.test.findUnique({
    where: {
      id: "1",
    },
    select: {
      title: true,
      description: true,
    },
  });

  const fetchQuestions = await prisma.question.findMany({
    include: {
      options: true,
    },
  });
  const transformedQuestions: Question[] = fetchQuestions.map((q) => ({
    question: q.question,
    options: q.options.map((o) => o.text),
    type: q.type, // Adjust this as necessary
    category: q.category, // Adjust this as necessary
    instructions: q.instructions, // Adjust this as necessary
  }));

  return {
    id: "1",
    title: testMetadata?.title || "",
    description: testMetadata?.description || "",
    questions: transformedQuestions,
  };
}

export async function editPsychTestQuestions(
  formData: PsychTest | FormData,
  prevState: PsychTest
) {
  const { id, title, description, questions } = formData as PsychTest;

  const testMetadata = await prisma.test.update({
    where: {
      id,
    },
    data: {
      title,
      description,
    },
  });

  const updatedQuestions = await Promise.all(
    questions.map(async (q) => {
      const { question, options, type, category, instructions } = q;
      const updatedQuestion = await prisma.question.update({
        where: {
          id: "1",
        },
        data: {
          question,
          type, // Adjust this as necessary
          category, // Adjust this as necessary
          instructions, // Adjust this as necessary
          options: {
            deleteMany: {},
            createMany: {
              data: options.map((o) => ({ text: o })),
            },
          },
        },
      });

      return updatedQuestion;
    })
  );

  return {
    title: testMetadata.title,
    description: testMetadata.description,
    questions: updatedQuestions,
  };
}
