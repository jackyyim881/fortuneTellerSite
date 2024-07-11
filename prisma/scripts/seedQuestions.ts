import { PsychTest } from "@/types/psychTest";
import { insertPsychTest } from "../../utils/insertPsychTest";
import testPsyData from "./psychTestData.json";

export async function seedQuestionsTest() {
  try {
    const test = testPsyData as PsychTest;
    const result = await insertPsychTest(test);
    console.log("Psych Test inserted successfully:", result);
  } catch (error) {
    console.error("Error inserting psych test:", error);
  }
}
