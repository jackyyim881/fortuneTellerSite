import FortuneForm from "@/components/fortune-form";
import ZodiacsList from "@/components/zodiacs-list";

import fs from "fs";
import Image from "next/image";
import path from "path";

async function getZodaics() {
  const filePath = path.join(process.cwd(), "public", "zodiacs.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const res = JSON.parse(jsonData);
  return res;
}

export default async function Page() {
  const data = await getZodaics();
  console.log(data);
  return (
    <>
      <ZodiacsList zodiacs={data}>
        <h1 className=" text-center font-bold text-black text-4xl mb-8">
          星座特質
        </h1>
      </ZodiacsList>
      <FortuneForm />
    </>
  );
}
