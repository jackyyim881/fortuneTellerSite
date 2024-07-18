import prisma from "@/lib/prisma";
export async function fetchQuizQuestions() {
  "use server";
  const response = await prisma.question.findMany({
    select: {
      id: true,
      options: {
        select: {
          id: true,
          text: true,
        },
      },
      question: true,
    },
  });

  return response;
}
