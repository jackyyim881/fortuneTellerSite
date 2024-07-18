"use server";

import { revalidatePath } from "next/cache";

export async function submitCompatibilityData(formData: FormData) {
  const rawFormData = {
    date1: formData.get("date1") as string,
    time1: formData.get("time1") as string,
    date2: formData.get("date2") as string,
    time2: formData.get("time2") as string,
  };

  // Here you would typically save this data to a database
  // For this example, we'll just log it
  console.log("Submitted data:", rawFormData);

  // Revalidate the page to reflect the new data
  revalidatePath("/result");

  // Return the data to be used for redirection
  return { ...rawFormData };
}
