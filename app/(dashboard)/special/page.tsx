import { headers } from "next/headers";
import { FetchSpecialTitleData } from "@/lib/scraper";
export default async function Page() {
  const article = 80;
  const data = await FetchSpecialTitleData(article);
  console.log(data);
  return (
    <>
      <div>
        <h1>Page</h1>
        <p>{data?.name}</p>
        <p>{data?.description}</p>
        <p>{data?.date}</p>
      </div>
    </>
  );
}
