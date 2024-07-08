"use server";

import { revalidatePath } from "next/cache";

export async function saveData(data: any) {
  // Here you would typically save the data to your database
  console.log("Saving data:", data);

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Revalidate the path where this data is used
  revalidatePath("/path-to-revalidate");
}
