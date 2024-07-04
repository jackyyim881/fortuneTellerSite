import { insertPsychTest } from "../../utils/insertPsychTest";
import testData from "./psychTestData.json";

async function main() {
  try {
    const result = await insertPsychTest(testData);
    console.log("Test inserted successfully:", result);
  } catch (error) {
    console.error("Error inserting test:", error);
  }
}

main();
