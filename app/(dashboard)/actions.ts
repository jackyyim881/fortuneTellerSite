"use server";

import { revalidatePath } from "next/cache";

export async function submitCompatibilityData(formData: FormData) {
  const rawFormData = {
    date1: formData.get("date1") as string,
    time1: formData.get("time1") as string,
    date2: formData.get("date2") as string,
    time2: formData.get("time2") as string,
  };

  console.log("Submitted data:", rawFormData);

  revalidatePath("/result");

  return { ...rawFormData };
}
