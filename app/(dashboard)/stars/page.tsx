import FortuneForm from "./_components/fortune-form";
import ZodiacsList from "./_components/zodiacs-list";

import fs from "fs";
import path from "path";

async function getZodaics() {
  const filePath = path.join(process.cwd(), "public", "zodiacs.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const res = JSON.parse(jsonData);
  return res;
}

export default async function Page() {
  const data = await getZodaics();
  return (
    <>
      <ZodiacsList zodiacs={data} />
      <FortuneForm />
    </>
  );
}
