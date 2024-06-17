import { CheerioAPI, load } from "cheerio";

export type specialArticleData = {
  name: string;
  description: string;
  date: string;
};

export const FetchSpecialTitleData = async (
  article: number
): Promise<specialArticleData | null> => {
  try {
    const response = `http://www.suanming.com/zt/${article}.html`;
    const body = await fetch(response);
    const html = await body.text();
    const $: CheerioAPI = load(html);
    const name = $("span.type").text();
    const description = $("h3.tit").text();
    const date = $("span.zt-time").text();

    return { name, description, date };
  } catch (error) {
    console.error("Error fetching title data:", error);
    return null;
  }
};
