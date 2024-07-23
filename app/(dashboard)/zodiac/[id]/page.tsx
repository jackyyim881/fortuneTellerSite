import ZodaicsPageInfo from "../_components/zodiac-card";
import { getZodaics } from "./actions";
export default async function Page({ params }: { params: { id: string } }) {
  const decodedZodiacName = decodeURIComponent(params.id);
  const data = await getZodaics({ zodiacName: decodedZodiacName });

  return <ZodaicsPageInfo name="中國" data={data} />;
}
