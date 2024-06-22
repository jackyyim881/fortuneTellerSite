import path from "path";
import fs from "fs";
import ZodaicsPageInfo from "../_components/zodaics_form";

async function getZodaics({ zodiacName }: any) {
  const filePath = path.join(process.cwd(), "public", "zodiacs.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  const zodiacSigns = data.zodiacSigns;

  const filteredZodiac = zodiacSigns.filter((zodiac: any) => {
    return zodiac.name === zodiacName;
  });

  return filteredZodiac;
}

export default async function Page({ params }: { params: { id: string } }) {
  const decodedId = decodeURIComponent(params.id);
  const name = decodedId;
  const data = await getZodaics({ zodiacName: name });
  console.log(data);
  return (
    <>
      <div className="">
        <ZodaicsPageInfo name={decodedId} data={data} />
      </div>
      {/* {data?.map((zodiac: any) => {
        return (
          <div key={zodiac.id}>
            <h1>{zodiac.name}</h1>
            <p>{zodiac.luckyNumbers}</p>
          </div>
        ); */}
    </>
  );
}
