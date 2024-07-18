import FortuneForm from "./_components/fortune-form";

import fs from "fs";
import path from "path";
import ZodiacContainer from "./_components/zodiacs-container";
async function getZodaics() {
  const filePath = path.join(process.cwd(), "public", "stars.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const res = JSON.parse(jsonData);
  return res;
}

export default async function Page() {
  const zodiacs = await getZodaics();
  return (
    <>
      <div className="">
        <ZodiacContainer initialZodiacs={zodiacs} />
        <FortuneForm />
      </div>
    </>
  );
}
