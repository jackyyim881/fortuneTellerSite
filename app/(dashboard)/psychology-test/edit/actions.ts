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

export async function editPsychTestQuestions(formData: FormData, id: string) {
  const rawFormData = {
    id: formData.get("id"),
    title: formData.get("title"),
    description: formData.get("description"),
    questions: JSON.parse(formData.get("questions") as string),
  };

  const testMetadata = await prisma.test.update({
    where: {
      id: rawFormData.id as string,
    },
    data: {
      title: rawFormData.title as string,
      description: rawFormData.description as string,
    },
  });

  const updatedQuestions = await Promise.all(
    rawFormData.questions.map(async (question: Question) => {
      const updatedQuestion = await prisma.question.update({
        where: {
          id: question.question,
        },
        data: {
          question: question.question,
          type: question.type, // Adjust this as necessary
          category: question.category, // Adjust this as necessary
          instructions: question.instructions, // Adjust this as necessary
        },
      });

      const updatedOptions = await Promise.all(
        question.options.map(async (option: string, idx: number) => {
          const updatedOption = await prisma.option.update({
            where: {
              id: question.options[idx],
            },
            data: {
              text: option,
            },
          });
          return updatedOption;
        })
      );

      return {
        ...updatedQuestion,
        options: updatedOptions,
      };
    })
  );

  return {
    title: testMetadata.title,
    description: testMetadata.description,
    questions: updatedQuestions,
  };
}

export async function editQuestion(prevState: any, formData: FormData) {
  "use server";

  const questionId = formData.get("questionId") as string;
  const updatedQuestion = formData.get("question") as string;
  const updatedOptions = JSON.parse(formData.get("options") as string);
  console.log(questionId, updatedQuestion, updatedOptions);
  try {
    // First, update the question text
    await prisma.question.update({
      where: { id: questionId },
      data: { question: updatedQuestion },
    });

    // Then, update the options
    // Assuming each option has an 'id' and 'text' field
    for (const option of updatedOptions) {
      await prisma.option.upsert({
        where: { id: option.id },
        update: { text: option.text },
        create: {
          id: option.id,
          text: option.text,
          questionId: questionId,
        },
      });
    }
    return {
      message: "Question updated successfully",
      options: updatedOptions,
    };
    // Here, implement the logic to update the question in your database
    // This is a placeholder - replace with your actual update logic

    // Revalidate the page to show updated data
    // revalidatePath(`/questions/${questionId}`);
  } catch (error) {
    return {
      message: "Failed to update question",
    };
  }
}
