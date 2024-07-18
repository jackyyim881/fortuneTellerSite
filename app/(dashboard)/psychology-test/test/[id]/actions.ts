"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function saveData(data: any) {
  // Here you would typically save the data to your database
  console.log("Saving data:", data);

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Revalidate the path where this data is used
  revalidatePath("/path-to-revalidate");
}

export async function updateQuestionOptions(
  questionId: string,
  newOptions: { id?: string; text: string }[]
) {
  try {
    // Start a transaction
    const result = await prisma.$transaction(async (prisma) => {
      // Get the current options for the question
      const currentOptions = await prisma.option.findMany({
        where: { questionId: questionId },
        select: { id: true },
      });

      // Determine which options to delete, update, or create
      const currentOptionIds = new Set(currentOptions.map((o) => o.id));
      const newOptionIds = new Set(
        newOptions.filter((o) => o.id).map((o) => o.id)
      );

      const optionsToDelete = currentOptions.filter(
        (o) => !newOptionIds.has(o.id)
      );
      const optionsToUpdate = newOptions.filter(
        (o) => o.id && currentOptionIds.has(o.id)
      );
      const optionsToCreate = newOptions.filter((o) => !o.id);

      // Delete options that are no longer present
      if (optionsToDelete.length > 0) {
        await prisma.option.deleteMany({
          where: {
            id: { in: optionsToDelete.map((o) => o.id) },
          },
        });
      }

      // Update existing options
      for (const option of optionsToUpdate) {
        await prisma.option.update({
          where: { id: option.id },
          data: { text: option.text },
        });
      }

      // Create new options
      if (optionsToCreate.length > 0) {
        await prisma.option.createMany({
          data: optionsToCreate.map((option) => ({
            text: option.text,
            questionId: questionId,
          })),
        });
      }

      // Fetch and return the updated question with its options
      return await prisma.question.findUnique({
        where: { id: questionId },
        include: {
          options: {
            select: {
              id: true,
              text: true,
            },
          },
        },
      });
    });

    return { success: true, data: result };
  } catch (error) {
    console.error("Failed to update options:", error);
    return { success: false, error: "Failed to update options" };
  }
}
