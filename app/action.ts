"use server";
import { currentUser } from "@clerk/nextjs/server";
import { astro } from "iztro";

enum Gender {
  Male = "男",
  Female = "女",
}

export const authuser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be signed in to use this feature");
  }
  return user;
};

export async function submitData(formData: FormData) {
  "use server";
  const rawFormData = {
    solarDateStr: formData.get("solarDateStr") as string,
    gender: formData.get("gender") as Gender,
    timeIndex: parseInt(formData.get("timeIndex") as string),
    fixLeap: formData.get("fixLeap") === "true",
    language: formData.get("language") as string,
  };
  const astrolabe = astro.bySolar(
    rawFormData.solarDateStr,
    rawFormData.timeIndex,
    rawFormData.gender,
    rawFormData.fixLeap,
    rawFormData.language
  );
  console.log(astrolabe);
}
