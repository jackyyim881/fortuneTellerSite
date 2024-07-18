"use server";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
export async function createTest(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  try {
    await prisma.test.create({
      data: {
        title,
        description,
      },
    });

    revalidatePath("/psychology-test");
  } catch (error) {
    console.error("Failed to create test:", error);
    throw new Error("Failed to create test");
  }
}
