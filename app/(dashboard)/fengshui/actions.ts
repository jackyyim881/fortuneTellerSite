"use server";

import { astro } from "iztro";
import { FormDataProps } from "@/types/types";
import { Language } from "iztro/lib/data/types";
import { Horoscope } from "iztro/lib/data/types";
enum Gender {
  Male = "男",
  Female = "女",
}

export async function getAstrolabe(formData: FormData): Promise<any> {
  const rawFormData: FormDataProps = {
    solarDateStr: formData.get("solarDateStr") as string,
    gender: formData.get("gender") as Gender,
    timeIndex: parseInt(formData.get("timeIndex") as string),
    fixLeap: formData.get("fixLeap") === "true",
    language: formData.get("language") as Language,
  };
  try {
    const astrolabe = astro.bySolar(
      rawFormData.solarDateStr,
      rawFormData.timeIndex,
      rawFormData.gender,
      rawFormData.fixLeap,
      rawFormData.language
    );
    const serializedData = JSON.parse(
      JSON.stringify({ success: true, data: astrolabe })
    );
    return JSON.stringify(serializedData);
  } catch (error) {
    console.error("Error:", error);
    return { success: false, error: error };
  }
}
