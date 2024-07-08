import prisma from "@/lib/prisma";

export async function fetchPsychTestQuestions() {
  const data = prisma.test.findMany({
    select: {
      id: true,
      title: true,
      description: true,
    },
  });

  return data;
}

export async function fetchPsychTestWithQuestions({ id }: { id: string }) {
  const data = await prisma.test.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      description: true,
      questions: {
        select: {
          id: true,
          question: true,
          type: true,
          category: true,
          instructions: true,
          options: {
            select: {
              id: true,
              text: true,
            },
          },
        },
      },
    },
  });

  return data;
}
